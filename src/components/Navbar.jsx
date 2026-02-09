import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-orbitron font-bold tracking-wider text-white">
          ALI <span className="text-accent">RAGOUBI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
            <Link key={item} to={item} smooth={true} duration={500} className="font-body text-sm uppercase tracking-widest hover:text-accent cursor-pointer transition-colors">
              {t.nav[index]}
            </Link>
          ))}
          
          {/* Language Switcher with Flags */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 hover:border-accent transition-all"
          >
            <span className="text-lg">{lang === 'en' ? '🇬🇧' : '🇲🇦'}</span>
            <span className="font-orbitron text-xs font-bold">{lang.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="text-xl">
                {lang === 'en' ? '🇬🇧' : '🇲🇦'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-white/10">
          <div className="flex flex-col items-center py-4 space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <Link key={item} to={item} smooth={true} onClick={() => setIsOpen(false)} className="font-orbitron hover:text-accent cursor-pointer">
                {t.nav[index]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;