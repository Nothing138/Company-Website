import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/About.css';
import { useTheme } from '../context/ThemeContext';

const TimelineItem = ({ title, description }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="card value-card">
    <div className="value-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const TeamMember = ({ icon, role, description, specialties }) => (
  <div className="card team-card">
    <div className="team-avatar">{icon}</div>
    <h3>{role}</h3>
    <p className="team-description">{description}</p>
    <p className="team-specialties">{specialties}</p>
  </div>
);

const WhyChooseItem = ({ icon, title, description }) => (
  <div className="why-choose-item">
    <div className="why-icon">{icon}</div>
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default function About() {
  const { darkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valuesData = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new ideas, technologies, and approaches to deliver cutting-edge solutions that push boundaries.'
    },
    {
      icon: '✨',
      title: 'Quality',
      description: 'Excellence in every line of code, every design decision, and every interaction with our clients.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'We build relationships based on transparency, reliability, and consistent delivery of results.'
    },
    {
      icon: '🎯',
      title: 'Problem Solving',
      description: 'We focus on understanding challenges deeply and crafting solutions that actually work.'
    },
    {
      icon: '📈',
      title: 'Scalability',
      description: 'We build solutions that grow with you, whether you\'re a startup or an enterprise.'
    },
    {
      icon: '🔄',
      title: 'Long-term Support',
      description: 'We stick with you beyond launch, providing continuous improvements and technical support.'
    }
  ];

  const approachSteps = [
    {
      title: 'Understand',
      description: 'We dive deep into your business, goals, challenges, and vision. This foundation is crucial for building the right solution.'
    },
    {
      title: 'Strategize',
      description: 'We create a comprehensive plan, roadmap, and technology strategy tailored to your unique needs.'
    },
    {
      title: 'Design',
      description: 'We design user-centric, beautiful interfaces and systems that delight your users and solve real problems.'
    },
    {
      title: 'Develop',
      description: 'Our skilled developers build scalable, secure, and performant solutions using modern technologies.'
    },
    {
      title: 'Test & QA',
      description: 'Rigorous testing ensures quality, reliability, security, and performance before launch.'
    },
    {
      title: 'Launch',
      description: 'We deploy your solution smoothly and efficiently with complete support throughout the process.'
    },
    {
      title: 'Support & Monitor',
      description: 'We provide ongoing technical support, maintenance, and monitoring to keep your solution running perfectly.'
    },
    {
      title: 'Improve & Scale',
      description: 'We continuously improve, optimize, and scale your solution based on data, feedback, and growth.'
    }
  ];

  const teamData = [
    {
      icon: '👨‍💼',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation and company growth with strategic direction and vision.',
      specialties: 'Technology • Strategy • Leadership'
    },
    {
      icon: '👨‍💻',
      role: 'Lead Software Engineer',
      description: 'Expert developer building scalable and robust software solutions with cutting-edge tech.',
      specialties: 'Full-stack • Architecture • DevOps'
    },
    {
      icon: '🎨',
      role: 'UI/UX Designer',
      description: 'Creative designer crafting beautiful and user-friendly interfaces that users love.',
      specialties: 'Design • UX • Product'
    },
    {
      icon: '🤖',
      role: 'AI/ML Engineer',
      description: 'Data scientist specializing in AI and machine learning solutions for automation.',
      specialties: 'AI • Machine Learning • Data'
    },
    {
      icon: '📋',
      role: 'Project Manager',
      description: 'Organized coordinator ensuring projects are delivered on time and within scope.',
      specialties: 'Agile • Timeline • Communication'
    },
    {
      icon: '🎯',
      role: 'Technical Consultant',
      description: 'Expert advisor helping clients choose the right technology and strategy for growth.',
      specialties: 'Consulting • Architecture • Tech'
    }
  ];

  const whyChooseData = [
    {
      icon: '🎯',
      title: 'Focused on Your Goals',
      description: 'We align everything we do with your business objectives and success metrics.'
    },
    {
      icon: '💼',
      title: 'Professional Expertise',
      description: 'Years of experience across diverse industries and technology stacks.'
    },
    {
      icon: '🔒',
      title: 'Transparent & Reliable',
      description: 'Clear communication, honest timelines, and consistent delivery throughout the project.'
    },
    {
      icon: '📈',
      title: 'Long-term Partnership',
      description: 'We stay with you beyond launch, providing support, improvements, and scaling assistance.'
    },
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Agile methodology and streamlined processes to deliver results quickly without compromising quality.'
    },
    {
      icon: '🌐',
      title: 'Full-Cycle Support',
      description: 'From strategy and design to development, testing, launch, and ongoing support.'
    }
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar scrolled={scrolled} />

      {/* ====== ABOUT HERO ====== */}
      <section className="hero about-hero">
        <div className="container">
          <div className="hero-content" style={{ gap: '80px' }}>
            <div className="hero-text">
              <h1>Building Technology That Solves Real Problems</h1>
              <p className="hero-subheadline">
                COT360° is built for people and businesses who need reliable, scalable, and intelligent digital solutions. We partner with you from idea to implementation and beyond.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Work With Us</button>
                <button className="btn btn-secondary">Schedule Consultation</button>
              </div>
            </div>
            <div className="hero-visual about-visual">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)',
                borderRadius: '20px',
                border: '2px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🚀</div>
                <div style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Building the Future</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== COMPANY STORY ====== */}
      <section className="story-section">
        <div className="container">
          <div className="grid-2">
            <div className="story-content">
              <h2>Our Story</h2>
              <p style={{ fontSize: '18px', marginTop: '24px', lineHeight: '1.8' }}>
                COT360° stands for <strong>Code of Technology 360°</strong>. It represents our belief that every technology problem should be solved from every angle: strategy, design, development, performance, automation, security, and support.
              </p>
              <p style={{ marginTop: '28px', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
                We were founded with a simple mission: to help individuals, startups, and businesses navigate the complex world of technology and build solutions that truly work. Whether you're building your first software product or transforming your entire business, we're here to guide you through every step.
              </p>
              <p style={{ marginTop: '28px', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
                Our approach combines strategic thinking, creative design, technical excellence, and continuous support. We don't just build software—we build partnerships.
              </p>
            </div>
            <div className="story-visual">
              <div style={{
                width: '100%',
                height: '350px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(0, 194, 168, 0.15) 100%)',
                borderRadius: '24px',
                border: '2px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '64px', marginBottom: '12px', fontWeight: '700' }}>360°</div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>Complete Coverage</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '8px' }}>From Strategy to Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MISSION & VISION ====== */}
      <section className="mission-section">
        <div className="container">
          <div className="grid-2">
            <div className="card mission-card">
              <h3 style={{ color: 'var(--color-accent-cyan)', marginBottom: '24px' }}>🎯 Our Mission</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '16px' }}>
                To solve real-world technology problems by building smart, scalable, and user-friendly digital solutions that help businesses grow and succeed.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                We believe in understanding your unique challenges and creating technology that genuinely solves them.
              </p>
            </div>

            <div className="card mission-card">
              <h3 style={{ color: 'var(--color-accent-blue)', marginBottom: '24px' }}>🌟 Our Vision</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '16px' }}>
                To become a trusted technology partner known for innovation, quality, reliability, and complete 360° digital solutions.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                We aim to empower businesses to compete and thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== VALUES GRID ====== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>What drives everything we do at COT360°</p>
          </div>

          <div className="grid-3">
            {valuesData.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== APPROACH TIMELINE ====== */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <p>A systematic process from understanding to continuous improvement</p>
          </div>

          <div className="timeline">
            {approachSteps.map((step, index) => (
              <TimelineItem key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== TEAM SECTION ====== */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Talented professionals dedicated to building amazing technology solutions</p>
          </div>

          <div className="grid-3">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose COT360°</h2>
            <p>What sets us apart from other technology companies</p>
          </div>

          <div className="grid-2">
            {whyChooseData.map((item, index) => (
              <WhyChooseItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="cta-section">
        <div className="container">
          <h2 style={{ marginBottom: '20px' }}>Ready to Transform Your Idea into a Digital Product?</h2>
          <p style={{ fontSize: '18px', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            Let's discuss your project, challenges, and goals. We're here to help you build something amazing.
          </p>
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary">Work With Us</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}