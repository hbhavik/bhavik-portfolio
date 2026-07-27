import React from 'react';
import { Mail, ArrowDown, MapPin, Briefcase, Download, Copy, CheckCircle2, Globe, Code2 } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../../public/Bhavik_Hadiyal_Resume.pdf';

const Hero = ({ onShowToast }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    if (onShowToast) {
      onShowToast('Email address copied to clipboard!');
    }
  };

  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Intro */}
          <div>
            {/* Minimal Role Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '50px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                color: '#60a5fa',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                }}
              />
              Frontend & WordPress Developer
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.18,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Building fast, responsive websites & custom WordPress solutions.
            </h1>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.02rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              Hi, I'm <strong>Bhavik Hadiyal</strong>. Frontend and WordPress Developer with 2 years of experience at Codersh Web Services in Ahmedabad. I specialize in building responsive React frontends, custom ACF/CPT WordPress themes, WooCommerce stores, and Headless CMS websites.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <button onClick={handleDownloadResume} className="btn btn-outline" title="Print/Save Resume">
                <Download size={16} />
                <span>Resume</span>
              </button>

              <button onClick={handleCopyEmail} className="btn btn-outline" title="Copy Email">
                <Copy size={16} />
                <span>Copy Email</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.75rem 0.85rem' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            {/* Practical Meta Info */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={15} style={{ color: 'var(--accent)' }} />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Briefcase size={15} style={{ color: 'var(--primary)' }} />
                <span>Codersh Web Services</span>
              </div>
            </div>
          </div>

          {/* Right Clean Developer Profile Showcase */}
          <div>
            <div className="card" style={{ padding: '2rem' }}>
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                    }}
                  >
                    BH
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.15rem' }}>
                      {personalInfo.name}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      Frontend & WordPress Developer
                    </div>
                  </div>
                </div>

                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                  Available
                </span>
              </div>

              {/* Skills Breakdown */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                  }}
                >
                  Frontend Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  <span className="badge badge-blue">HTML5 & CSS3</span>
                  <span className="badge badge-blue">JavaScript (ES6+)</span>
                  <span className="badge badge-blue">React.js</span>
                  <span className="badge badge-blue">Next.js</span>
                  <span className="badge badge-blue">Bootstrap</span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                  }}
                >
                  WordPress Ecosystem
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span className="badge badge-green">WordPress CMS</span>
                  <span className="badge badge-green">ACF & CPT</span>
                  <span className="badge badge-green">Elementor</span>
                  <span className="badge badge-green">WooCommerce</span>
                  <span className="badge badge-green">Headless WP</span>
                </div>
              </div>

              {/* Stats Summary */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.65rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>2 Years</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Experience</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)' }}>GTU</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>B.E. Computer</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8' }}>15+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Websites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
