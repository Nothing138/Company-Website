import React, { useState } from 'react';

const Footer = () => {
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
          <div className="footer-section">
            <div className="footer-logo">COT360°</div>
            <span className="tech-label footer-tagline">Your 360° Technology Partner</span>
            <p className="footer-description">
              COT360° helps individuals, startups, and businesses solve technology problems through custom software, AI, automation, UI/UX design, and complete digital solutions for the digital age.
            </p>
          </div>

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

          <div className="footer-section">
            <h3>Stay Updated</h3>
            <p style={{ marginBottom: 16, fontSize: 14.5 }}>
              Subscribe to our newsletter for tech insights, updates, and industry news.
            </p>

            {subscribed ? (
              <div style={{
                padding: '12px 16px',
                border: '1px solid var(--accent-indigo)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--accent-indigo)',
                fontSize: 13.5,
                fontWeight: 600
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

            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#twitter" aria-label="X">𝕏</a>
              <a href="#linkedin" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 COT360°. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;