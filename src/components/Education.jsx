import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData, additionalInfo } from '../data/resumeData';

const Education = () => {
  return (
    <section id="education" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <GraduationCap size={14} /> Academics & Information
          </div>
          <h2 className="section-title">
            Education & Knowledge
          </h2>
          <p className="section-subtitle">
            Academic computer engineering degree and key technical knowledge areas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {/* Education */}
          {educationData.map((edu) => (
            <div key={edu.degree} className="card">
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  background: 'rgba(59, 130, 246, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                  marginBottom: '1.25rem',
                }}
              >
                <GraduationCap size={22} />
              </div>

              <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>
                {edu.period}
              </span>

              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                {edu.degree}
              </h3>

              <div style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.2rem' }}>
                {edu.institution}
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                {edu.university}
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {edu.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Additional Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              Additional Experience & Tools
            </h3>

            {additionalInfo.map((info) => (
              <div key={info.title} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <BookOpen size={18} style={{ color: 'var(--primary)' }} />
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff' }}>{info.title}</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
