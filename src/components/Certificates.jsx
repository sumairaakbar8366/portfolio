import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiClock, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: "Programmer Intern Certificate",
    issuer: "SNJ Global Services",
    status: "Certified",
    fileLink: "/internship.pdf", 
    desc: "Official certification validating hands-on development, code debugging, and software systems lifecycle experience.",
    icon: <FiCheckCircle className="text-[#64ffda]" />
  },
  {
    title: "Introduction to API Testing with Postman",
    issuer: "10 Pearls University",
    status: "Certified",
    fileLink: "/apitesting.pdf", 
    desc: "Acquired structural testing knowledge targeting RESTful API requests, request optimization, and automation frameworks.",
    icon: <FiAward className="text-[#FF6C37]" />
  },
  {
    title: "API Testing & Basic Overview of JMeter",
    issuer: "10 Pearls University",
    status: "Certified",
    fileLink: "/apitestingjmeter.pdf",
    desc: "Studied performance evaluation matrices and asynchronous load-balancing script profiles via functional frameworks.",
    icon: <FiAward className="text-[#00c6fb]" />
  },
  {
    title: "System Administration and IT Infrastructure",
    issuer: "National Vocational & Technical Training Commission (NAVTTC)",
    status: "Certified",
    fileLink: "/navttccertificate.pdf",
    desc: "Completed comprehensive training covering network scaling, virtualization frameworks, and core server systems.",
    icon: <FiClock className="text-[#64ffda]" />
  }
];

function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden perspective-2000">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-[#64ffda] bg-clip-text text-transparent">
            Credentials & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00c6fb] to-[#64ffda] rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 25px 50px rgba(0, 198, 251, 0.15)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 rounded-2xl border border-white/5 relative flex flex-col justify-between group preserve-3d"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center shrink-0 text-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                  {cert.icon}
                </div>
                
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      cert.status === 'Coming Soon'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20'
                    }`}>
                      {cert.status}
                    </span>
                    {cert.fileLink && (
                      <a 
                        href={cert.fileLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-slate-400 hover:text-[#64ffda] text-sm flex items-center gap-1 font-mono text-[11px]"
                      >
                        View <FiExternalLink />
                      </a>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#64ffda] transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mt-4 pt-3 border-t border-white/5">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;