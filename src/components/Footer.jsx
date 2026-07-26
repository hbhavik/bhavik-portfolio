import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#090c12',
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Brand & Subtitle */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.3rem' }}>
              Bhavik Hadiyal
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Frontend & WordPress Developer · Ahmedabad, Gujarat
            </p>
          </div>

          {/* Links & Scroll Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
              }}
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
              }}
              title="Send Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '6px',
                background: 'var(--primary)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Bhavik Hadiyal. All rights reserved.
          </div>
          <div>
            Built with React.js & CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
