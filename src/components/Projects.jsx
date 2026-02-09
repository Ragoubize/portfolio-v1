import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data';

const Projects = ({ t }) => {
  return (
    <section id="projects" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-orbitron font-bold text-white mb-4">{t.projects.title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button className="p-2 bg-accent rounded-full text-primary"><ExternalLink size={20}/></button>
                   <button className="p-2 bg-white rounded-full text-primary"><Github size={20}/></button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] font-orbitron px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;