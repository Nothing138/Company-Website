import React, { useState } from 'react';

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">COT360°</div>
            <div className="footer-tagline">Your 360° Technology Partner</div>
            <p className="footer-description">
              COT360° helps individuals, startups, and businesses solve technology problems through custom software, AI, automation, UI/UX design, and complete digital solutions for the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section">
            <h3>Stay Updated</h3>
            <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)', fontSize: '15px' }}>
              Subscribe to our newsletter for tech insights, updates, and industry news.
            </p>
            {subscribed ? (
              <div style={{
                padding: '12px 16px',
                background: 'rgba(0, 229, 255, 0.1)',
                border: '1px solid var(--color-accent-cyan)',
                borderRadius: '10px',
                color: 'var(--color-accent-cyan)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form className="footer-newsletter" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            )}
            
            {/* Social Links */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <a 
                href="#facebook" 
                style={{
                  display: 'inline-flex',
                  width: '44px',
                  height: '44px',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'var(--color-text-primary)',
                  fontWeight: '700',
                  fontSize: '18px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-cyan)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.color = 'var(--color-text-primary)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                f
              </a>
              <a 
                href="#twitter" 
                style={{
                  display: 'inline-flex',
                  width: '44px',
                  height: '44px',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'var(--color-text-primary)',
                  fontWeight: '700',
                  fontSize: '18px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-cyan)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.color = 'var(--color-text-primary)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                𝕏
              </a>
              <a 
                href="#linkedin" 
                style={{
                  display: 'inline-flex',
                  width: '44px',
                  height: '44px',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: 'var(--color-text-primary)',
                  fontWeight: '700',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-cyan)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.color = 'var(--color-text-primary)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 COT360°. All rights reserved. | <a href="#privacy" style={{ color: 'var(--color-accent-cyan)', fontWeight: '600' }}>Privacy Policy</a> | <a href="#terms" style={{ color: 'var(--color-accent-cyan)', fontWeight: '600' }}>Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;