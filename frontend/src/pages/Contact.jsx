import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Contact.css';

// Sub-components
const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    company: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        company: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {submitted && (
        <div className="success-message">
          ✓ Thank you! We'll respond within 24-48 hours.
        </div>
      )}

      {error && (
        <div className="error-message">
          ✗ {error}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="form-group full">
        <label htmlFor="subject">Project Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's your project about?"
          required
        />
      </div>

      <div className="form-group full">
        <label htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project, goals, timeline, and any specific requirements..."
          rows="6"
          required
        ></textarea>
      </div>

      <div className="form-group full">
        <label htmlFor="budget">Budget Range (Optional)</label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-large"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Project Details'}
      </button>

      <p className="form-note">
        We'll get back to you within 24-48 hours with initial thoughts and next steps.
      </p>
    </form>
  );
};

const InfoCard = ({ icon, title, content, link }) => (
  <div className="info-card">
    <div className="info-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{content}</p>
    {link && <a href={link} className="info-link">→ Contact</a>}
  </div>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button className="faq-header" onClick={onToggle}>
      <span>{question}</span>
      <span className="faq-icon">+</span>
    </button>
    {isOpen && (
      <div className="faq-content">
        {answer}
      </div>
    )}
  </div>
);

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'hello@cot360.com',
      link: 'mailto:hello@cot360.com'
    },
    {
      icon: '📱',
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      content: '123 Tech Street, Silicon Valley, CA 94025',
      link: null
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      content: 'Mon-Fri: 9 AM - 6 PM (PT)',
      link: null
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while custom software can take 2-6 months. We\'ll provide a detailed timeline during the consultation phase.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow a proven 7-step process: Consultation → Planning → Design → Development → Testing → Launch → Support. You\'ll have regular updates throughout.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! All our projects include ongoing support for bug fixes, performance optimization, and maintenance. We offer different support packages based on your needs.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies including React, Node.js, Python, PostgreSQL, MongoDB, AWS, and more. We choose the best tech stack for each project\'s specific needs.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and platforms. We can work with legacy systems, modern frameworks, and everything in between.'
    },
    {
      question: 'How do you handle project changes?',
      answer: 'We embrace agile methodology. Changes can be made during development with transparent communication about impact on timeline and budget. We\'re flexible and collaborative.'
    }
  ];

  const handleFAQToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar scrolled={scrolled} />

      {/* ====== HERO SECTION ====== */}
      <section className="hero contact-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Let's Build Something Amazing Together</h1>
              <p className="hero-subheadline">
                Have an idea? Need help with your project? We're here to discuss your vision and turn it into reality. Let's talk!
              </p>
            </div>

            {/* Hero Visual */}
            <div className="contact-hero-visual">
              <div className="hero-visual-card card-1">
                <span>💡</span>
                <span>Your Idea</span>
              </div>
              <div className="hero-visual-card card-2">
                <span>🤝</span>
                <span>Our Expertise</span>
              </div>
              <div className="hero-visual-card card-3">
                <span>🚀</span>
                <span>Real Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACT INFO ====== */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Multiple ways to reach us - choose what works best for you</p>
          </div>

          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-wrapper" style={{ animationDelay: `${index * 0.1}s` }}>
                <InfoCard {...info} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CONTACT FORM SECTION ====== */}
      <section className="form-section">
        <div className="container">
          <div className="form-grid">
            {/* Form */}
            <div className="form-column">
              <div className="section-header">
                <h2>Tell Us About Your Project</h2>
                <p>Share your project details and we'll get back to you soon</p>
              </div>
              <ContactForm />
            </div>

            {/* Benefits */}
            <div className="benefits-column">
              <div className="benefits-card">
                <h3>Why Choose COT360°?</h3>
                
                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Expert Team</h4>
                    <p>10+ years of experience building digital solutions</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>Tailored to your specific needs and goals</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Fast Turnaround</h4>
                    <p>Efficient process without compromising quality</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Transparent Communication</h4>
                    <p>Regular updates and complete visibility</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Ongoing Support</h4>
                    <p>Maintenance and support after launch</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <span className="benefit-check">✓</span>
                  <div>
                    <h4>Best Practices</h4>
                    <p>Latest technologies and proven methodologies</p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="response-time-card">
                <div className="response-icon">⚡</div>
                <h3>Quick Response Time</h3>
                <p>We'll respond to your inquiry within <strong>24-48 hours</strong> with initial thoughts and next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => handleFAQToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION ====== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Project Process</h2>
            <p>How we turn your idea into a reality</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">💬</div>
              <h3>Initial Consultation</h3>
              <p>We learn about your project, goals, timeline, and budget</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">📋</div>
              <h3>Proposal & Planning</h3>
              <p>Detailed proposal, timeline, and development roadmap</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">🎨</div>
              <h3>Design Phase</h3>
              <p>Wireframes, mockups, and design approval</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">⚙️</div>
              <h3>Development</h3>
              <p>Building with regular updates and feedback</p>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-icon">✅</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing and quality assurance</p>
            </div>

            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-icon">🚀</div>
              <h3>Launch</h3>
              <p>Smooth deployment and go-live support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Don't wait - let's discuss your project today and start building something amazing together!</p>
            <button className="btn btn-primary btn-large">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}