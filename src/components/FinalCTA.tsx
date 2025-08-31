const FinalCTA = () => {
  return (
    <section className="section-padding-large bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Build Your{" "}
          <span className="text-secondary">Future?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          Join hundreds of REVA students who are already using insider knowledge 
          to land their dream jobs. Your future self will thank you.
        </p>

        <div className="space-y-4">
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-12 py-6 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Get Started with Your REVA Email
          </button>
          
          <p className="text-primary-foreground/80 text-sm">
            Free access for all REVA University students
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;