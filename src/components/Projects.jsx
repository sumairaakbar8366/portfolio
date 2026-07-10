import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiCpu, FiTerminal, FiDatabase, FiCheckCircle, FiCode, FiLayers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Image Imports
import imgMain from '../assets/mainpage.jpeg';
import imgSecond from '../assets/secondpage.jpeg';
import imgRegister from '../assets/registration.jpeg';
import imgFeedback from '../assets/feedback.jpeg';
import imgFeedbackDone from '../assets/feedbackdone.jpeg';
import imgRating from '../assets/rating.jpeg';
import imgRegComp from '../assets/regcomp.jpeg';
import imgThemes from '../assets/systemthemes.jpeg';

function Projects() {
  // Mobile UI Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const reactNativeScreens = [
    { img: imgMain, label: "Main Application Hub" },
    { img: imgSecond, label: "Feed & Interaction Screen" },
    { img: imgRegister, label: "Event Registration Portal" },
    { img: imgRegComp, label: "Registration Confirmation" },
    { img: imgFeedback, label: "QR Code Feedback Terminal" },
    { img: imgFeedbackDone, label: "Submission Acknowledgment" },
    { img: imgRating, label: "Performance Rating Matrix" },
    { img: imgThemes, label: "Dynamic Light/Dark Themes" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reactNativeScreens.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reactNativeScreens.length - 1 : prev - 1));
  };

  const deskbotFeatures = [
    "Autonomous Voice-Controlled Operations via NLP Integration",
    "Multi-Threaded Background Execution Engine for Uninterrupted Workflows",
    "System-Level Automation Using PyAutoGUI & Custom OS Script Hooks",
    "Local AI Intelligence Driven by Lightweight Large Language Models (Ollama)",
    "Smart Process Mapping, Real-Time Memory Logging & Context Retention"
  ];

  const appFeatures = [
    "Cross-Platform Architecture deployment ready for modern ecosystem distribution.",
    "Automated QR Code Matrix generation for instant peer-to-peer feedback loop processing.",
    "Interactive Rating Evaluator utilizing stateful hooks for sub-millisecond updates.",
    "Localized System Theme Engine bridging device native hooks with Tailwind styles."
  ];

  const secondaryProjects = [
    {
      title: "Ethics & Social Responsibility Framework",
      role: "Project Lead (9-Member Team)",
      desc: "Directed a nine-member team executing community outreach and corporate social responsibility frameworks. Strategized and managed operational visits to orphanages and old-age centers, deploying localized engagement activities and impactful social work structures.",
      tech: ["Project Management", "Team Leadership", "CSR Operations", "Ethics Execution"],
      customIcon: <FiLayers className="text-rose-400" />
    },
    {
      title: "Google Sheets & MySQL Synchronization Bridge",
      role: "Developer",
      desc: "Engineered an explicit automation script environment integrating Google Apps Script web forms with standard relational MySQL databases to securely handle remote CRUD data transactions.",
      tech: ["Google Apps Script", "MySQL DB", "JavaScript", "Data Automation"],
      customIcon: <FiDatabase className="text-[#00c6fb]" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3 bg-gradient-to-r from-white via-slate-200 to-[#64ffda] bg-clip-text text-transparent">
            Featured Masterpieces
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PROJECT 1: DESKBOT SKY */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-12 items-center mb-36"
        >
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(100,255,218,0.1)]">
                <FiCpu className="text-[#64ffda]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#64ffda] tracking-wider block uppercase">Featured AI Desktop Framework</span>
                <h3 className="text-3xl font-black text-white tracking-tight">DESKBOT SKY</h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed bg-slate-900/40 border border-white/5 p-5 rounded-2xl backdrop-blur-sm">
              DESKBOT SKY is an advanced, fully autonomous desktop operations assistant engineered to bridge the gap between human intent and system-level execution. Powered by Python and Natural Language Processing.
            </p>
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                <FiTerminal className="text-[#00c6fb]" /> Technical Capabilities
              </h4>
              <ul className="space-y-2.5">
                {deskbotFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-normal">
                    <FiCheckCircle className="text-[#64ffda] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["Python", "NLP Systems", "PyAutoGUI", "Ollama LLM"].map((t, i) => (
                <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-white/5">{t}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,198,251,0.15)] bg-slate-950 aspect-video">
              <video src="/deskbotteaser.mp4" controls autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>


        {/* ========================================================================= */}
        {/* FEATURED PROJECT 2: REACT NATIVE MOBILE PORTAL UI (SWIPE & BIGGER SHOWCASE) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-12 items-center mb-36"
        >
          {/* Swiper Visual Showcase on Large Grid Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
            <div className="relative w-full max-w-[290px] aspect-[9/16] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-800 shadow-[0_25px_60px_-15px_rgba(100,255,218,0.2)] overflow-hidden group">
              
              {/* Image Presenter with AnimatePresence */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-slate-900 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={reactNativeScreens[currentSlide].img}
                    alt={reactNativeScreens[currentSlide].label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover select-none"
                  />
                </AnimatePresence>

                {/* Left/Right Absolute Trigger Arrow Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 backdrop-blur-sm"
                >
                  <FiChevronLeft size={16} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/80 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 backdrop-blur-sm"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Pagination Caption Bar */}
            <div className="mt-4 text-center space-y-1.5">
              <p className="text-xs font-mono text-[#64ffda] tracking-wide">
                {reactNativeScreens[currentSlide].label}
              </p>
              <div className="flex gap-1 justify-center items-center">
                {reactNativeScreens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-5 bg-[#64ffda]' : 'w-1.5 bg-slate-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Core Technical Blueprint Description right */}
          <div className="space-y-6 lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(0,198,251,0.1)]">
                <FiCode className="text-[#00c6fb]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00c6fb] tracking-wider block uppercase">Interactive Mobile Portal Environment</span>
                <h3 className="text-3xl font-black text-white tracking-tight">React Native Enterprise UI Portal</h3>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed bg-slate-900/40 border border-white/5 p-5 rounded-2xl backdrop-blur-sm">
              An enterprise-grade cross-platform application UI designed with focus on micro-interactions, layout hierarchy, and extreme responsiveness. Built around automated user flows including instant feedback processing, data forms validation, and synchronized state management.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-300 tracking-wider uppercase flex items-center gap-2">
                <FiTerminal className="text-[#64ffda]" /> Structural Specifications
              </h4>
              <ul className="space-y-2.5">
                {appFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-normal">
                    <FiCheckCircle className="text-[#00c6fb] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {["React Native", "UI/UX Architecture", "Tailwind CSS", "State Hooks", "Vector Graphics", "Theme Middleware"].map((t, i) => (
                <span key={i} className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-white/10">{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all duration-200 flex items-center gap-2 text-xs font-mono border border-white/10"
              >
                <FiGithub /> Source_Code
              </a>
            </div>
          </div>
        </motion.div>


        {/* ========================================================================= */}
        {/* OTHER PROJECTS MINIMAL GRID SECTION */}
        {/* ========================================================================= */}
        <div className="pt-16 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">Other Engineering Systems</h3>
            <p className="text-xs font-mono text-slate-500">Secondary architectural modules and backend hooks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {secondaryProjects.map((proj, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 bg-[#070d19]/20 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-slate-400">
                    <div className="w-9 h-9 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-center text-lg">{proj.customIcon}</div>
                    <span className="text-[10px] font-mono text-[#64ffda] bg-[#64ffda]/5 px-2 py-0.5 rounded-full border border-[#64ffda]/10">{proj.role}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{proj.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1 pt-4 mt-4 border-t border-white/5">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;