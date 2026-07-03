import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StatCard from '../components/layout/StatCard';
import ServiceCard from '../components/layout/ServiceCard';
import ProjectCard from '../components/layout/ProjectCard';
import ReviewCard from '../components/layout/ReviewCard';
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

  const reviewsData = [
    {
      name: 'Rafiq Anwar',
      role: 'Founder, Loop Retail',
      quote: 'COT360° rebuilt our order dashboard and automated three manual workflows in the same sprint. We stopped juggling four different vendors.',
      rating: 4.9
    },
    {
      name: 'Meherun Nesa',
      role: 'Ops Lead, Nimbus Logistics',
      quote: 'The AI support assistant they shipped cut our first-response time by more than half. Deployment was clean, documentation was clear.',
      rating: 5.0
    },
    {
      name: 'Tanvir Hasan',
      role: 'CEO, Cedar Finance',
      quote: 'What stood out was ownership — they treated our roadmap like their own product, not a ticket queue.',
      rating: 4.8
    },
    {
      name: 'Sadia Islam',
      role: 'Product Manager, Harbor SaaS',
      quote: 'From UI/UX to backend to launch, one team stayed accountable end to end. That alone was worth the switch.',
      rating: 4.9
    }
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

            <div className="spec-canvas">
              <div className="orbit-stage" aria-hidden="true">
                <div className="globe">
                  <div className="globe-ring m0" />
                  <div className="globe-ring m1" />
                  <div className="globe-ring m2" />
                  <div className="globe-ring m3" />
                  <div className="globe-ring m4" />
                  <div className="globe-ring m5" />
                  <div className="globe-ring lat1" />
                  <div className="globe-ring lat2" />
                </div>
                <div className="globe-core" />

                <div className="orbit-label top">
                  <span className="deg">00°</span>
                  Software
                </div>
                <div className="orbit-label right">
                  <span className="deg">90°</span>
                  AI
                </div>
                <div className="orbit-label bottom">
                  <span className="deg">180°</span>
                  Automation
                </div>
                <div className="orbit-label left">
                  <span className="deg">270°</span>
                  Design
                </div>
              </div>
              <span className="sr-only">
                COT360° delivers complete technology coverage across four pillars: software, AI, automation, and design.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MANIFESTO / MOTIVE ====== */}
      <section className="manifesto">
        <div className="container">
          <span className="tech-label">Why COT360° Exists</span>
          <p className="manifesto-statement">
            Most agencies specialize in one slice of technology. We built COT360° so founders and businesses get
            <em> one partner</em> who sees the whole system — software, AI, automation, and design working as a
            single, coherent build instead of four disconnected vendors.
          </p>
          <div className="manifesto-legend">
            <div className="manifesto-legend-item">
              <span className="deg">00°</span>
              <span className="name">Software</span>
            </div>
            <div className="manifesto-legend-item">
              <span className="deg">90°</span>
              <span className="name">AI</span>
            </div>
            <div className="manifesto-legend-item">
              <span className="deg">180°</span>
              <span className="name">Automation</span>
            </div>
            <div className="manifesto-legend-item">
              <span className="deg">270°</span>
              <span className="name">Design</span>
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

      {/* ====== COMPANY LOG ====== */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="tech-label">Company Log // 001</span>
              <h2 style={{ marginTop: 18 }}>Code of Technology 360°</h2>
              <p style={{ fontSize: 17, lineHeight: 1.8 }}>
                From strategy and UI/UX design to development, AI integration, automation, deployment, and support — COT360° stays with a project end to end, so nothing gets lost between vendors.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15 }}>
                The name isn't decoration. "360°" is the promise: whichever angle a problem comes from — a slow process, a missing dashboard, a manual task that should be automated — one team already owns the full picture, instead of you coordinating four different freelancers.
              </p>
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

      {/* ====== REVIEWS ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="tech-label">Client Log // Verified</span>
            <h2>What Clients Report Back</h2>
            <p>Direct feedback from founders and teams COT360° has shipped systems for.</p>
          </div>
        </div>

        <div className="reviews-viewport">
          <div className="reviews-track">
            {[...reviewsData, ...reviewsData].map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} {...review} />
            ))}
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