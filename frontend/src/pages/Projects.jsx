import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/Projects.css';

// Sub-components
const ProjectCard = ({ project, onViewClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-thumbnail-wrapper">
        <div className="project-thumbnail">
          {project.image ? (
            <>
              <img src={project.image} alt={project.title} className="project-image" />
              {project.video && (
                <div className="video-play-button">▶</div>
              )}
            </>
          ) : (
            <div className="project-icon">{project.icon}</div>
          )}
        </div>
        {isHovered && <div className="project-overlay"></div>}
      </div>

      <div className="project-category">{project.category}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>

      <button className="btn btn-primary" style={{ width: '100%' }} onClick={onViewClick}>
        View Project
      </button>
    </div>
  );
};

const FilterButton = ({ label, filter, isActive, onClick }) => (
  <button
    className={`filter-btn ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const StatCard = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(number);
    if (count < target) {
      const increment = target / 50;
      const timer = setTimeout(() => setCount(Math.min(count + increment, target)), 30);
      return () => clearTimeout(timer);
    }
  }, [count, number]);

  return (
    <div className="card stat-card">
      <div className="stat-number">{Math.floor(count)}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const CaseStudy = () => (
  <div className="case-study">
    <h2>Featured Case Study</h2>
    <p style={{ marginTop: 16, color: 'var(--color-text-secondary)', fontSize: 18 }}>
      See how we transformed a manual process into a smart, automated digital workflow
    </p>

    <div className="case-study-grid">
      <div className="case-study-item">
        <h4>🔴 The Problem</h4>
        <p>
          A growing e-commerce business was handling order management, inventory tracking, and customer communication entirely manually. This led to errors, delayed responses, and significant operational bottlenecks.
        </p>
      </div>

      <div className="case-study-item">
        <h4>✅ Our Solution</h4>
        <p>
          We built an integrated automation platform that connected their e-commerce store with inventory management, automatic order processing, payment verification, and intelligent customer notifications.
        </p>
      </div>

      <div className="case-study-item">
        <h4>📈 The Results</h4>
        <p>
          60% reduction in manual work, 90% faster order processing, 40% improvement in customer satisfaction, and ability to handle 3x more orders without additional staff.
        </p>
      </div>
    </div>

    <div style={{ marginTop: 40, textAlign: 'center' }}>
      <button className="btn btn-secondary">Read Full Case Study</button>
    </div>
  </div>
);

export default function Projects() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsData = [
    {
      icon: '📊',
      category: 'Software',
      title: 'Smart Business Dashboard',
      description: 'A comprehensive dashboard for tracking business performance, reports, analytics, and operational data in real-time with advanced visualizations.',
      tags: ['React', 'Node.js', 'Analytics', 'Automation'],
      image: null,
      video: null,
      filter: 'software'
    },
    {
      icon: '🤖',
      category: 'AI',
      title: 'AI Customer Support System',
      description: 'An AI-powered intelligent support assistant that helps businesses respond faster and smarter to customer inquiries with natural language processing.',
      tags: ['AI', 'Chatbot', 'Automation', 'NLP'],
      image: null,
      video: null,
      filter: 'ai'
    },
    {
      icon: '🛒',
      category: 'Automation',
      title: 'E-commerce Automation Platform',
      description: 'A powerful platform for managing products, orders, payments, and inventory automation seamlessly with integrated reporting and analytics.',
      tags: ['E-commerce', 'API', 'Payment', 'Inventory'],
      image: null,
      video: null,
      filter: 'automation'
    },
    {
      icon: '💼',
      category: 'Web App',
      title: 'Job Portal Web Application',
      description: 'A comprehensive platform for job posting, candidate management, applications tracking, and admin control with advanced filtering and search.',
      tags: ['Web App', 'Database', 'Auth', 'Dashboard'],
      image: null,
      video: null,
      filter: 'web-app'
    },
    {
      icon: '🔐',
      category: 'SaaS',
      title: 'SaaS Management System',
      description: 'A scalable SaaS system with user roles, subscription management, billing integration, and comprehensive analytics for multi-tenant operations.',
      tags: ['SaaS', 'Subscription', 'Admin', 'Cloud'],
      image: null,
      video: null,
      filter: 'saas'
    },
    {
      icon: '🌐',
      category: 'Website',
      title: 'Corporate Website Solution',
      description: 'A premium business website designed for trust, branding, and conversion with responsive design, SEO optimization, and fast loading times.',
      tags: ['Website', 'UI/UX', 'SEO', 'CMS'],
      image: null,
      video: null,
      filter: 'website'
    }
  ];

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Software', value: 'software' },
    { label: 'Web App', value: 'web-app' },
    { label: 'AI', value: 'ai' },
    { label: 'Automation', value: 'automation' },
    { label: 'SaaS', value: 'saas' },
    { label: 'Website', value: 'website' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.filter === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleViewProject = (project) => {
    // Open project details or navigate
    navigate('/contact');
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar scrolled={scrolled} />

      {/* ====== HERO SECTION ====== */}
      <section className="hero projects-hero">
        <div className="container">
          <div className="hero-content projects-hero-content">
            <div className="hero-text">
              <h1>Digital Solutions Built for Real Problems</h1>
              <p className="hero-subheadline">
                Explore the type of software, automation, and digital products COT360° can build for modern businesses. From startups to enterprises, we deliver real results.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Discuss Your Project
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
                  Get Free Consultation
                </button>
              </div>
            </div>

            {/* Projects Hero Visual */}
            <div className="projects-hero-visual">
              <div className="hero-card hero-card-1">
                <div className="hero-card-icon">🚀</div>
                <div className="hero-card-text">Build Better</div>
              </div>
              <div className="hero-card hero-card-2">
                <div className="hero-card-icon">💡</div>
                <div className="hero-card-text">Think Smart</div>
              </div>
              <div className="hero-card hero-card-3">
                <div className="hero-card-icon">⚡</div>
                <div className="hero-card-text">Move Fast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FILTER SECTION ====== */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {filterOptions.map((option) => (
              <FilterButton
                key={option.value}
                label={option.label}
                filter={option.value}
                isActive={activeFilter === option.value}
                onClick={() => handleFilterClick(option.value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROJECTS GRID ====== */}
      <section className="projects-section">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid-3 projects-grid">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="project-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard 
                    project={project}
                    onViewClick={() => handleViewProject(project)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <h3>No projects found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* ====== CASE STUDY ====== */}
      <section>
        <div className="container">
          <CaseStudy />
        </div>
      </section>

      {/* ====== PROJECT STATS ====== */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Project Success</h2>
            <p>By the numbers - our commitment to excellence</p>
          </div>

          <div className="grid-4">
            <StatCard number="15" label="Successful Projects" />
            <StatCard number="50" label="Happy Clients" />
            <StatCard number="2000" label="Hours Invested" />
            <StatCard number="95" label="Client Satisfaction %" />
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY STACK ====== */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Technology Stack</h2>
            <p>Modern, scalable, and proven technologies we use in all our projects</p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">⚙️</div>
              <h4>Frontend</h4>
              <p>React, Next.js, Vue, Tailwind CSS, HTML5, CSS3, JavaScript</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🖥️</div>
              <h4>Backend</h4>
              <p>Node.js, Express, Python, Django, REST APIs, GraphQL</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">💾</div>
              <h4>Databases</h4>
              <p>MongoDB, PostgreSQL, MySQL, Firebase, Redis</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">☁️</div>
              <h4>Cloud & DevOps</h4>
              <p>AWS, Google Cloud, Azure, Docker, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project Idea?</h2>
            <p>Let's discuss your project, challenges, and goals. We'll help you build something amazing that solves real problems.</p>
            <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}