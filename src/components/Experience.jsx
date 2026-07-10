import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: "AI Intern",
    company: "Pakistan Ordnance Factories (POF)",
    location: "Wah Cantt, Pakistan",
    duration: "Present (2026)",
    description: [
      "Developing, executing, and training deep algorithmic systems focused on desktop workflows and automated pipelines.",
      "Working on Natural Language Processing (NLP) execution tasks, intent evaluation, and standalone automation frameworks."
    ],
    color: "from-[#64ffda] to-[#00c6fb]"
  },
  {
    role: "Full Stack Developer (Contract Based)",
    company: "Rech International",
    location: "Karachi, Pakistan",
    duration: "2024",
    description: [
      "Engineered and executed complete system migration from legacy distributed Google Sheets infrastructures over to high-volume MySQL databases.",
      "Maintained intact runtime frontend architecture dependencies while successfully rerouting underlying API networks to point to the newly implemented production SQL backend layer.",
      "Optimized query efficiency, normalized tables, and enhanced asynchronous communication lines across modules."
    ],
    color: "from-[#00c6fb] to-[#112240]"
  },
  {
    role: "Programmer Intern",
    company: "SNJ Global Services",
    location: "Karachi, Pakistan",
    duration: "March 2024 - Sep 2024",
    description: [
      "Developed and debugged complex software modules, collaborating with cross-functional development teams[cite: 1].",
      "Gained robust hands-on programming experience and deepened practical implementation skills across codebase architectures[cite: 1].",
      "Participated actively in testing and troubleshooting systems to identify layout bugs and data-flow constraints[cite: 1]."
    ],
    color: "from-[#112240] to-transparent"
  }
];

function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        {/* Timeline Dynamic Stack */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Glowing Interactive Timeline Node Connector */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#070d19] border-2 border-[#64ffda] shadow-[0_0_15px_rgba(100,255,218,0.8)] group-hover:scale-125 transition-transform duration-300 flex items-center justify-center" />

              {/* Float Card Structure */}
              <div className="glass-card p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${exp.color} rounded-l-2xl`} />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#64ffda] transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold mt-1">
                      <FiBriefcase className="text-[#00c6fb]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 text-slate-400 text-sm leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;