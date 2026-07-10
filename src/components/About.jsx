import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiActivity, FiCpu } from 'react-icons/fi';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            About My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Card 1: Core Objective */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c6fb] to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-[#00c6fb]/10 border border-[#00c6fb]/20 flex items-center justify-center text-[#00c6fb] text-2xl mb-6">
              <FiCpu />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Career Objective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate AI Engineer highly focused on developing innovative framework architectures across Artificial Intelligence, Natural Language Processing (NLP), Desktop Automation, and highly specialized Python Development environments.
            </p>
          </motion.div>

          {/* Card 2: Academic Profile */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64ffda] to-transparent" />
            <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center text-[#64ffda] text-2xl mb-6">
              <FiBookOpen />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
            <p className="text-[#64ffda] text-sm font-semibold mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-slate-300 text-xs mb-3">Iqra University, Karachi (Graduated)</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gained a concrete foundation across object-oriented logic algorithms, advanced database paradigms, and agile project methodologies.
            </p>
          </motion.div>

          {/* Card 3: Dynamic Growth */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda]" />
            <div className="w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#00c6fb]/20 flex items-center justify-center text-[#00c6fb] text-2xl mb-6">
              <FiActivity />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Certifications & Specs</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                NAVTTC Certified (System Admin)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                National HEC Skills Qualified
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                API Testing Certified (Postman)
              </li>
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;