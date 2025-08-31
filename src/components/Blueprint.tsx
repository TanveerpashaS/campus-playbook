import { Key } from "lucide-react";

const Blueprint = () => {
  return (
    <section className="section-padding bg-accent/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Key className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Unlock the{" "}
            <span className="text-primary">Placement Blueprint</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
          What if you could access the combined knowledge of every placed senior on campus? 
          No hesitation, no awkward intros. Just the exact strategies and insights you need to succeed.
        </p>
      </div>
    </section>
  );
};

export default Blueprint;