const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/c5161220-cf43-468e-b627-a3bceeede40a.png"
          alt="REVA University campus"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Crack the Code to Your{" "}
          <span className="text-secondary">Dream Job</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get exclusive interview playbooks and preparation strategies from your REVA University seniors.
        </p>

        <button className="btn-hero text-xl">
          Get Started with Your REVA Email
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;