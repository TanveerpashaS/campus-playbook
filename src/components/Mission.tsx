const Mission = () => {
  return (
    <section id="mission" className="section-padding-large">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Our{" "}
          <span className="text-primary">Mission</span>
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed">
          <p>
            We believe that knowledge should never die with its bearer. Every successful 
            student at REVA University has a story, a strategy, and insights that could 
            transform another student's journey.
          </p>
          
          <p>
            Our mission is to build a legacy of knowledge—a comprehensive repository 
            where each batch contributes their experiences for the benefit of future 
            students. Together, we're creating the ultimate campus resource that ensures 
            no student has to navigate their career journey alone.
          </p>
          
          <p className="text-primary font-semibold text-2xl">
            Building bridges between batches, one success story at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;