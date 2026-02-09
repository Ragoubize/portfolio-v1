import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ t }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceID = "service_z3zhv86"; 
    const templateID = "template_1doo7ro";
    const publicKey = "74JoWsg6sVELX1SYr";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          setLoading(false);
          setStatus('success');
          form.current.reset(); 
          setTimeout(() => setStatus(null), 5000); 
      }, (error) => {
          setLoading(false);
          setStatus('error');
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <div>
            <h2 className="text-4xl font-orbitron font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-slate-400 mb-8">{t.contact.subtitle}</p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ragobiaze@gmail.com" },
                { icon: Phone, label: "Phone", value: "+212 704-707078" },
                { icon: MapPin, label: "Location", value: "Morocco - Mohammedia" }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
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

          {/* Form Section */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.name}</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.email}</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-orbitron text-slate-400 mb-2 uppercase">{t.contact.message}</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full bg-primary/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-accent hover:bg-cyan-400 text-primary font-orbitron font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>{t.contact.send} <Send size={18} /></>
                )}
              </button>
            </form>

            {/* Success/Error Messages */}
            {status === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 rounded-2xl backdrop-blur-sm animate-in fade-in zoom-in">
                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-orbitron text-white">Message Sent!</h3>
                <p className="text-slate-400 text-sm">I will get back to you soon.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-200 text-sm">
                <XCircle size={18} />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;