import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';

export default function GithubStats() {
  const [stats, setStats] = useState({ stars: 0, forks: 0, repos: 0 });
  const username = 'krithish-001';

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) return;
        const userData = await userRes.json();
        
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposRes.ok) return;
        const reposData = await reposRes.json();

        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

        setStats({
          repos: userData.public_repos,
          stars: totalStars,
          forks: totalForks,
        });
      } catch (err) {
        console.error("Failed to fetch GitHub stats", err);
      }
    };
    fetchStats();
  }, [username]);

  return (
    <section id="github-stats" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-[300px] bg-indigo-500/5 rounded-full blur-[120px] -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl glass-dark border-indigo-500/30 flex items-center justify-center text-white mb-2 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <FaGithub size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Open Source Impact</h2>
          <p className="text-slate-400 max-w-2xl mt-2">
            A real-time overview of my contributions, repositories, and impact across the developer community.
          </p>
        </motion.div>

        {/* Top Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} className="glass-dark p-6 rounded-2xl text-center border-t border-indigo-500/30">
             <div className="text-indigo-400 mb-3 flex justify-center"><FaBook size={24}/></div>
             <div className="text-4xl font-bold text-white mb-1">{stats.repos}</div>
             <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">Repositories</div>
           </motion.div>
           
           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{delay: 0.1}} className="glass-dark p-6 rounded-2xl text-center border-t border-yellow-500/30">
             <div className="text-yellow-400 mb-3 flex justify-center"><FaStar size={24}/></div>
             <div className="text-4xl font-bold text-white mb-1">{stats.stars}</div>
             <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">Total Stars</div>
           </motion.div>
           
           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{delay: 0.2}} className="glass-dark p-6 rounded-2xl text-center border-t border-blue-500/30">
             <div className="text-blue-400 mb-3 flex justify-center"><FaCodeBranch size={24}/></div>
             <div className="text-4xl font-bold text-white mb-1">{stats.forks}</div>
             <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">Total Forks</div>
           </motion.div>

           <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{delay: 0.3}} className="glass-dark p-6 rounded-2xl text-center border-t border-pink-500/30">
             <div className="text-pink-400 mb-3 flex justify-center"><FaGithub size={24}/></div>
             <div className="text-4xl font-bold text-white mb-1">A+</div>
             <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">Grade</div>
           </motion.div>
        </div>

        {/* GitHub Contribution Graphs via API */}
        <div className="flex flex-col lg:flex-row gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -30 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once:true }} 
             className="w-full lg:w-5/12 glass-dark p-4 md:p-8 rounded-3xl overflow-hidden hover-target flex flex-col justify-center items-center relative"
           >
              <h3 className="text-xl font-bold text-white mb-6 w-full text-center border-b border-white/10 pb-4">Most Used Languages</h3>
              <div className="w-full h-auto rounded-xl overflow-hidden drop-shadow-2xl flex justify-center items-center min-h-[180px]">
                 <img 
                   src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=a855f7&text_color=94a3b8`} 
                   alt="Top Languages" 
                   className="w-full max-w-[400px] h-auto object-contain"
                   loading="lazy"
                 />
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once:true }} 
             className="w-full lg:w-7/12 glass-dark p-4 md:p-8 rounded-3xl overflow-hidden hover-target flex flex-col items-center"
           >
              <h3 className="text-xl font-bold text-white mb-6 w-full text-center border-b border-white/10 pb-4">Contribution Streak & Stats</h3>
              <div className="w-full h-auto rounded-xl overflow-hidden drop-shadow-2xl flex flex-col items-center gap-6">
                 <img 
                   src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=a855f7&text_color=94a3b8`} 
                   alt="GitHub Stats" 
                   className="w-full max-w-[500px] h-auto object-contain"
                   loading="lazy"
                 />
                 <img 
                   src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&ring=a855f7&fire=f472b6&currStreakLabel=a855f7`} 
                   alt="GitHub Streak" 
                   className="w-full max-w-[500px] h-auto object-contain"
                   loading="lazy"
                 />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
