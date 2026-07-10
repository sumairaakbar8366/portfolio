import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#060b13] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-center sm:text-left">
        
        {/* Branding Layer */}
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-wide bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            Designed & Developed by Sumaira Akbar[cite: 1]
          </p>
          <p className="text-[11px] font-mono text-slate-500">
            &copy; {currentYear} // Quantum Ecosystem Core. All Rights Reserved.
          </p>
        </div>

        {/* Floating Back To Top Trigger Button */}
        <Link 
          to="home" 
          smooth={true} 
          duration={600} 
          className="w-10 h-10 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#64ffda] hover:border-[#64ffda]/30 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer hover:-translate-y-1 group"
        >
          <FiArrowUp className="text-lg group-hover:animate-bounce" />
        </Link>

      </div>
    </footer>
  );
}

export default Footer;