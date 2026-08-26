export default function Hero() {
  const cvHref = `${import.meta.env.BASE_URL}CV-Odilon_RAHARIJAONA-IT-Support.pdf`;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-glow2" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Administrateur Systèmes & Réseaux
        </div>

        <h1 className="hero-title">
          RAHARIJAONA
          <span className="hero-name">TOLOJANAHARY</span>
        </h1>

        <p className="hero-subtitle">Administrateur Systèmes & Réseaux</p>
        <p className="hero-subtitle-line">Infrastructure IT & Développement</p>

        <p className="hero-desc">
          Administrateur Systèmes & Réseaux avec une expérience pratique en infrastructure IT,
          support informatique, réseaux et environnements Microsoft. Je développe également des
          solutions numériques et des applications adaptées à des besoins concrets.
        </p>

        <div className="hero-ctas">
          <a className="btn-primary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            Voir mes projets
          </a>
          <a className="btn-secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Me contacter
          </a>
          <a className="btn-ghost" href={cvHref} download>
            Télécharger mon CV
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Expériences</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projets</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-scene">

          {/* z-index: 1 — Halo layers */}
          <div className="halo-layer halo-layer-1" />
          <div className="halo-layer halo-layer-2" />

          {/* z-index: 2 — Particles */}
          <div className="portrait-particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className={`particle particle-${i}`} />
            ))}
          </div>

          {/* z-index: 3 — SVG Arcs */}
          <svg className="portrait-arcs" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" stroke="#e55a3a" strokeOpacity="0.12" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="230" stroke="#e55a3a" strokeOpacity="0.06" strokeWidth="0.6" strokeDasharray="6 8" />
            <circle cx="250" cy="250" r="260" stroke="#e55a3a" strokeOpacity="0.04" strokeWidth="0.5" />
            <path d="M 250 50 A 200 200 0 0 1 450 250" stroke="#e55a3a" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" className="arc-glow-1" />
            <path d="M 450 250 A 200 200 0 0 1 250 450" stroke="#ff8a6f" strokeOpacity="0.15" strokeWidth="0.8" strokeLinecap="round" className="arc-glow-2" />
            <path d="M 100 120 A 220 220 0 0 1 400 120" stroke="#e55a3a" strokeOpacity="0.1" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 80 350 A 240 240 0 0 0 420 350" stroke="#e55a3a" strokeOpacity="0.06" strokeWidth="0.5" strokeLinecap="round" />
            <circle cx="250" cy="250" r="170" stroke="#e55a3a" strokeOpacity="0.08" strokeWidth="0.4" strokeDasharray="2 12" />
          </svg>

          {/* z-index: 4 — Floating badges */}
          <div className="floating-badge floating-badge-tl">
            <span className="badge-dot" />
            Windows
          </div>
          <div className="floating-badge floating-badge-tr">
            <span className="badge-dot" />
            Microsoft 365
          </div>
          <div className="floating-badge floating-badge-ml">
            <span className="badge-dot" />
            Réseaux
          </div>
          <div className="floating-badge floating-badge-mr">
            <span className="badge-dot" />
            Développement
          </div>

          {/* z-index: 5 — Rim light (blurred copy behind photo) */}
          <img
            src="/profil.png"
            alt=""
            className="hero-photo-rim"
            aria-hidden="true"
          />

          {/* z-index: 6 — Main photo */}
          <img
            src="/profil.png"
            alt="RAHARIJAONA Tolojanahary — Administrateur Systèmes & Réseaux"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
