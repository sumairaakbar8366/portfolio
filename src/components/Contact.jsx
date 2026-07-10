import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden perspective-2000">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Metadata Info Cards (3D Tilt Look) */}
          <div className="md:col-span-5 space-y-4">
            <motion.div 
              whileHover={{ translateZ: 15, rotateX: 2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00c6fb]/10 flex items-center justify-center text-[#00c6fb] text-xl shrink-0">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">Email Address</p>
                <a href="mailto:sumaira8366@gmail.com" className="text-sm font-semibold text-white hover:text-[#64ffda] transition-colors">
                  sumaira8366@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ translateZ: 15, rotateX: 2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda] text-xl shrink-0">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">Location Base</p>
                <p className="text-sm font-semibold text-white">Wah Cantt, Pakistan</p>
              </div>
            </motion.div>

            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/sumairaakbar8366" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 glass-card p-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-[#64ffda]"
              >
                <FiGithub /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sumaira-akbar-795110253/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 glass-card p-4 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-[#00c6fb]"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Action Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card p-8 rounded-3xl border border-white/10 relative"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Email Portal</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#64ffda] transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Transmission Encryption / Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Type your message here..." 
                  className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#64ffda] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00c6fb] to-[#64ffda] text-[#070d19] font-bold text-sm shadow-[0_4px_20px_rgba(100,255,218,0.2)] hover:shadow-[0_6px_25px_rgba(100,255,218,0.4)] transition-all duration-300"
              >
                Send Secure Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;