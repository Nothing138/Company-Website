import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import '../../styles/Navbar.css';

const Navbar = ({ scrolled }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation links data
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Metallic Paint Logo */}
        <div className="navbar-logo-wrapper">
          <div className="metallic-paint-logo">
            <svg width="120" height="40" viewBox="0 0 120 40" className="logo-svg">
              <defs>
                <filter id="metallic-effect">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="5" />
                  <feDisplacementMap in="SourceGraphic" scale="3" />
                </filter>
              </defs>
              <text 
                x="10" 
                y="28" 
                fontSize="24" 
                fontWeight="900"
                fill="url(#metallicGradient)"
                filter="url(#metallic-effect)"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                COT360°
              </text>
              <defs>
                <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#e8e8e8', stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#b0b0b0', stopOpacity: 1 }} />
                  <stop offset="75%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#e8e8e8', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <div className="logo-glow"></div>
          </div>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <a 
                href={link.path} 
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          {/* Lanyard Style Theme Toggle */}
          <div className="lanyard-toggle">
            <button 
              className="lanyard-button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <div className="lanyard-card">
                <div className="lanyard-inner">
                  <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
                </div>
              </div>
              <div className="lanyard-band"></div>
            </button>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-primary navbar-cta">Start a Project</a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Gooey effect separator */}
      <div className="gooey-separator"></div>
    </nav>
  );
};

export default Navbar;