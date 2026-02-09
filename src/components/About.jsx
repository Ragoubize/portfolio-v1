import React from 'react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-primary">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent/5 blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* --- Image Section --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center md:justify-start"
          >
            
            <motion.div
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[480px] group"
            >
              
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl opacity-60 blur-lg group-hover:opacity-80 transition duration-500"></div>
              
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                
                <img 
                  src="/profile.jpg" 
                  alt="Ali Ragoubi" 
                  className="w-full h-auto object-contain" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-50"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Text Content --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title */}
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-5xl font-orbitron font-bold text-white relative">
                  {t.about.title}
                  <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-accent to-transparent"></span>
                </h2>
            </div>
            
            {/* Paragraphs */}
            <div className="space-y-6 text-slate-300 font-body text-lg leading-relaxed text-justify relative z-10">
                <p className="border-l-2 border-accent/50 pl-6">
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
            </div>

            {/* Signature Area */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex flex-col">
                   <span className="text-accent font-orbitron text-sm uppercase tracking-[0.2em] mb-1">Full Stack Dev</span>
                   <span className="text-slate-500 text-xs">Ready for new challenges</span>
                </div>
                {/* Artistic Signature */}
                <div className="font-handwriting text-4xl text-white/20 select-none rotate-[-5deg]">
                    Ali.R
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;