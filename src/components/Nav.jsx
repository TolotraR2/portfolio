import { useState, useEffect } from 'react';

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['À propos', 'Compétences', 'Expériences', 'Éducation', 'Projets', 'Contact'];
  const ids = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{ 
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.06)'
      }}>
        <div className="nav-logo">
          Tiana<span>.Dev</span>
        </div>
        <ul className="nav-links">
          {links.map((l, i) => (
            <li key={l}>
              <a href="#" onClick={(e) => { e.preventDefault(); scroll(ids[i]); }}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scroll('contact')}>
          Disponible
        </button>
        <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={(e) => { e.preventDefault(); scroll(ids[i]); }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
