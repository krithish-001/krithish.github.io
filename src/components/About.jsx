import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies Mastered' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden z-10">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center gap-4"
        >
          <span className="text-3xl md:text-4xl font-mono text-indigo-500">01.</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent flex-grow ml-4 md:ml-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-400"
          >
            <p>
              I am a <span className="text-indigo-400 font-medium">Full Stack Developer</span> with hands-on experience building scalable web applications. My expertise revolves around modern frameworks like React, paired with rock-solid backends built in Java and Spring Boot.
            </p>
            <p>
              I specialize in creating end-to-end solutions, focusing heavily on <span className="text-white relative inline-block group cursor-default">
                clean architecture
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </span>, secure authentication strategies, and efficient database design. I take pride in streamlining the integration between the frontend interface and complex backend logic.
            </p>
            <p>
              Beyond writing code, I actively engage with containerization (Docker, Kubernetes) and CI/CD pipelines to ensure applications are not only built beautifully but deployed reliably to the cloud.
            </p>
            
            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 text-indigo-400 hover:text-pink-400 transition-colors font-medium group hover-target">
                Let's connect
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-dark p-6 rounded-2xl border-t border-indigo-500/30 shadow-xl ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="col-span-2 md:col-span-1 glass-dark p-6 rounded-2xl relative overflow-hidden group border-t border-pink-500/30 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-xl font-medium text-white mb-2 relative z-10">My Philosophy</div>
              <p className="text-slate-400 text-sm relative z-10">
                "Writing code that a machine can understand is easy; writing code that humans can understand is an art."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
