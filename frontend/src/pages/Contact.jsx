import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget || !formData.timeline || !formData.message) {
      setMessage({ type: 'error', text: '❌ Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: '❌ Please enter a valid email address.' });
      setLoading(false);
      return;
    }

    if (!formData.consent) {
      setMessage({ type: 'error', text: '❌ Please agree to be contacted.' });
      setLoading(false);
      return;
    }

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '✅ Thank you! We\'ll respond within 24-48 hours.' });
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          country: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          consent: false,
        });
        setTimeout(() => {
          setMessage({ type: '', text: '' });
        }, 5000);
      } else {
        setMessage({ type: 'error', text: data.message || '❌ Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: '❌ Failed to submit form. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="bg-animation-wrapper" aria-hidden="true">
        <div className="bg-grid"></div>
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-orb bg-orb-4"></div>
      </div>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-text">
            <h1>Let's Talk About Your Next Technology Solution</h1>
            <p className="hero-subheadline">
              Whether you need software, automation, AI integration, a website, or technical support, COT360° is ready to understand your challenge and build the right solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-row">
            {/* LEFT SIDE - CONTACT INFO */}
            <div className="contact-info">
              <h2 style={{ marginBottom: '32px' }}>How to Reach Us</h2>

              <div className="contact-info-card">
                <div className="contact-info-title">💬 General Inquiry</div>
                <div className="contact-info-content">
                  Questions about our services, pricing, or anything else? We're here to help.
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">🎯 Project Consultation</div>
                <div className="contact-info-content">
                  Have a specific project in mind? Let's discuss your requirements and create a plan.
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">🔧 Technical Support</div>
                <div className="contact-info-content">
                  Need help with an existing project or system? We provide comprehensive support.
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">🤝 Partnership</div>
                <div className="contact-info-content">
                  Interested in partnering with COT360°? Let's explore opportunities together.
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">💼 Career / Collaboration</div>
                <div className="contact-info-content">
                  Join our team or collaborate on exciting projects with talented professionals.
                </div>
              </div>

              <div className="response-time-box">
                <h4>Response Time</h4>
                <p>We usually respond within <strong>24 to 48 business hours</strong>.</p>
                <h4 style={{ marginTop: '16px' }}>Privacy & Security</h4>
                <p>
                  Your information is secure. We only use your details to respond to your inquiry and discuss your project requirements.
                </p>
              </div>

              <div className="consultation-cta">
                <h4>Prefer a Direct Discussion?</h4>
                <p>Schedule a free consultation call with our team to discuss your project in detail.</p>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => navigate('/booking')}
                >
                  Book a Consultation
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card" id="contact-form">
                <h3 style={{ marginBottom: '8px' }}>Submit Your Project Inquiry</h3>
                <p style={{ marginBottom: '32px', fontSize: '14px' }}>
                  Share your project details and we'll get back to you with expert recommendations.
                </p>

                {message.text && (
                  <div className={`form-message ${message.type}`}>
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  {/* FULL NAME */}
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* BUSINESS NAME */}
                  <div className="form-group">
                    <label htmlFor="business">Business / Organization Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      placeholder="Your business name"
                      value={formData.business}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* COUNTRY */}
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="BD">Bangladesh</option>
                      <option value="IN">India</option>
                      <option value="PK">Pakistan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* PROJECT TYPE */}
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="web-app">Web Application</option>
                      <option value="software">Custom Software</option>
                      <option value="ai">AI Solution</option>
                      <option value="automation">Automation</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="support">Technical Support</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* BUDGET */}
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select estimated budget</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 to $1,000</option>
                      <option value="1000-3000">$1,000 to $3,000</option>
                      <option value="3000-5000">$3,000 to $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* TIMELINE */}
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (ASAP)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1 to 3 months</option>
                      <option value="3-plus-months">3+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="form-group">
                    <label htmlFor="message">Project Details / Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project, challenges, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* CONSENT CHECKBOX */}
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="consent">I agree to be contacted by COT360° regarding my inquiry</label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Project Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our services and how we work</p>
          </div>

          <div className="accordion-container">
            <FAQAccordion
              question="What type of projects does COT360° handle?"
              answer="We handle a wide range of projects including custom software development, website development, web applications, mobile apps, AI solutions, business automation, UI/UX design, IT consultation, and digital transformation."
            />
            <FAQAccordion
              question="Do you work with startups and small businesses?"
              answer="Absolutely! We work with startups, small businesses, growing companies, and enterprises. We understand the unique challenges at every stage and tailor our solutions accordingly."
            />
            <FAQAccordion
              question="Can you build custom software from scratch?"
              answer="Yes, we specialize in building custom software solutions from scratch. We handle everything from requirements analysis, design, development, testing, deployment, and ongoing support."
            />
            <FAQAccordion
              question="Can you provide long-term technical support?"
              answer="Yes, we provide comprehensive long-term technical support. We offer maintenance plans, bug fixes, performance optimization, feature updates, and continuous improvement services."
            />
            <FAQAccordion
              question="Do you offer consultation before development?"
              answer="Absolutely! Consultation is a critical first step. We provide free initial consultations to understand your project, goals, challenges, and requirements."
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '18px', marginBottom: '40px' }}>
            Submit your inquiry above or schedule a free consultation to discuss your project with our expert team.
          </p>
          <a href="#contact-form" className="btn btn-primary">Submit Your Inquiry</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// FAQ Accordion Component
const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <div className="accordion-toggle">▼</div>
      </button>
      {isOpen && (
        <div className="accordion-body">
          <div className="accordion-content">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default Contact;