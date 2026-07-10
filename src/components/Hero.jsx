import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 space-y-6">
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-[#64ffda] tracking-widest uppercase"
        >
           HELLOW WORLD, I AM
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-white"
        >
          SUMAIRA AKBAR
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-3xl font-bold text-slate-400 min-h-[40px]"
        >
          <ReactTyped
            strings={[
              "Python Developer Engine.",
              "AI & Automated Framework Designer.",
              "Full Stack Code Craftsman."
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-6"
        >
          <a 
            href="/resume.pdf" 
            download="Sumaira_Akbar_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00c6fb] to-[#64ffda] text-[#070d19] font-bold text-sm shadow-[0_4px_20px_rgba(100,255,218,0.3)] hover:shadow-[0_6px_25px_rgba(100,255,218,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <FiDownload /> Download Resume
          </a>
          
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            View Projects <FiArrowRight />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;