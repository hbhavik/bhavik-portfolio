import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/resumeData';

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Briefcase size={14} /> Career History
          </div>
          <h2 className="section-title">
            Professional Work Experience
          </h2>
          <p className="section-subtitle">
            Hands-on work experience developing responsive websites, custom WordPress themes, and modern frontend interfaces.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp) => (
            <div key={exp.company} className="card" style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary)' }}>
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '4px',
                    }}
                  >
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                {exp.highlights.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      marginBottom: '0.75rem',
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="badge badge-blue">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
