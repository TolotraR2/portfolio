import { useState, useEffect } from 'react';

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Expériences', id: 'experience' },
    { label: 'Réalisations', id: 'achievements' },
    { label: 'Éducation', id: 'education' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <div className="nav-logo">
          Tiana<span>.Dev</span>
        </div>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href="#" onClick={(e) => { e.preventDefault(); scroll(l.id); }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scroll('contact')}>
          <span className="nav-cta-dot" />
          Disponible
        </button>
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              onClick={(e) => { e.preventDefault(); scroll(l.id); }}
            >
              {l.label}
            </a>
          ))}
          <button className="mobile-nav-cta" onClick={() => scroll('contact')}>
            <span className="nav-cta-dot" />
            Disponible
          </button>
        </div>
      )}
    </>
  );
}
