import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StatCard from '../components/layout/StatCard';
import ServiceCard from '../components/layout/ServiceCard';
import ProjectCard from '../components/layout/ProjectCard';
import '../styles/Home.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const servicesData = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Build business software, management systems, dashboards, portals, and internal tools tailored to your unique needs.',
      includes: 'Business systems, dashboards, admin panels, database design, API integration.'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Premium business websites, portfolio websites, landing pages, and corporate websites that convert visitors.',
      includes: 'Responsive design, SEO-ready structure, CMS integration, fast performance.'
    },
    {
      icon: '⚡',
      title: 'Web Application Development',
      description: 'Scalable web apps, SaaS platforms, booking systems, portals, and custom platforms for any business model.',
      includes: 'Authentication, dashboard, database, user roles, backend integration.'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      description: 'AI chatbots, prediction systems, recommendation tools, and intelligent workflows for business automation.',
      includes: 'Chatbots, data analysis, automation, smart assistants, ML models.'
    },
    {
      icon: '⚙️',
      title: 'Business Automation',
      description: 'Automate repetitive work, reports, customer flow, internal tasks, and optimize business operations.',
      includes: 'Workflow automation, reporting, email automation, process optimization.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Clean, user-friendly, conversion-focused, and premium interface design for all digital products and platforms.',
      includes: 'Wireframe, prototype, product UI, dashboard UI, design system.'
    }
  ];

  const projectsData = [
    {
      icon: '📊 Dashboard',
      category: 'Software',
      title: 'Smart Business Dashboard',
      description: 'A comprehensive dashboard for tracking business performance, reports, and operational data in real-time with advanced analytics.',
      tags: ['React', 'Node.js', 'Analytics', 'Automation']
    },
    {
      icon: '🤖 AI Assistant',
      category: 'AI',
      title: 'AI Customer Support System',
      description: 'An AI-powered support assistant that helps businesses respond faster and smarter to customer inquiries automatically.',
      tags: ['AI', 'Chatbot', 'Automation', 'NLP']
    },
    {
      icon: '🛒 E-commerce',
      category: 'Automation',
      title: 'E-commerce Automation Platform',
      description: 'A powerful platform for managing products, orders, payments, and inventory automation seamlessly and securely.',
      tags: ['E-commerce', 'API', 'Payment', 'Inventory']
    }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrolled={scrolled} />

      {/* ====== HERO SECTION ====== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">Code of Technology 360°</div>
              <h1>Solving Technology Problems from Every Angle</h1>
              <p className="hero-subheadline">
                COT360° builds software, web applications, AI-powered systems, automation tools, and complete digital solutions for individuals, startups, and businesses of all sizes.
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

            <div className="hero-visual dashboard-visual">
              <div className="dashboard-card">
                <div className="dashboard-card-title">Analytics</div>
                <div className="dashboard-card-value">+2,847</div>
                <div className="dashboard-bar">
                  <div className="dashboard-bar-fill"></div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="dashboard-card-title">AI Status</div>
                <div className="dashboard-card-value">Active</div>
                <div className="dashboard-bar">
                  <div className="dashboard-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="dashboard-card-title">Automation</div>
                <div className="dashboard-card-value">85%</div>
                <div className="dashboard-bar">
                  <div className="dashboard-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="dashboard-card-title">Performance</div>
                <div className="dashboard-card-value">98/100</div>
                <div className="dashboard-bar">
                  <div className="dashboard-bar-fill" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="stats-section">
        <div className="container">
          <div className="grid-4">
            <StatCard number={360} label="360° Digital Support" />
            <StatCard number={100} label="Software-first Solutions" />
            <StatCard number={50} label="AI & Automation Ready" />
            <StatCard number={99} label="Long-term Partnership %" />
          </div>
        </div>
      </section>

      {/* ====== BRAND INTRO ====== */}
      <section>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Code of Technology 360°</h2>
              <p style={{ fontSize: '18px', marginTop: '24px', lineHeight: '1.8' }}>
                COT360° was created to solve technology problems from every angle. From strategy and UI/UX design to development, AI integration, automation, deployment, and support, we help clients build reliable digital solutions for the future.
              </p>
              <p style={{ marginTop: '28px', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
                The 360° represents complete technology solutions from every angle. It also represents unlimited possibilities, continuous innovation, and the infinity of technology.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%)',
                borderRadius: '24px',
                border: '2px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div>
                  <div style={{ fontSize: '64px', marginBottom: '16px', fontWeight: '700' }}>360°</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Complete Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED SERVICES ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2>Our Featured Services</h2>
            <p>Complete technology solutions designed for modern businesses and ambitious startups.</p>
          </div>

          <div className="grid-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="btn btn-secondary">View All Services</button>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Explore the type of software, automation, and digital products we build.</p>
          </div>

          <div className="grid-3">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="btn btn-secondary">Explore All Projects</button>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY MARQUEE ====== */}
      <section>
        <div className="marquee">
          <div className="marquee-content">
            <div className="marquee-item">● HTML</div>
            <div className="marquee-item">● CSS</div>
            <div className="marquee-item">● JavaScript</div>
            <div className="marquee-item">● React</div>
            <div className="marquee-item">● Next.js</div>
            <div className="marquee-item">● Node.js</div>
            <div className="marquee-item">● Express.js</div>
            <div className="marquee-item">● MongoDB</div>
            <div className="marquee-item">● PostgreSQL</div>
            <div className="marquee-item">● Firebase</div>
            <div className="marquee-item">● Python</div>
            <div className="marquee-item">● AI/ML</div>
            <div className="marquee-item">● APIs</div>
            <div className="marquee-item">● Cloud</div>
            <div className="marquee-item">● Figma</div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
        borderRadius: '32px',
        margin: '120px 32px',
        padding: '80px 32px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 229, 255, 0.1)'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '20px', fontSize: '42px' }}>Let's Build Something Intelligent Together</h2>
          <p style={{ fontSize: '18px', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            Have an idea, business problem, or technical challenge? COT360° is ready to design, build, and scale the right solution for your business.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Start a Project</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

    </div>
  );
}