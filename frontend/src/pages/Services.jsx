import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/Services.css';

// Sub-components
const ServiceCard = ({ icon, title, description, includes }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-icon-wrapper">
        <div className="service-icon">{icon}</div>
        {isHovered && <div className="service-icon-glow"></div>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-includes">
        <strong>Includes:</strong> {includes}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
        Request Service
      </button>
    </div>
  );
};

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="process-step">
    <div className="process-number">{number}</div>
    <div className="process-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="card benefit-card">
    <div className="benefit-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const PricingCard = ({ tier, price, description, features, isPopular, cta }) => (
  <div className={`card pricing-card ${isPopular ? 'popular' : ''}`}>
    {isPopular && <div className="popular-badge">POPULAR</div>}
    <h3 className="pricing-tier">{tier}</h3>
    <div className="pricing-price">
      <span className="currency">$</span>
      <span className="amount">{price}</span>
    </div>
    <p className="pricing-description">{description}</p>
    <ul className="pricing-features">
      {features.map((feature, idx) => (
        <li key={idx}>✓ {feature}</li>
      ))}
    </ul>
    <button className="btn btn-primary" style={{ width: '100%' }}>
      {cta}
    </button>
  </div>
);

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesData = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Build powerful business software, management systems, dashboards, portals, and internal tools tailored specifically to your workflow.',
      includes: 'Business systems, dashboards, admin panels, database design, API integration, scalable architecture.'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Premium business websites, portfolio websites, landing pages, and corporate websites designed to impress and convert visitors.',
      includes: 'Responsive design, SEO-ready structure, CMS integration, fast performance, mobile optimization.'
    },
    {
      icon: '⚡',
      title: 'Web Application Development',
      description: 'Scalable web apps, SaaS platforms, booking systems, customer portals, and custom platforms for any business need.',
      includes: 'Authentication, dashboard, database, user roles, backend integration, cloud deployment.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Mobile-first digital products for Android, iOS, and cross-platform experiences that users love.',
      includes: 'App UI design, user flow, API connection, scalable backend, app store deployment.'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      description: 'AI chatbots, prediction systems, recommendation engines, and intelligent workflows for smart automation.',
      includes: 'Chatbots, data analysis, predictive models, automation, smart assistants, NLP integration.'
    },
    {
      icon: '⚙️',
      title: 'Business Automation',
      description: 'Automate repetitive work, generate reports, optimize customer flow, and streamline internal business operations.',
      includes: 'Workflow automation, custom reporting, email automation, process optimization, integration.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Clean, user-friendly, conversion-focused, and premium interface design for all digital products and platforms.',
      includes: 'Wireframing, prototyping, product UI, dashboard design, design systems, user research.'
    },
    {
      icon: '🔍',
      title: 'IT Consultation',
      description: 'Help your business choose the right technology, structure, platform, and digital strategy for success.',
      includes: 'Tech planning, project roadmap, system architecture, platform recommendation, strategy.'
    },
    {
      icon: '🔧',
      title: 'Technical Support',
      description: 'Fix bugs, resolve website issues, troubleshoot system errors, optimize performance, and maintain your applications.',
      includes: 'Bug fixing, performance optimization, maintenance, troubleshooting, uptime monitoring.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Help traditional businesses move into modern digital systems and embrace technology for growth.',
      includes: 'Digital strategy, software planning, automation, online presence, cloud migration.'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', description: 'Understand your needs and goals', icon: '💬' },
    { number: '02', title: 'Planning', description: 'Create comprehensive roadmap', icon: '📋' },
    { number: '03', title: 'Design', description: 'Design solution & mockups', icon: '🎨' },
    { number: '04', title: 'Development', description: 'Build solution with latest tech', icon: '⚙️' },
    { number: '05', title: 'Testing', description: 'Rigorous QA & testing', icon: '✅' },
    { number: '06', title: 'Launch', description: 'Deploy solution smoothly', icon: '🚀' },
    { number: '07', title: 'Support', description: 'Ongoing support & monitoring', icon: '🤝' }
  ];

  const benefitsData = [
    { icon: '⚡', title: 'Fast Turnaround', description: 'Efficient processes and experienced teams deliver solutions quickly without compromising quality.' },
    { icon: '💪', title: 'Quality Assured', description: 'Rigorous testing and QA processes ensure your solution meets the highest standards.' },
    { icon: '📈', title: 'Scalable Solutions', description: 'We build solutions that grow with your business and handle increased demand.' },
    { icon: '🔒', title: 'Secure & Reliable', description: 'Security-first approach with best practices and industry standards implementation.' },
    { icon: '💰', title: 'Cost Effective', description: 'Transparent pricing with no hidden costs. You get excellent value for your investment.' },
    { icon: '🎯', title: 'Results Focused', description: 'Every decision is made with your business goals and success in mind.' }
  ];

  const pricingData = [
    {
      tier: 'Starter',
      price: '500-2,000',
      description: 'Perfect for small projects',
      features: [
        'Websites & landing pages',
        'Simple web apps',
        'Basic customization',
        'Standard support'
      ],
      isPopular: false,
      cta: 'Get Started'
    },
    {
      tier: 'Professional',
      price: '2,000-10,000',
      description: 'For growing businesses',
      features: [
        'Custom software',
        'Web applications',
        'Database design',
        'Priority support'
      ],
      isPopular: true,
      cta: 'Discuss Project'
    },
    {
      tier: 'Enterprise',
      price: '10,000+',
      description: 'Large-scale solutions',
      features: [
        'Complex systems',
        'AI integration',
        'Dedicated team',
        '24/7 support'
      ],
      isPopular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar scrolled={scrolled} />

      {/* ====== HERO SECTION ====== */}
      <section className="hero services-hero">
        <div className="container">
          <div className="hero-content services-hero-content">
            <div className="hero-text">
              <h1>Complete Technology Services for Modern Businesses</h1>
              <p className="hero-subheadline">
                From simple websites to complex software systems, COT360° provides full-cycle digital solution support. Whatever your technology challenge, we have the expertise to solve it.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Request Service
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Services Hero Visual */}
            <div className="services-hero-visual">
              <div className="service-visual-card">
                <div className="service-visual-icon">💼</div>
                <div className="service-visual-text">
                  <div>Full-Cycle</div>
                  <div>Solutions</div>
                </div>
              </div>
              <div className="service-visual-card card-2">
                <div className="service-visual-icon">🚀</div>
                <div className="service-visual-text">
                  <div>Expert</div>
                  <div>Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section>
        <div className="container">
          <div className="section-header">
            <h2>Our Service Offerings</h2>
            <p>Comprehensive solutions covering every aspect of digital technology</p>
          </div>

          <div className="grid-2 services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE PROCESS ====== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Service Process</h2>
            <p>How we deliver excellent results for every project</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>

          {/* Process Flow Visualization */}
          <div className="process-flow">
            <div className="flow-line"></div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flow-arrow">→</div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE BENEFITS ====== */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Our Services</h2>
            <p>Benefits you get when you choose COT360°</p>
          </div>

          <div className="grid-3">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="benefit-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <BenefitCard {...benefit} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRICING SECTION ====== */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Service Pricing</h2>
            <p>Flexible pricing based on your project scope and requirements</p>
          </div>

          <div className="pricing-grid">
            {pricingData.map((pricing, index) => (
              <div key={index} className="pricing-wrapper" style={{ animationDelay: `${index * 0.15}s` }}>
                <PricingCard {...pricing} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE FEATURES ====== */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Different</h2>
            <p>Our unique approach to service delivery</p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Expert Team</h3>
              <p>Highly skilled professionals with years of experience across diverse industries and technologies.</p>
              <div className="feature-icon">👨‍💼</div>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Custom Solutions</h3>
              <p>We don't use one-size-fits-all templates. Every solution is built specifically for your needs.</p>
              <div className="feature-icon">🔧</div>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Transparent Process</h3>
              <p>Clear communication, regular updates, and complete visibility throughout the entire project.</p>
              <div className="feature-icon">🔍</div>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Quality First</h3>
              <p>Rigorous testing, code reviews, and quality assurance ensure excellence in every deliverable.</p>
              <div className="feature-icon">⭐</div>
            </div>

            <div className="feature-item">
              <div className="feature-number">05</div>
              <h3>Post-Launch Support</h3>
              <p>We don't disappear after launch. Ongoing support, maintenance, and improvements are included.</p>
              <div className="feature-icon">🤝</div>
            </div>

            <div className="feature-item">
              <div className="feature-number">06</div>
              <h3>Scalable Growth</h3>
              <p>Solutions designed to grow with your business, handling increased load and complexity.</p>
              <div className="feature-icon">📈</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGY STACK ====== */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2>Technology Stack We Use</h2>
            <p>Latest and proven technologies for robust solutions</p>
          </div>

          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-items">
                {['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Figma'].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-items">
                {['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI', 'GraphQL'].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-items">
                {['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL', 'Elasticsearch'].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <div className="tech-items">
                {['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'].map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Technology Solution?</h2>
            <p>Tell us about your project. We'll provide expert recommendations and a clear roadmap.</p>
            <button className="btn btn-primary btn-large" onClick={() => navigate('/contact')}>
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}