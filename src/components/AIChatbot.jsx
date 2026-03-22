import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';

const predefinedQA = [
  {
    q: "What's your primary tech stack?",
    a: "My primary stack is React.js for the frontend, and Java with Spring Boot for the backend. I also have deep experience with Node.js, MongoDB, and AWS."
  },
  {
    q: "Are you open to new opportunities?",
    a: "Yes! I am currently open to full-time roles or freelance projects. Feel free to use the Contact form or connect with me on LinkedIn."
  },
  {
    q: "How can I download your resume?",
    a: "You can download my latest resume from the Hero section at the top of the page, or by using the Command Palette (Cmd/Ctrl + K) and searching for 'Resume'."
  }
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! I am Krithish\'s AI Assistant. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = (qa) => {
    setMessages(prev => [...prev, { type: 'user', text: qa.q }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: qa.a }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] ${isOpen ? 'hidden' : 'block'} hover-target`}
      >
        <FaRobot size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 glass-dark border border-white/10 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
                  <FaRobot className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Portfolio Assistant</h4>
                  <span className="text-emerald-400 text-xs flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-md transition-colors hover-target">
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 p-4 h-80 overflow-y-auto flex flex-col gap-4 bg-slate-900/95 hide-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-md ${msg.type === 'user' ? 'bg-indigo-600 text-white rounded-br-sm' : 'glass border border-white/5 text-slate-200 rounded-bl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass text-slate-300 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center h-10 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-slate-900 block">
              <h5 className="text-[10px] text-slate-400 font-mono mb-3 uppercase tracking-widest font-bold">Suggested Questions</h5>
              <div className="flex flex-col gap-2.5">
                {predefinedQA.map((qa, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAsk(qa)}
                    disabled={isTyping}
                    className="text-left text-xs bg-white/5 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 border border-white/5 hover:border-indigo-500/40 px-3 py-2.5 rounded-lg transition-all truncate disabled:opacity-50 disabled:cursor-not-allowed hover-target"
                  >
                    {qa.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
