"use client";

import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission" className="section-padding-large relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)
            `
          }}
          animate={{ 
            background: [
              `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 75% 25%, hsl(var(--primary) / 0.05) 0%, transparent 50%), radial-gradient(circle at 25% 75%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)`,
              `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)`
            ]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our{" "}
          <motion.span 
            className="text-primary relative"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Mission
          </motion.span>
        </motion.h2>
        
        <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            We believe that knowledge should never die with its bearer. Every successful 
            student at REVA University has a story, a strategy, and insights that could 
            transform another student's journey.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Our mission is to build a legacy of knowledge—a comprehensive repository 
            where each batch contributes their experiences for the benefit of future 
            students. Together, we're creating the ultimate campus resource that ensures 
            no student has to navigate their career journey alone.
          </motion.p>
          
          <motion.p 
            className="text-primary font-semibold text-2xl relative"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 0px hsl(var(--primary))",
                  "0 0 10px hsl(var(--primary) / 0.5)",
                  "0 0 0px hsl(var(--primary))"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Building bridges between batches, one success story at a time.
            </motion.span>
            
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg blur-lg"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;