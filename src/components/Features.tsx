import { Users, BookOpen, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Verified Seniors",
      description: "Trustworthy advice from your own campus. Real experiences from students who've walked the path before you."
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Breakdowns",
      description: "From online tests to HR rounds. Detailed insights into every stage of the interview process."
    },
    {
      icon: Target,
      title: "Winning Strategies",
      description: "Learn what resources they used and the mistakes they made. Get the insider knowledge that makes the difference."
    }
  ];

  return (
    <section id="features" className="section-padding-large bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-primary">Our Platform?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to transform from a confused student to a confident job-ready graduate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;