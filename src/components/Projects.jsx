import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaSearch, FaTimes } from 'react-icons/fa';
import { useGithubRepos } from '../hooks/useGithubRepos';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps', 'Others'];

export default function Projects() {
  const { repos, loading, error } = useGithubRepos('krithish-001');
  
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('stars'); // 'recent' or 'stars'
  
  // Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  const displayRepos = useMemo(() => {
    let result = [...repos];
    
    // Category Filtering
    if (filter !== 'All') {
      result = result.filter(r => r.category === filter);
    }
    
    // Search Filtering
    if (search.trim()) {
      const s = search.toLowerCase();
      result = result.filter(r => 
        r.title.toLowerCase().includes(s) ||
        r.description.toLowerCase().includes(s)
      );
    }
    
    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'stars') {
        if (b.stars === a.stars) return new Date(b.updatedAt) - new Date(a.updatedAt);
        return b.stars - a.stars;
      }
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
    
    return result;
  }, [repos, filter, search, sortBy]);

  // Handle modal escape
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-mono text-purple-500">03.</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Dynamic Projects</h2>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-800 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors hover-target"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 glass-dark rounded-2xl border-white/5">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all hover-target ${
                    filter === cat 
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Toggle */}
            <div className="flex items-center gap-3 bg-slate-950 p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setSortBy('stars')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors hover-target ${sortBy === 'stars' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Best Projects
              </button>
              <button
                onClick={() => setSortBy('recent')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors hover-target ${sortBy === 'recent' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Recent
              </button>
            </div>
          </div>
        </motion.div>

        {/* Loading / Error / Data States */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-rose-400 text-center py-20 bg-rose-500/10 rounded-2xl border border-rose-500/20">
            Failed to load GitHub projects: {error}
          </div>
        )}
        
        {!loading && !error && displayRepos.length === 0 && (
          <div className="text-slate-400 text-center py-20 glass-dark rounded-2xl">
            No projects found matching your criteria.
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {!loading && !error && displayRepos.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col justify-between rounded-2xl p-6 glass-dark border border-white/5 hover:border-purple-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-xl hover:-translate-y-1 hover:shadow-purple-500/10 hover-target"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400 text-xs font-mono tracking-wider bg-purple-500/10 px-2.5 py-1 rounded-md">
                      {project.category}
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 text-sm font-mono">
                      <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors"><FaStar /> {project.stars}</span>
                      <span className="flex items-center gap-1"><FaCodeBranch /> {project.forks}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors truncate">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded bg-white/5 text-slate-300 border border-white/10 whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-slate-900 border border-purple-500/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] z-10 p-6 sm:p-10 hide-scrollbar"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-rose-500/20 hover:text-rose-400 flex items-center justify-center text-slate-400 transition-colors hover-target"
                >
                  <FaTimes size={18} />
                </button>
                
                <div className="flex items-center gap-4 mb-6 pt-2">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                     {selectedProject.title.charAt(0)}
                   </div>
                   <div>
                     <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                     <div className="text-purple-400 text-sm font-mono mt-1 flex items-center gap-3">
                       <span>{selectedProject.category}</span>
                       <span className="text-slate-500">•</span>
                       <span className="text-slate-400">Updated: {new Date(selectedProject.updatedAt).toLocaleDateString()}</span>
                     </div>
                   </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-white/5">
                    <FaStar className="text-yellow-500" />
                    <span className="font-bold text-white text-lg">{selectedProject.stars}</span>
                    <span className="text-slate-400 text-sm">Stars</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-white/5">
                    <FaCodeBranch className="text-blue-400" />
                    <span className="font-bold text-white text-lg">{selectedProject.forks}</span>
                    <span className="text-slate-400 text-sm">Forks</span>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg font-bold text-white mb-3 border-b border-white/10 pb-2">About The Project</h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg font-bold text-white mb-3 border-b border-white/10 pb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.length > 0 ? selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {tech}
                      </span>
                    )) : <span className="text-slate-500 italic">No specific technologies tagged in repository.</span>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-white/10 hover-target"
                  >
                    <FaGithub size={20} />
                    View Source Code
                  </a>
                  
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold transition-colors hover-target shadow-lg shadow-purple-500/20"
                    >
                      <FaExternalLinkAlt size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
      </div>
      
      {/* Required for modal scroll hiding utility if needed inside index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
