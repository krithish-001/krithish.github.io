import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function StarBackground(props) {
  const ref = useRef();
  const [sphere] = React.useState(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5;
      const sinPhi = Math.sin(phi);
      arr[i] = r * sinPhi * Math.cos(theta);
      arr[i + 1] = r * sinPhi * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15; 
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#a855f7" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Hero() {
  const text = "Full Stack Developer";
  
  return (
    <section id="hero" className="relative md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-24 md:py-0 border-b border-white/5">
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full glass border-emerald-500/30 text-emerald-300 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.15)] bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Currently Open to Work
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold mb-6 leading-[1.1] tracking-tight text-white">
            Hi, I'm <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Krithish R</span>
          </h1>
          
          <div className="h-8 md:h-10 mb-8 text-xl sm:text-2xl text-slate-300 font-medium flex items-center">
             <span className="mr-3 text-indigo-500 font-mono text-2xl">&gt;</span>
             {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.1 }}
                >
                  {char}
                </motion.span>
             ))}
             <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] bg-indigo-500 h-6 md:h-8 ml-1.5 translate-y-0.5"
             />
          </div>
          
          <p className="text-slate-400 mb-10 max-w-lg text-base sm:text-lg leading-relaxed font-light">
            Building scalable, modern, and high-performance applications. Bridging the gap between stunning UI/UX design and robust backend architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover-target text-center">
              View Featured Projects
            </a>
            <a href="legacy/R krithish.pdf" download className="px-8 py-3.5 rounded-xl glass text-slate-100 font-medium transition-all hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover-target flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Standard Resume
            </a>
          </div>

          <div className="flex gap-5 items-center">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mr-2">Connect:</span>
            <a href="https://github.com/krithish-001" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover-target hover:-translate-y-1 p-2 rounded-full glass">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/krithish-r-ab72b0241" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover-target hover:-translate-y-1 p-2 rounded-full glass">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:krithikvasan145@gmail.com" className="text-slate-400 hover:text-pink-400 transition-colors hover-target hover:-translate-y-1 p-2 rounded-full glass">
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] group flex items-center justify-center">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-[spin_8s_linear_infinite]"></div>
            
            <div className="absolute inset-3 sm:inset-4 lg:inset-6 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

            <div className="absolute inset-4 sm:inset-5 lg:inset-7 bg-slate-900 rounded-full overflow-hidden border-[4px] border-slate-900/50 z-10 shadow-2xl">
              <img src="legacy/projrct-photo.jpg" alt="Krithish R" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-4 right-0 lg:-right-4 glass px-5 py-3 rounded-2xl z-20 flex items-center gap-3 shadow-[0_0_30px_rgba(97,218,251,0.2)] border-indigo-500/20 backdrop-blur-xl"
            >
               <span className="text-3xl text-[#61dafb]">⚛️</span>
               <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Frontend</span>
                  <span className="text-sm font-bold text-white tracking-wide">React 18</span>
               </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-0 lg:-left-6 glass px-5 py-3 rounded-2xl z-20 flex items-center gap-3 shadow-[0_0_30px_rgba(104,160,99,0.2)] border-green-500/20 backdrop-blur-xl"
            >
               <span className="text-3xl text-[#68a063]">☕</span>
               <div className="flex flex-col">
                 <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Backend</span>
                 <span className="text-sm font-bold text-white tracking-wide">Spring Boot</span>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-400 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.2em] font-medium uppercase font-mono">Process</span>
        <div className="w-[2px] h-10 sm:h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
}
