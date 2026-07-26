import React, { useState } from 'react';
import { FolderGit2, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/resumeData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React.js & WordPress', 'Headless WordPress', 'WooCommerce', 'Custom WordPress'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <FolderGit2 size={14} /> Projects & Case Studies
          </div>
          <h2 className="section-title">
            Featured Web Projects
          </h2>
          <p className="section-subtitle">
            Demonstrating hands-on project experience in React.js, Next.js, Headless WordPress, WooCommerce, and ACF/CPT dynamic websites.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeCategory === cat ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-surface)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge badge-green">{project.badge}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{project.category}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.65rem' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '1.25rem' }}>
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge badge-blue">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                >
                  <span>View Project Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="card"
            style={{
              maxWidth: '600px',
              width: '100%',
              padding: '2rem',
              background: 'var(--bg-surface)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: '#fff',
                borderRadius: '4px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
              {selectedProject.badge}
            </span>

            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.85rem' }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Project Features & Deliverables
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
              {selectedProject.features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.92rem',
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Technologies Used
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
              {selectedProject.techStack.map((tech) => (
                <span key={tech} className="badge badge-blue">
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Close Project Modal
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
