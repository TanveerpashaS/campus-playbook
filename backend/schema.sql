-- Supabase schema for The Campus Playbook
-- Domain restriction handled via Supabase Auth settings (see backend/README.md)

create extension if not exists "pgcrypto";

-- Profiles mirror auth.users; role can be junior/senior/admin
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  branch text,
  role text check (role in ('junior', 'senior', 'admin')) default 'junior',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.branches (
  code text primary key,
  name text not null
);

create table if not exists public.playbooks (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  company text not null,
  role text not null,
  placement_type text not null check (placement_type in ('on-campus', 'off-campus')),
  branch text,
  year integer,
  anonymity_flag boolean not null default false,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_playbooks_company on public.playbooks (company);
create index if not exists idx_playbooks_role on public.playbooks (role);
create index if not exists idx_playbooks_status on public.playbooks (status);
create index if not exists idx_playbooks_branch on public.playbooks (branch);

create table if not exists public.playbook_rounds (
  id uuid primary key default gen_random_uuid(),
  playbook_id uuid not null references public.playbooks(id) on delete cascade,
  order_index integer not null,
  round_type text,
  details text,
  questions text,
  resources text,
  mistakes text,
  key_topics text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_rounds_playbook on public.playbook_rounds (playbook_id);
create index if not exists idx_rounds_order on public.playbook_rounds (playbook_id, order_index);

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  playbook_id uuid not null references public.playbooks(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, playbook_id)
);

-- Utility: update timestamps
create or replace function public.set_current_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

do $$
begin
  if not exists (select 1 from pg_trigger where tgname = 'profiles_set_timestamp') then
    create trigger profiles_set_timestamp
    before update on public.profiles
    for each row execute procedure public.set_current_timestamp();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'playbooks_set_timestamp') then
    create trigger playbooks_set_timestamp
    before update on public.playbooks
    for each row execute procedure public.set_current_timestamp();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'playbook_rounds_set_timestamp') then
    create trigger playbook_rounds_set_timestamp
    before update on public.playbook_rounds
    for each row execute procedure public.set_current_timestamp();
  end if;
end;
$$;

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.playbooks enable row level security;
alter table public.playbook_rounds enable row level security;
alter table public.favorites enable row level security;

-- Helper expression for admin detection
create or replace view public.admin_users as
select id from public.profiles where role = 'admin';

-- profiles policies
create policy if not exists "Profiles are readable by authenticated users" on public.profiles
for select using (auth.role() = 'authenticated');

create policy if not exists "Users can insert their own profile" on public.profiles
for insert with check (auth.uid() = id);

create policy if not exists "Users can update their own profile" on public.profiles
for update using (auth.uid() = id);

-- playbooks policies
create policy if not exists "Published playbooks visible to all authed" on public.playbooks
for select using (
  status = 'published' OR
  author_id = auth.uid() OR
  exists (select 1 from public.admin_users a where a.id = auth.uid())
);

create policy if not exists "Authors can insert playbooks" on public.playbooks
for insert with check (auth.uid() = author_id);

create policy if not exists "Authors or admins can update playbooks" on public.playbooks
for update using (
  author_id = auth.uid() OR
  exists (select 1 from public.admin_users a where a.id = auth.uid())
);

create policy if not exists "Authors or admins can delete playbooks" on public.playbooks
for delete using (
  author_id = auth.uid() OR
  exists (select 1 from public.admin_users a where a.id = auth.uid())
);

-- playbook_rounds policies (inherit visibility from parent playbook)
create policy if not exists "Rounds visible with parent playbook access" on public.playbook_rounds
for select using (
  exists (
    select 1 from public.playbooks p
    where p.id = playbook_id and (
      p.status = 'published' OR
      p.author_id = auth.uid() OR
      exists (select 1 from public.admin_users a where a.id = auth.uid())
    )
  )
);

create policy if not exists "Authors can insert rounds" on public.playbook_rounds
for insert with check (
  exists (
    select 1 from public.playbooks p
    where p.id = playbook_id and (
      p.author_id = auth.uid() OR
      exists (select 1 from public.admin_users a where a.id = auth.uid())
    )
  )
);

create policy if not exists "Authors or admins can update rounds" on public.playbook_rounds
for update using (
  exists (
    select 1 from public.playbooks p
    where p.id = playbook_id and (
      p.author_id = auth.uid() OR
      exists (select 1 from public.admin_users a where a.id = auth.uid())
    )
  )
);

create policy if not exists "Authors or admins can delete rounds" on public.playbook_rounds
for delete using (
  exists (
    select 1 from public.playbooks p
    where p.id = playbook_id and (
      p.author_id = auth.uid() OR
      exists (select 1 from public.admin_users a where a.id = auth.uid())
    )
  )
);

-- favorites policies
create policy if not exists "Users can view their favorites" on public.favorites
for select using (user_id = auth.uid());

create policy if not exists "Users can add favorites" on public.favorites
for insert with check (user_id = auth.uid());

create policy if not exists "Users can remove their favorites" on public.favorites
for delete using (user_id = auth.uid());
