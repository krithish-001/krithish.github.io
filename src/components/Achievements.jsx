import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy, FaCode, FaCoffee, FaBriefcase } from 'react-icons/fa';

const educationData = [
  {
    type: 'degree',
    title: 'Bachelor of Engineering',
    subtitle: 'Computer Science and Engineering',
    institution: 'East West College of Engineering, Bengaluru',
    date: 'Jun 2020 – May 2024',
    icon: <FaGraduationCap size={24} />
  },
  {
    type: 'cert',
    title: 'Full Stack Web Development',
    institution: 'TAP Academy',
    icon: <FaCertificate size={24} />
  },
  {
    type: 'cert',
    title: 'AWS Cloud Technical Essentials',
    institution: 'Amazon Web Services',
    icon: <FaCertificate size={24} />
  }
];

const statsData = [
  { value: 15, suffix: '+', label: 'Projects Completed', icon: <FaTrophy /> },
  { value: 10, suffix: '+', label: 'Tech Mastered', icon: <FaBriefcase /> },
  { value: 1500, suffix: '+', label: 'Hours Coding', icon: <FaCode /> },
  { value: 300, suffix: '+', label: 'Cups of Coffee', icon: <FaCoffee /> }
];

function Counter({ from, to, delay = 0, suffix = '' }) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      const duration = 2000; 

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        const Math_pow = Math.pow;
        const easeOutQuart = 1 - Math_pow(1 - Math.min(progress / duration, 1), 4);
        const currentCount = Math.floor(from + (to - from) * easeOutQuart);
        
        setCount(currentCount);

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      const timeout = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [from, to, delay, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-900 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex items-center justify-end gap-4"
        >
          <div className="flex items-center w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">Education & Awards</h2>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-pink-500 flex-grow mx-4 md:mx-8"></div>
            <span className="text-3xl md:text-4xl font-mono text-pink-500 hidden md:block">05.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative">
          <div className="absolute inset-0 bg-slate-800/50 rounded-3xl -mx-4 -my-4 sm:mx-0 sm:my-0 backdrop-blur-sm border border-white/5 shadow-2xl z-0"></div>
          
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-6 text-center z-10 relative group"
            >
              <div className="text-pink-400 text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:text-pink-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-pink-100 transition-colors">
                <Counter from={0} to={stat.value} delay={0.2 + idx * 0.1} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-medium text-slate-400 tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className={`glass-dark rounded-2xl p-8 relative overflow-hidden group hover-target hover:-translate-y-2 transition-all duration-300 border-t ${item.type === 'degree' ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.05)]'}`}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg ${item.type === 'degree' ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-pink-500 to-rose-600'}`}>
                <div className="text-white text-xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-colors">
                {item.title}
              </h3>
              
              {item.subtitle && (
                <div className="text-indigo-400 font-medium mb-3 tracking-wide">{item.subtitle}</div>
              )}
              
              <p className="text-slate-400 leading-relaxed mb-4">
                {item.institution}
              </p>
              
              {item.date && (
                <div className="inline-block mt-auto text-xs font-mono font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-md border border-white/5">
                  {item.date}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
