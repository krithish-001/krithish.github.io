// Typewriter Effect
class Typewriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="typewriter-text">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typewriter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter-container');
    if (typewriterElement) {
        const words = ['React • Java • Spring Boot • REST APIs • DevOps'];
        new Typewriter(typewriterElement, words, 2000);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ScrollReveal animations
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.hero-content', { origin: 'left' });
    sr.reveal('.hero-image', { origin: 'right' });
    sr.reveal('.section-title', { delay: 100 });
    sr.reveal('.about-text', { origin: 'left' });
    sr.reveal('.about-image', { origin: 'right' });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.education-card, .certification-card', { interval: 200 });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });
}

// GitHub API integration for projects
class GitHubProjects {
    constructor() {
        this.username = 'krithish-001';
        this.apiUrl = `https://api.github.com/users/${this.username}/repos`;
        this.resumeProjects = [
            {
                name: 'Full Stack E-Commerce Web Application',
                description: 'Developed 15+ RESTful APIs to manage products, users, and application data. Built 20+ reusable React components for product listing, navigation, and layout. Implemented 5+ core features including dynamic routing and CRUD operations. Integrated frontend and backend layers for end-to-end data flow.',
                html_url: 'https://github.com/krithish-001',
                homepage: 'https://ecommerce54.netlify.app',
                topics: ['React.js', 'JavaScript', 'REST APIs', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot'],
                featured: true
            },
            {
                name: 'Authentication & User Management System',
                description: 'Designed JWT-based authentication supporting 3 user roles. Secured 100% of protected API endpoints using role-based access control. Encrypted user credentials to prevent plaintext password storage. Tested 20+ API scenarios using Postman.',
                html_url: 'https://github.com/krithish-001',
                homepage: 'https://mern-authpro.netlify.app',
                topics: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'MySQL'],
                featured: true
            },
            {
                name: 'Automated Deployment of a Containerized Web Application',
                description: 'Containerized backend services using Docker, standardizing deployments across 3 environments. Deployed applications on Kubernetes using Deployments, Services, and Ingress. Automated CI/CD pipelines using GitHub Actions, reducing manual deployment steps by ~90%. Enabled rolling updates to achieve zero-downtime deployments during version upgrades.',
                html_url: 'https://github.com/krithish-001/one-container',
                homepage: null,
                topics: ['Docker', 'Kubernetes', 'GitHub Actions', 'Node.js'],
                featured: true
            },
            {
                name: 'Conflict Avoidance & Road Safety System',
                description: 'Built an IoT-based road safety system using Python-driven microcontrollers and sensors to detect risky road curves and reduce accident chances with early warnings and landscape updates.',
                html_url: 'https://github.com/krithish-001',
                homepage: null,
                topics: ['Python', 'IoT Sensors', 'Embedded Systems'],
                featured: true,
                secondaryButton: 'Project Report'
            },
            {
                name: 'Top 250 IMDB Movies – Data Analysis',
                description: 'Developed a JavaFX desktop application with MySQL backend to analyze and visualize IMDb Top 250 movies, exploring patterns in ratings, genres, and trends using interactive charts.',
                html_url: 'https://github.com/krithish-001',
                homepage: null,
                topics: ['Java', 'JavaFX', 'MySQL'],
                featured: true,
                secondaryButton: 'Screenshots'
            },
            {
                name: 'Personal Portfolio Website',
                description: 'A responsive personal portfolio designed and built using HTML, CSS, and JavaScript. Includes smooth navigation, scroll animations, and a dynamic typing effect for improved user experience.',
                html_url: 'https://github.com/krithish-001',
                homepage: 'https://krithish.github.io',
                topics: ['HTML', 'CSS', 'JavaScript'],
                featured: true,
                secondaryButton: 'Live Demo'
            }
        ];
    }

