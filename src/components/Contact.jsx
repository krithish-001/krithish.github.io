import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ...status, error: 'Please fill all fields' });
      return;
    }
    
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     to_name: 'Krithish',
      //     from_email: formData.email,
      //     to_email: 'krithikvasan145@gmail.com',
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulate API call for now since keys aren't provided
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(s => ({ ...s, success: false }));
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center justify-center text-center gap-4"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-mono text-pink-500 mb-2">06.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white relative inline-block">
              Get In Touch
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Work Together</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or simply sharing ideas about technology. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors shadow-lg">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Email</div>
                  <a href="mailto:krithikvasan145@gmail.com" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">krithikvasan145@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-lg">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Phone</div>
                  <a href="tel:+919113039145" className="text-slate-300 hover:text-pink-400 transition-colors font-medium">+91 9113039145</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-lg">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Location</div>
                  <span className="text-slate-300 font-medium">Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/krithish-001" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover-target">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/krithish-r-ab72b0241" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400 hover:text-white hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover-target">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-dark p-8 md:p-10 rounded-3xl border-t border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover-target"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover-target"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none hover-target"
                  placeholder="Hello Krithish, I would like to talk about..."
                ></textarea>
              </div>

              {status.error && (
                <div className="text-rose-400 text-sm font-medium px-2">{status.error}</div>
              )}
              {status.success && (
                <div className="text-emerald-400 text-sm font-medium px-2">Message sent successfully! I'll get back to you soon.</div>
              )}

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed hover-target relative overflow-hidden group"
              >
                <span className={`relative z-10 flex items-center justify-center gap-2 ${status.loading ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                
                {status.loading && (
                  <span className="absolute inset-0 flex items-center justify-center z-20">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
