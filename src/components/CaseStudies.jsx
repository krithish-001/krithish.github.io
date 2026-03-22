import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCheckCircle, FaLightbulb, FaRocket } from 'react-icons/fa';

const caseStudies = [
  {
    id: 'cs-1',
    title: 'Enterprise E-Commerce Scalability',
    role: 'Lead Full Stack Developer',
    timeline: '3 Months',
    image: 'legacy/imdb-project.png',
    sections: {
      problem: 'The existing monolithic architecture was struggling to handle concurrent user load during flash sales, resulting in 500ms+ database query times and frequent timeout errors.',
      solution: 'Architected a microservices approach extracting the payment and inventory modules. Migrated from a single relational DB to a hybrid PostgreSQL / MongoDB setup with a Redis caching layer.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
      result: 'Reduced average API response time by 60%, successfully processed 10k+ concurrent checkout sessions without downtime, and achieved a 99.9% uptime over the holiday season.'
    }
  },
  {
    id: 'cs-2',
    title: 'Secure FinTech Authentication System',
    role: 'Backend Engineer',
    timeline: '2 Months',
    image: 'legacy/auth-system.png',
    sections: {
      problem: 'Handling sensitive user financial data required a highly resilient, modern authentication system to replace the legacy session-based model vulnerable to spoofing.',
      solution: 'Developed a robust JWT-based stateless authentication pipeline in Spring Boot. Integrated OAuth2, Role-Based Access Control (RBAC), and rigorous rate-limiting middlewares to prevent brute-force attacks.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
      result: 'Thwarted 100% of malicious script attempts in penetration testing. Decreased authentication-related latency by 35% across all mobile clients.'
    }
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center gap-4"
        >
          <span className="text-3xl md:text-4xl font-mono text-emerald-500">04.</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Case Studies</h2>
          <div className="h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent flex-grow ml-4 md:ml-8"></div>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start hover-target"
            >
              {/* Sticky Image Column */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32 hidden sm:block">
                <div className="relative rounded-3xl overflow-hidden glass-dark border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-7/12">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">{study.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm font-mono text-slate-400">
                    <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-md border border-emerald-500/20 font-medium tracking-wide">{study.role}</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded-md border border-white/10 tracking-wide text-slate-300">{study.timeline}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-rose-500/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]">
                    <div className="text-rose-400 mb-5 bg-rose-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-rose-500/20 drop-shadow-md">
                      <FaLightbulb size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-rose-200 transition-colors">The Problem</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{study.sections.problem}</p>
                  </div>

                  <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-indigo-500/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                    <div className="text-indigo-400 mb-5 bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-500/20 drop-shadow-md">
                      <FaLaptopCode size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-indigo-200 transition-colors">The Solution</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{study.sections.solution}</p>
                  </div>

                  <div className="glass p-6 md:p-8 rounded-2xl relative">
                    <div className="text-purple-400 mb-5 bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-purple-500/20 drop-shadow-md">
                      <FaRocket size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide">Core Tech</h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                       {study.sections.tech.map((t, i) => (
                         <span key={i} className="text-xs bg-slate-800/80 text-slate-300 font-mono px-2.5 py-1.5 rounded border border-white/5">{t}</span>
                       ))}
                    </div>
                  </div>

                  <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-emerald-500/70 transition-colors sm:col-span-1 shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-gradient-to-br from-emerald-500/5 to-transparent">
                    <div className="text-emerald-400 mb-5 bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center border border-emerald-500/20 drop-shadow-md group-hover:scale-110 transition-transform">
                      <FaCheckCircle size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 tracking-wide">The Result</h4>
                    <p className="text-emerald-100/80 text-sm leading-relaxed font-medium">{study.sections.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