    async fetchProjects() {
        try {
            const response = await fetch(`${this.apiUrl}?sort=updated&per_page=10`);
            if (!response.ok) {
                throw new Error('Failed to fetch GitHub projects');
            }
            const repos = await response.json();
            return this.filterAndFormatProjects(repos);
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            return this.resumeProjects; // Fallback to resume projects
        }
    }

    filterAndFormatProjects(repos) {
        // Exclude specific repos that should not be shown
        const excludedRepos = ['ecommerce-frontend', 'ecommerce-backend', 'shopsphere-backend', 'portfolio', 'axiom-pulse', 'krithish.github.io'];

        // Only return the explicitly allowed resume projects (6 projects total)
        return this.resumeProjects;
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';

        const imageUrl = project.featured ?
            (project.name.includes('E-Commerce') ? 'auth-system.png' :
             project.name.includes('Authentication') ? 'auth-system.png' :
             project.name.includes('Automated Deployment') ? 'devops-project.png' :
             project.name.includes('Conflict Avoidance') ? 'conflict-project.png' :
             project.name.includes('IMDB Movies') ? 'imdb-project.png' :
             'portfolio-project.jpg') :
            'portfolio-project.jpg';

        const secondaryButtonHtml = project.secondaryButton ?
            `<a href="${project.html_url}" target="_blank" class="btn btn-primary">${project.secondaryButton}</a>` :
            (project.homepage ? `<a href="${project.homepage}" target="_blank" class="btn btn-primary">Live Demo</a>` : '');

        card.innerHTML = `
            <div class="project-image">
                <img src="${imageUrl}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.topics.map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.html_url}" target="_blank" class="btn btn-outline">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${secondaryButtonHtml}
                </div>
            </div>
        `;

        return card;
    }

    async renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        // Show loading state
        projectsGrid.innerHTML = '<div class="loading"></div>';

        const projects = await this.fetchProjects();

        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const card = this.createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }
}

// Contact form validation and submission
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.nameError = document.getElementById('nameError');
        this.emailError = document.getElementById('emailError');
        this.messageError = document.getElementById('messageError');
        this.successMessage = document.getElementById('successMessage');

        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.nameInput.addEventListener('input', () => this.validateName());
            this.emailInput.addEventListener('input', () => this.validateEmail());
            this.messageInput.addEventListener('input', () => this.validateMessage());
        }
    }

    validateName() {
        const name = this.nameInput.value.trim();
        if (name.length < 2) {
            this.showError(this.nameError, 'Name must be at least 2 characters long');
            return false;
        }
        this.hideError(this.nameError);
        return true;
    }

    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showError(this.emailError, 'Please enter a valid email address');
            return false;
        }
        this.hideError(this.emailError);
        return true;
    }

    validateMessage() {
        const message = this.messageInput.value.trim();
        if (message.length < 10) {
            this.showError(this.messageError, 'Message must be at least 10 characters long');
            return false;
        }
        this.hideError(this.messageError);
        return true;
    }

    showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    hideError(element) {
        element.style.display = 'none';
    }

    async handleSubmit(e) {
        e.preventDefault();

        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        const isMessageValid = this.validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual API call)
            await this.sendMessage({
                name: this.nameInput.value.trim(),
                email: this.emailInput.value.trim(),
                message: this.messageInput.value.trim()
            });

            this.showSuccess('Message sent successfully! I\'ll get back to you soon.');
            this.form.reset();
        } catch (error) {
            this.showError(this.successMessage, 'Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async sendMessage(data) {
        // Simulate API call - replace with actual implementation
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success
                resolve();
            }, 2000);
        });
    }

    showSuccess(message) {
        this.successMessage.textContent = message;
        this.successMessage.style.color = '#10b981';
        this.successMessage.style.display = 'block';
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 5000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        initScrollReveal();
    }

    // Initialize GitHub projects
    const githubProjects = new GitHubProjects();
    githubProjects.renderProjects();

    // Initialize contact form
    new ContactForm();

    // Add reveal animations to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category, .project-card, .timeline-item, .education-card, .certification-card').forEach(el => {
        observer.observe(el);
    });
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
