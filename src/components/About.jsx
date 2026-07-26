import React from 'react';
import { User, Layout, Globe, Layers, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { professionalSummary, coreCapabilities } from '../data/resumeData';

const iconMap = {
  Layout: Layout,
  Globe: Globe,
  Layers: Layers,
  ShoppingCart: ShoppingCart
};

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <User size={14} /> About Me
          </div>
          <h2 className="section-title">
            Professional Summary & Capabilities
          </h2>
          <p className="section-subtitle">
            Frontend and WordPress Developer specialized in building responsive, user-friendly, and content-driven websites.
          </p>
        </div>

        {/* Summary Card */}
        <div
          className="card"
          style={{
            marginBottom: '3rem',
            borderLeft: '4px solid var(--primary)',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem' }}>
            Professional Summary
          </h3>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.02rem',
              lineHeight: 1.8,
            }}
          >
            {professionalSummary}
          </p>
        </div>

        {/* Services Grid */}
        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            marginBottom: '1.75rem',
            color: '#ffffff',
          }}
        >
          Key Technical Services & Solutions
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {coreCapabilities.map((cap) => {
            const IconComponent = iconMap[cap.icon] || Layout;
            return (
              <div key={cap.id} className="card">
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                    marginBottom: '1rem',
                  }}
                >
                  <IconComponent size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.6rem' }}>
                  {cap.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
