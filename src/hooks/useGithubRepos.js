import { useState, useEffect } from 'react';

export function useGithubRepos(username = 'krithish-001') {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const headers = {};
        
        // Optional: Support GitHub token to avoid rate limits
        if (import.meta.env.VITE_GITHUB_TOKEN) {
          headers['Authorization'] = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
        }
        
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter out forks or profile repos
        const validRepos = data.filter(repo => !repo.fork && repo.name !== username);
        
        const formattedRepos = validRepos.map(repo => {
          let category = 'Others';
          const langs = [repo.language, ...(repo.topics || [])].map(l => l?.toLowerCase());
          
          if (langs.includes('react') || langs.includes('html') || langs.includes('vue') || langs.includes('next') || langs.includes('css')) {
            category = 'Frontend';
          } 
          if (langs.includes('java') || langs.includes('spring') || langs.includes('node') || langs.includes('express')) {
            category = (category === 'Frontend') ? 'Full Stack' : 'Backend';
          }
          if (langs.includes('docker') || langs.includes('aws') || langs.includes('kubernetes') || langs.includes('cicd')) {
            category = 'DevOps';
          }
          if (langs.includes('full-stack') || langs.includes('fullstack')) {
            category = 'Full Stack';
          }
          
          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
            rawName: repo.name,
            category,
            description: repo.description || 'A highly crafted piece of software.',
            tech: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 4), // Top 4 tags
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updatedAt: repo.updated_at,
            github: repo.html_url,
            live: repo.homepage || null
          };
        });

        setRepos(formattedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
