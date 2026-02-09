import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = ({ t }) => { 
  return (
    <section id="skills" className="py-24 w-full bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
             {t.skills ? t.skills.title : "My Skills"} 
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full shadow-lg shadow-accent/50"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: skill.color }}
              className="bg-primary border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group hover:shadow-xl hover:shadow-cyan-900/20 hover:border-accent/30"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:rotate-12" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <span className="font-orbitron text-sm text-slate-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;