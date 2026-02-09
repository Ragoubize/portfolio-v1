import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { content } from './data';

function App() {
  const [lang, setLang] = useState('fr');
  const t = content[lang];

  return (
    <div className="bg-[#020617] font-body text-slate-200">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills />
        <Projects t={t} />
        <Contact t={t} />
      </main>

      <footer className="py-8 text-center border-t border-white/5 text-slate-500 text-sm font-orbitron">
        © {new Date().getFullYear()} ALI RAGOUBI - ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;