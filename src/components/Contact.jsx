import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-orbitron font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-slate-400 mb-8">{t.contact.subtitle}</p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ali.ragoubi@email.com" },
                { icon: Phone, label: "Phone", value: "+212 600 000 000" },
                { icon: MapPin, label: "Location", value: "Morocco" }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
            <div>
              <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.name}</label>
              <input type="text" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.email}</label>
              <input type="email" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.message}</label>
              <textarea rows="4" className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-accent hover:bg-cyan-400 text-primary font-orbitron font-bold rounded-lg transition-all flex items-center justify-center gap-2">
              {t.contact.send} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;