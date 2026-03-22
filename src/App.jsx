import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-500 theme-container">
      <CustomCursor />
      <CommandPalette />
      <Navbar />
      <AIChatbot />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudies />
        <GithubStats />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
