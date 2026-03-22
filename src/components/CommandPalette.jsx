import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const searchLinks = [
  { id: 'home', name: 'Home', action: () => window.location.hash = '#hero', shortcut: 'H' },
  { id: 'about', name: 'About', action: () => window.location.hash = '#about', shortcut: 'A' },
  { id: 'skills', name: 'Skills', action: () => window.location.hash = '#skills', shortcut: 'S' },
  { id: 'projects', name: 'Projects', action: () => window.location.hash = '#projects', shortcut: 'P' },
  { id: 'experience', name: 'Experience', action: () => window.location.hash = '#experience', shortcut: 'E' },
  { id: 'contact', name: 'Contact', action: () => window.location.hash = '#contact', shortcut: 'C' },
  { id: 'resume', name: 'Download Resume', action: () => window.open('legacy/R krithish.pdf', '_blank'), shortcut: 'R' },
  { id: 'github', name: 'GitHub Profile', action: () => window.open('https://github.com/krithish-001', '_blank'), shortcut: 'G' }
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((on) => !on);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredLinks = searchLinks.filter(link => 
    link.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm shadow-2xl"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative bg-slate-900 border border-white/10 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden glass-dark z-10"
          >
            <div className="flex items-center px-4 border-b border-white/10">
              <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                autoFocus
                type="text"
                className="w-full bg-transparent border-0 focus:ring-0 text-white placeholder-slate-400 h-16 px-4 text-lg outline-none"
                placeholder="Search command... (e.g. Projects)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded border border-white/10">ESC</span>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {filteredLinks.length === 0 ? (
                <div className="text-center py-10 text-slate-400">No results found for &quot;{query}&quot;.</div>
              ) : (
                <ul className="space-y-1">
                  {filteredLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        className="w-full text-left flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group hover-target"
                        onClick={() => {
                          link.action();
                          setOpen(false);
                          setQuery('');
                        }}
                      >
                        <span className="text-slate-200 group-hover:text-white group-hover:pl-2 transition-all">{link.name}</span>
                        <span className="text-xs text-slate-500 font-mono bg-slate-800/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.shortcut}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
