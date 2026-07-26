import React, { useState } from 'react';
import { Cpu, Code2, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillGroups = [
    {
      category: "Frontend Development",
      icon: Code2,
      description: "Building responsive, modern, and cross-browser web interfaces.",
      skills: [
        { name: "HTML5 & CSS3", desc: "Semantic HTML5, custom flexbox & grid layouts, responsive CSS3 styling." },
        { name: "JavaScript (ES6+)", desc: "Modern ES6+ syntax, DOM manipulation, async operations, API integration." },
        { name: "React.js", desc: "Reusable UI components, state management, custom hooks, dynamic rendering." },
        { name: "Next.js", desc: "Server-side rendering, SSG, page routes, Headless CMS integration." },
        { name: "Bootstrap", desc: "Fast responsive grid frameworks and utility-first UI styling." },
        { name: "Responsive Design", desc: "Mobile-first layouts, media queries, cross-device viewport optimization." }
      ]
    },
    {
      category: "WordPress & CMS",
      icon: Globe,
      description: "Custom WordPress themes, dynamic data modeling, and e-commerce stores.",
      skills: [
        { name: "WordPress CMS", desc: "Complete CMS setup, custom theme integration, site management." },
        { name: "Advanced Custom Fields (ACF)", desc: "Structured custom fields, repeater blocks, tailored admin editing." },
        { name: "Custom Post Types (CPT)", desc: "Custom data structures, custom taxonomies, dynamic query loops." },
        { name: "Elementor", desc: "Pixel-perfect business pages, landing layouts, custom widget overrides." },
        { name: "WooCommerce", desc: "Online store setup, product catalog management, cart & checkout UX." },
        { name: "Headless WordPress", desc: "Decoupled architecture using WP backend with React/Next.js frontend." }
      ]
    },
    {
      category: "APIs, Tools & Fundamentals",
      icon: Wrench,
      description: "Development tools, version control, and data connectivity.",
      skills: [
        { name: "REST API & WP REST API", desc: "Endpoint data fetching, JSON parsing, API integration." },
        { name: "Git & GitHub", desc: "Version control, repository management, code deployment." },
        { name: "VS Code", desc: "Primary code editor, debugging, extension configuration." },
        { name: "SQL Databases", desc: "Relational database concepts, SQL queries, CRUD operations." },
        { name: "Core Java & OOP", desc: "Object-oriented programming concepts, Java fundamentals." }
      ]
    }
  ];

  const categories = ['All', 'Frontend Development', 'WordPress & CMS', 'APIs, Tools & Fundamentals'];

  const filteredGroups = activeCategory === 'All'
    ? skillGroups
    : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Cpu size={14} /> Technical Competencies
          </div>
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my core web development skills, technologies, and practical capabilities.
          </p>
        </div>

        {/* Category Filter Tabs */}
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
                padding: '0.55rem 1.3rem',
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

        {/* Structured Skill Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredGroups.map((group) => {
            const CategoryIcon = group.icon;
            return (
              <div key={group.category} className="card" style={{ padding: '2rem' }}>
                {/* Group Title Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '6px',
                      background: 'rgba(59, 130, 246, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60a5fa',
                    }}
                  >
                    <CategoryIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', marginLeft: '3rem' }}>
                  {group.description}
                </p>

                {/* Skills Grid within Group */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        padding: '1rem 1.15rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                          {skill.name}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
