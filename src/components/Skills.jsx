import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Programming",
    skills: [
      { 
        name: "Python", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ) 
      },
      { 
        name: "Java", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#007396" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V12M12 8V6M5 12h14" />
          </svg>
        ) 
      },
      { 
        name: "JavaScript", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3zM21 15h-4a2 2 0 0 0-2 2v4" />
          </svg>
        ) 
      },
      { 
        name: "C++", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00599C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22a10 10 0 1 0 0-20M12 6v12M6 12h12" />
          </svg>
        ) 
      }
    ]
  },
  {
    title: "AI, NLP & Automation",
    skills: [
      { 
        name: "Machine Learning", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
            <path d="M12 6v12M6 12h12" />
          </svg>
        ) 
      },
      { 
        name: "NLP", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00c6fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h12" />
          </svg>
        ) 
      },
      { 
        name: "Speech Recognition", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M4 22h16" />
          </svg>
        ) 
      },
      { 
        name: "Desktop Automation", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00c6fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ) 
      },
      { 
        name: "Ollama", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          </svg>
        ) 
      },
      { 
        name: "PyAutoGUI", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        ) 
      }
    ]
  },
  {
    title: "Frontend & Backend Systems",
    skills: [
      { 
        name: "React", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          </svg>
        ) 
      },
      { 
        name: "Tailwind CSS", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18M3 12h18" />
          </svg>
        ) 
      },
      { 
        name: "Node.js", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ) 
      },
      { 
        name: "Express.js", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
          </svg>
        ) 
      },
      { 
        name: "MySQL", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        ) 
      },
      { 
        name: "HTML5 & CSS3", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 3l1.5 14L12 21l5.5-4L19 3H5z" />
          </svg>
        ) 
      }
    ]
  },
  {
    title: "Development Suite",
    skills: [
      { 
        name: "Git & GitHub", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        ) 
      },
      { 
        name: "VS Code", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        ) 
      },
      { 
        name: "Postman", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        ) 
      }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-card p-6 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00c6fb]/30 to-transparent" />
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide border-b border-white/5 pb-2">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skIdx) => (
                  <motion.div
                    key={skIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-[#64ffda]/20 transition-all duration-200 group/item"
                  >
                    <div className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] group-hover/item:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-slate-300 font-medium tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;