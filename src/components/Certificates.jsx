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
    icon: <FiCheckCircle className="text-accent" />
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
    icon: <FiAward className="text-accent2" />
  },
  {
    title: "System Administration and IT Infrastructure",
    issuer: "National Vocational & Technical Training Commission (NAVTTC)",
    status: "Certified",
    fileLink: "/navttccertificate.pdf",
    desc: "Completed comprehensive training covering network scaling, virtualization frameworks, and core server systems.",
    icon: <FiCheckCircle className="text-accent" />
  },

  {
  title: "AI & IT Intern",
  issuer: "Pakistan Ordnance Factories (POF)",
  status: "Certified",
  fileLink: "/pofcertificate.pdf", 
  desc: "Completed hands-on internship focusing on intent evaluation models, workflow execution frameworks, and automated process systems.",
  icon: <FiCheckCircle className="text-accent" />
}

];
function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden perspective-2000">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Credentials & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent2 to-accent rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 25px 50px rgba(114, 144, 179, 0.22)"
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
                        : 'bg-accent/10 text-accent border border-accent/20'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-accent transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mt-4 pt-3 border-t border-white/5">
                {cert.desc}
              </p>

              {cert.fileLink && (
                <a
                  href={cert.fileLink}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 mt-4 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent2 to-accent text-on-accent text-sm font-semibold shadow-[0_4px_16px_rgba(var(--accent-rgb),0.25)] hover:shadow-[0_6px_22px_rgba(var(--accent-rgb),0.4)] transition-shadow duration-200 cursor-pointer"
                >
                  View Certificate <FiExternalLink />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;