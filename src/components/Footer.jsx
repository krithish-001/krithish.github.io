import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Krithish<span className="text-white">.</span>
            </a>
            <p className="text-slate-400 mt-2 text-sm max-w-sm">
              Full Stack Developer specializing in React, Java, Spring Boot, and modern web experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/krithish-001" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass hover-target flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:-translate-y-1 transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/krithish-r-ab72b0241" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass hover-target flex items-center justify-center text-slate-300 hover:text-blue-400 hover:-translate-y-1 transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:krithikvasan145@gmail.com" className="w-10 h-10 rounded-full glass hover-target flex items-center justify-center text-slate-300 hover:text-pink-400 hover:-translate-y-1 transition-all">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Krithish R. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors hover-target">About</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors hover-target">Projects</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors hover-target">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
