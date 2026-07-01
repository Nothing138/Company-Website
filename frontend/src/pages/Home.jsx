import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const servicesData = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Build business software, management systems, dashboards, portals, and internal tools tailored to your unique needs.',
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Premium business websites, portfolio websites, landing pages, and corporate websites that convert visitors.',
    },
    {
      icon: '⚡',
      title: 'Web Application Development',
      description: 'Scalable web apps, SaaS platforms, booking systems, portals, and custom platforms for any business model.',
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      description: 'AI chatbots, prediction systems, recommendation tools, and intelligent workflows for business automation.',
    },
    {
      icon: '⚙️',
      title: 'Business Automation',
      description: 'Automate repetitive work, reports, customer flow, internal tasks, and optimize business operations.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Clean, user-friendly, conversion-focused, and premium interface design for all digital products and platforms.',
    }
  ];

  const projectsData = [
    {
      icon: '📊',
      category: 'Software',
      title: 'Smart Business Dashboard',
      description: 'A comprehensive dashboard for tracking business performance, reports, and operational data in real-time with advanced analytics.',
      tags: ['React', 'Node.js', 'Analytics', 'Automation']
    },
    {
      icon: '🤖',
      category: 'AI',
      title: 'AI Customer Support System',
      description: 'An AI-powered support assistant that helps businesses respond faster and smarter to customer inquiries automatically.',
      tags: ['AI', 'Chatbot', 'Automation', 'NLP']
    },
    {
      icon: '🛒',
      category: 'Automation',
      title: 'E-commerce Automation Platform',
      description: 'A powerful platform for managing products, orders, payments, and inventory automation seamlessly and securely.',
      tags: ['E-commerce', 'API', 'Payment', 'Inventory']
    }
  ];

  const reviewsData = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Bangladesh',
      image: '👨‍💼',
      content: 'COT360 transformed our entire business workflow. The custom software solution they built reduced our operational costs by 40% and increased efficiency significantly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Fatima Ahmed',
      role: 'Founder, E-Commerce Plus',
      image: '👩‍💼',
      content: 'Their automation platform completely changed how we manage inventory and customer orders. The team was professional, responsive, and delivered exactly what we needed.',
      rating: 5
    },
    {
      name: 'Sohail Hassan',
      role: 'Director, Digital Marketing Agency',
      image: '👨‍💻',
      content: 'Outstanding UI/UX design team! They created a dashboard that our clients absolutely love. The attention to detail and user experience is unmatched.',
      rating: 5
    },
    {
      name: 'Nadia Sultana',
      role: 'Product Manager, FinTech Startup',
      image: '👩‍💻',
      content: 'The AI integration they built for our platform is incredibly powerful. The team understood our requirements perfectly and delivered a robust solution.',
      rating: 5
    },
    {
      name: 'Arjun Singh',
      role: 'Business Owner, Enterprise Solutions',
      image: '👨‍🔬',
      content: 'Best investment we made. COT360 didnt just build software for us, they became strategic partners. Their ongoing support has been phenomenal.',
      rating: 5
    },
    {
      name: 'Zainab Mohammed',
      role: 'CTO, Digital Innovation Labs',
      image: '👩‍🔬',
      content: 'Professional, innovative, and results-driven. They delivered our project on time and the quality exceeds expectations. Perfect alignment with our vision.',
      rating: 5
    }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-360">360°</span>
            <span className="logo-text">COT360</span>
          </div>
          <div className="nav-menu">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Code of Technology 360°</div>
          <h1 className="hero-title">
            Solving Technology Problems<br />
            <span className="gradient-text">from Every Angle</span>
          </h1>
          <p className="hero-description">
            COT360 builds software, web applications, AI-powered systems, automation tools, and complete digital solutions for individuals, startups, and businesses of all sizes.
          </p>
          <div className="hero-trust">
            <span>✓ Software</span>
            <span>✓ AI</span>
            <span>✓ Automation</span>
            <span>✓ UI/UX</span>
            <span>✓ Support</span>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start a Project</button>
            <button className="btn btn-secondary">Explore Services</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-header">Analytics</div>
            <div className="dashboard-value">+2,847</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">AI Status</div>
            <div className="dashboard-value">Active</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">Automation</div>
            <div className="dashboard-value">85%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-header">Performance</div>
            <div className="dashboard-value">98/100</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">360°</div>
            <div className="stat-label">Digital Support</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Software-first</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">AI Ready</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <div className="stat-label">Partnership Rate</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Code of Technology<br /><span className="gradient-text">360°</span></h2>
            <p>
              COT360° was created to solve technology problems from every angle. From strategy and UI/UX design to development, AI integration, automation, deployment, and support, we help clients build reliable digital solutions for the future.
            </p>
            <p className="about-secondary">
              The 360° represents complete technology solutions from every angle. It also represents unlimited possibilities, continuous innovation, and the infinity of technology.
            </p>
          </div>
          <div className="about-visual">
            <div className="visual-box">
              <div className="visual-circle">360°</div>
              <div className="visual-label">Complete Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-header">
          <h2>Our Featured<br /><span className="gradient-text">Services</span></h2>
          <p>Complete technology solutions designed for modern businesses and ambitious startups.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card spotlight-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-footer">
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button className="btn btn-secondary">View All Services</button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2>Featured<br /><span className="gradient-text">Projects</span></h2>
          <p>Explore the type of software, automation, and digital products we build.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card spotlight-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-category">{project.category}</div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button className="btn btn-secondary">Explore All Projects</button>
        </div>
      </section>

      {/* Technology Stack Marquee */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-content">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'Python', 'AI/ML', 'APIs', 'Cloud', 'Figma'].map((tech, i) => (
              <div key={i} className="marquee-item">● {tech}</div>
            ))}
            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'Python', 'AI/ML', 'APIs', 'Cloud', 'Figma'].map((tech, i) => (
              <div key={`repeat-${i}`} className="marquee-item">● {tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section" id="reviews">
        <div className="section-header">
          <h2>What Our Clients<br /><span className="gradient-text">Say About Us</span></h2>
          <p>Real feedback from businesses we've helped transform and scale.</p>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review, index) => (
            <div key={index} className="review-card spotlight-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-content">"{review.content}"</p>
              <div className="review-author">
                <div className="author-avatar">{review.image}</div>
                <div className="author-info">
                  <div className="author-name">{review.name}</div>
                  <div className="author-role">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Let's Build Something<br /><span className="gradient-text">Intelligent Together</span></h2>
          <p className="cta-description">
            Have an idea, business problem, or technical challenge? COT360° is ready to design, build, and scale the right solution for your business.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start a Project</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>COT360°</h4>
            <p>Complete technology solutions from every angle for your business growth.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">AI & Automation</a></li>
              <li><a href="#services">UI/UX Design</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 COT360°. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}