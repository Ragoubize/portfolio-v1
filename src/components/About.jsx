import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Decoration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* T9der tdir tswirtk hna */}
              <div className="text-accent font-orbitron text-9xl opacity-10">ALI</div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-white">
              {t.about.title}
            </h2>
            <p className="text-slate-400 font-body text-lg mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-slate-400 font-body text-lg mb-8 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-orbitron font-bold text-accent">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-tighter text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;