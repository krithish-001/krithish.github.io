import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90, prof: 'Expert' },
      { name: 'HTML5/CSS3', level: 85, prof: 'Advanced' },
      { name: 'Tailwind CSS', level: 90, prof: 'Expert' },
      { name: 'JavaScript', level: 85, prof: 'Advanced' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 80, prof: 'Advanced' },
      { name: 'Spring Boot', level: 75, prof: 'Intermediate' },
      { name: 'Node.js/Express', level: 80, prof: 'Advanced' },
      { name: 'REST APIs', level: 85, prof: 'Advanced' }
    ]
  },
  {
    title: 'Databases & DevOps',
    skills: [
      { name: 'MongoDB', level: 80, prof: 'Advanced' },
      { name: 'MySQL', level: 75, prof: 'Intermediate' },
      { name: 'Docker/K8s', level: 70, prof: 'Intermediate' },
      { name: 'AWS/CI-CD', level: 65, prof: 'Competent' }
    ]
  }
];

const technologies = [
  'React', 'Java', 'Spring Boot', 'Node.js', 'Express.js', 
  'MongoDB', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 
  'Git', 'GitHub', 'Tailwind', 'REST', 'Linux'
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = { fontSize: 2.5, font: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff' };
  const ref = useRef();
  
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Smoothly interpolate color
    ref.current.material.color.lerp(color.set('#a5b4fc'), 0.1);
  });

  return (
    <Text ref={ref} onPointerOver={() => color.set('#f472b6')} onPointerOut={() => color.set('#a5b4fc')} {...props} {...fontProps}>
      {children}
    </Text>
  );
}

function Cloud({ count = 8, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    let counter = 0;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          technologies[counter % technologies.length]
        ]);
        counter++;
      }
    }
    return temp;
  }, [count, radius]);

  const groupRef = useRef();
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x += delta * 0.1;
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </group>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center gap-4"
        >
          <span className="text-3xl md:text-4xl font-mono text-pink-500">02.</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
          <div className="h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent flex-grow ml-4 md:ml-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 min-h-[500px]">
          {/* Skill Bars */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-12">
            {skillCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-slate-200 border-b border-white/10 pb-2 inline-block">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium text-slate-400">
                        <div className="flex items-center gap-3">
                           <span className="text-white font-semibold">{skill.name}</span>
                           <span className="text-[10px] uppercase tracking-widest font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">{skill.prof}</span>
                        </div>
                        <span className="text-indigo-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm mix-blend-overlay"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 h-[450px] lg:h-auto bg-slate-900/50 rounded-3xl border border-white/5 relative glass-dark cursor-grab active:cursor-grabbing overflow-hidden hover-target shadow-2xl"
          >
             <div className="absolute inset-0 z-0">
               <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
                 <fog attach="fog" args={['#020617', 0, 60]} />
                 <ambientLight intensity={1} />
                 <Cloud count={8} radius={22} />
                 <TrackballControls noPan noZoom rotateSpeed={2} />
               </Canvas>
             </div>
             
             <div className="absolute top-6 left-6 pointer-events-none glass px-3 py-1.5 rounded-full flex items-center gap-2 border-indigo-500/30">
               <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
               <span className="text-xs text-slate-300 font-medium">Interactive Sphere - Drag to rotate</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
