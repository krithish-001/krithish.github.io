import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChevronDown, FaChevronUp, FaTrophy, FaBuilding } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: 'Data Operations Assistant',
    company: 'HDFC Bank',
    logo: <FaBuilding size={20} className="text-white" />,
    date: 'Jan 2025 – Jun 2025',
    description: [
      'Assisted recurring business reports using Excel VBA, reducing manual processing effort by ~50%.',
      'Performed data validation and ETL checks on datasets exceeding 10,000+ records per cycle.',
      'Collaborated with cross-functional teams to support accurate monthly compliance reporting.'
    ],
    achievements: [
      'Streamlined end-of-month reporting workflows, saving the department 15 hours weekly.',
      'Maintained 100% accuracy across evaluated compliance datasets.'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 2,
    role: 'Software Intern',
    company: 'Zeta Coding Innovative Solutions',
    logo: <FaBuilding size={20} className="text-white" />,
    date: 'Aug 2024 – Sep 2024',
    description: [
      'Optimized MySQL queries, improving backend response times by ~30%.',
      'Automated ETL workflows, reducing manual data handling by ~40%.',
      'Followed an Agile-style development workflow with iterative feature delivery and version control using Git and GitHub.'
    ],
    achievements: [
      'Refactored legacy endpoints lowering latency by a full 500ms.',
      'Created custom automation shell scripts that improved developer onboarding time.'
    ],
    color: 'from-pink-500 to-rose-600'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center justify-center gap-4 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-mono text-blue-400 mb-2">06.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white relative inline-block">
              Work Experience
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
          </div>
        </motion.div>

        <div className="relative pt-10 pb-10">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-pink-500 origin-top"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative flex items-start justify-between flex-col md:flex-row w-full group">
                  <div className={`absolute left-6 md:left-1/2 -ml-3.5 md:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300 mt-6 md:mt-0`}>
                    <FaBriefcase className="text-indigo-400 text-xs" />
                  </div>

                  <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}></div>

                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`w-full xl:w-[45%] md:w-[42%] pl-16 md:pl-0 ${isEven ? 'order-2 md:order-3' : 'order-2 md:order-1'}`}
                  >
                    <motion.div 
                      layout
                      className="glass-dark p-6 md:p-8 rounded-2xl border-t border-white/10 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group-hover:border-indigo-500/50 shadow-xl cursor-pointer hover-target"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                      
                      <motion.div layout className="flex flex-col xl:flex-row xl:items-start justify-between mb-4 gap-4">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-white/10 shadow-lg shrink-0">
                             {exp.logo}
                           </div>
                           <div>
                             <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">{exp.role}</h3>
                             <h4 className="text-base font-medium tracking-wide text-slate-400 mt-1">{exp.company}</h4>
                           </div>
                        </div>
                        <span className="text-xs md:text-sm font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 whitespace-nowrap self-start xl:self-auto">
                          {exp.date}
                        </span>
                      </motion.div>
                      
                      <motion.div layout className="border-t border-white/10 mt-6 pt-6">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium mb-4">
                           {exp.description[0]}
                        </p>
                        
                        <div className="flex items-center justify-center gap-2 text-indigo-400 text-xs uppercase tracking-widest font-bold">
                           {isExpanded ? <><FaChevronUp/> Show Less</> : <><FaChevronDown/> Show More</>}
                        </div>
                      </motion.div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 space-y-6 border-t border-white/10 pt-6"
                          >
                            <ul className="space-y-3">
                              {exp.description.slice(1).map((desc, i) => (
                                <li key={i} className="flex gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                                  <span className="text-indigo-500 mt-1.5 text-xs">▹</span>
                                  {desc}
                                </li>
                              ))}
                            </ul>
                            
                            <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-5 mt-6">
                               <h5 className="text-white font-bold flex items-center gap-2 mb-3">
                                 <FaTrophy className="text-yellow-500" /> Key Achievements
                               </h5>
                               <ul className="space-y-2">
                                 {exp.achievements.map((ach, i) => (
                                   <li key={i} className="text-sm text-indigo-200/80 flex gap-2 leading-relaxed">
                                     <span className="text-indigo-400">•</span> {ach}
                                   </li>
                                 ))}
                               </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
