# Backend setup (Supabase)

This project uses Supabase (Postgres + Auth + RLS) with Google sign-in restricted to `@reva.edu.in`.

## Prerequisites
- Supabase project
- Supabase CLI (optional for local dev)
- Google OAuth credentials configured in Supabase (Authorized domain: `reva.edu.in`)

## Provision schema
1) In the Supabase SQL editor, run the contents of `backend/schema.sql`.
2) (Optional) Seed branches:
```
insert into public.branches (code, name) values
  ('CSE', 'Computer Science and Engineering'),
  ('ECE', 'Electronics and Communication Engineering')
  on conflict do nothing;
```

## Auth configuration
- Go to Authentication → Settings → External OAuth → Google.
- Set **Authorized Domains** to `reva.edu.in` (and any subdomains you need).
- Set **Redirect URLs** to your dev/prod frontends (e.g., `http://localhost:8080` and your deployed URL).

## Environment variables (frontend)
Copy `.env.example` to `.env` inside the `frontend` folder and fill:
```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-anon-public-key>
```

## Notes on policies
- `playbooks` are readable by any authenticated user when `status='published'`; authors and admins can see drafts.
- `playbook_rounds` visibility inherits from parent playbook.
- `favorites` are only visible to the owning user.
- `profiles` mirror `auth.users`; role can be `junior`, `senior`, or `admin`.

## Local dev with Supabase CLI (optional)
If you prefer local dev:
```
supabase start
supabase db push
```
Then point `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the local project.
