import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { SiCentos } from 'react-icons/si';
import { FiSun, FiMoon } from 'react-icons/fi';

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable (private mode); theme still applies for this visit
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-accent text-lg hover:scale-105 cursor-pointer"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-page/70 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Futuristic 3D Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer group flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent2 to-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)] transform group-hover:rotate-12 transition-transform duration-300">
            <SiCentos className="text-on-accent text-2xl animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent">
            SA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              activeClass="text-accent bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call to Action Layer */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Link to="contact" smooth={true} duration={600} offset={-70}>
            <button className="relative px-5 py-2 overflow-hidden rounded-full group bg-transparent border border-accent/30 text-sm font-semibold text-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)] transition-all hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.3)]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent2 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="group-hover:text-on-accent transition-colors duration-300">Let's Connect</span>
            </button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-accent focus:outline-none p-1"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-page/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  activeClass="text-accent pl-4 border-l-2 border-accent"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white py-1 transition-all cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;