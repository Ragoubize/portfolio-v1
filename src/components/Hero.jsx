import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = ({ t }) => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-slate-800/50 text-accent border border-accent/30 font-orbitron text-sm tracking-widest uppercase mb-6 inline-block">
            {t.hero.role}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-6 mt-4">
            {t.hero.h1} <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.hero.h2}
            </span>
          </h1>
          
          <p className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {t.hero.desc}
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <button className="px-8 py-4 bg-accent hover:bg-cyan-400 text-primary font-orbitron font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              {t.hero.btn1} <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-white hover:bg-white/5 rounded-lg transition-all font-orbitron flex items-center gap-2">
              <Download size={20} /> {t.hero.btn2}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;