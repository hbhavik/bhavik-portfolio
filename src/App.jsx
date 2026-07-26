import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle } from 'lucide-react';

function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    // Scroll Reveal Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Target elements to animate on scroll
    const revealTargets = document.querySelectorAll('section, .card, .section-title, .section-subtitle');
    revealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      revealTargets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero onShowToast={showToast} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact onShowToast={showToast} />
      </main>
      <Footer />

      {/* Interactive Toast Alert */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={18} style={{ color: 'var(--accent)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
