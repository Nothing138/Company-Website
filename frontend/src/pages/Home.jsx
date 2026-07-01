import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StatCard from '../components/layout/StatCard';
import ServiceCard from '../components/layout/ServiceCard';
import ProjectCard from '../components/layout/ProjectCard';
import '../styles/Home.css';
import { useTheme } from '../context/ThemeContext';

export default function App() {
  const { darkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const statsData = [
    { number: 360, label: '360° Digital Support' },
    { number: 100, label: 'Software-first Solutions' },
    { number: 50, label: 'AI & Automation Ready' },
    { number: 99, label: 'Long-term Partnership %' }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar scrolled={scrolled} />

      {/* ====== HERO / SPEC CONSOLE ====== */}
      <section className="hero">
        <div className="container">
          <div className="spec-console">
            <div className="spec-panel">
              <span className="tech-label">Code of Technology 360°</span>
              <h1>Solving Technology Problems from Every Angle</h1>
              <p className="spec-subheadline">
                COT360° builds software, web applications, AI-powered systems, automation tools, and complete digital solutions for individuals, startups, and businesses of all sizes.
              </p>

              <div className="spec-readout">
                <span><span className="status-node" />Software</span>
                <span><span className="status-node" />AI</span>
                <span><span className="status-node" />Automation</span>
                <span><span className="status-node" />UI/UX</span>
                <span><span className="status-node" />Support</span>
              </div>

              <div className="spec-buttons">
                <button className="btn btn-primary">Start a Project</button>
                <button className="btn btn-secondary">Explore Services</button>
              </div>
            </div>

            <div className="spec-canvas frame">
              <div className="spec-canvas-label">
                <span className="tech-label">System Overview</span>
                <span className="status-node" />
              </div>

              <div className="label-pill">
                <div className="label-pill-head">
                  <span className="label-pill-title">Analytics</span>
                </div>
                <div className="label-pill-value">+2,847</div>
                <div className="label-pill-bar"><div className="label-pill-bar-fill" style={{ width: '70%' }} /></div>
              </div>

              <div className="label-pill">
                <div className="label-pill-head">
                  <span className="label-pill-title">AI Status</span>
                </div>
                <div className="label-pill-value">Active</div>
                <div className="label-pill-bar"><div className="label-pill-bar-fill" style={{ width: '100%' }} /></div>
              </div>

              <div className="label-pill">
                <div className="label-pill-head">
                  <span className="label-pill-title">Automation</span>
                </div>
                <div className="label-pill-value">85%</div>
                <div className="label-pill-bar"><div className="label-pill-bar-fill" style={{ width: '85%' }} /></div>
              </div>

              <div className="label-pill">
                <div className="label-pill-head">
                  <span className="label-pill-title">Performance</span>
                </div>
                <div className="label-pill-value">98/100</div>
                <div className="label-pill-bar"><div className="label-pill-bar-fill" style={{ width: '98%' }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS / PROTOCOL ROW ====== */}
      <section className="protocol-row">
        <div className="container">
          <div className="protocol-grid frame">
            {statsData.map((stat, i) => (
              <div className="protocol-item" key={stat.label}>
                <span className="protocol-index">{String(i + 1).padStart(2, '0')}</span>
                <StatCard number={stat.number} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRAND INTRO ====== */}
      <section>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="tech-label">Company Log // 001</span>
              <h2 style={{ marginTop: 18 }}>Code of Technology 360°</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8 }}>
                COT360° was created to solve technology problems from every angle. From strategy and UI/UX design to development, AI integration, automation, deployment, and support, we help clients build reliable digital solutions for the future.
              </p>
              <p style={{ marginTop: 24, fontSize: 15 }}>
                The 360° represents complete technology solutions from every angle. It also represents unlimited possibilities, continuous innovation, and the infinity of technology.
              </p>
            </div>

            <div className="frame" style={{ padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
              <div style={{ textAlign: 'center' }}>
                <div className="subheading" style={{ fontSize: 64, color: 'var(--accent-gold)' }}>360°</div>
                <span className="tech-label" style={{ marginTop: 16 }}>Complete Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED SERVICES ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="tech-label">Capabilities // 01–06</span>
            <h2>Our Featured Services</h2>
            <p>Complete technology solutions designed for modern businesses and ambitious startups.</p>
          </div>

          <div className="grid-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn btn-secondary">View All Services</button>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="tech-label">Deployed Systems</span>
            <h2>Featured Projects</h2>
            <p>Explore the type of software, automation, and digital products we build.</p>
          </div>

          <div className="grid-3">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn btn-secondary">Explore All Projects</button>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY MARQUEE ====== */}
      <section style={{ padding: 0 }}>
        <div className="marquee">
          <div className="marquee-content">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'Python', 'AI/ML', 'APIs', 'Cloud', 'Figma'].map((tech) => (
              <div className="marquee-item" key={tech}>{tech} ◇</div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section>
        <div className="container">
          <div className="cta-frame frame">
            <span className="tech-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Start Here</span>
            <h2>Let's Build Something Intelligent Together</h2>
            <p>
              Have an idea, business problem, or technical challenge? COT360° is ready to design, build, and scale the right solution for your business.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-gold">Start a Project</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}