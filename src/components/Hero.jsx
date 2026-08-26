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
            <span className="stat-number">40+</span>
            <span className="stat-label">Technologies & outils</span>
          </div>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-scene">

          {/* z-index: 1 — Halo layers */}
          <div className="halo-layer halo-layer-1" />
          <div className="halo-layer halo-layer-2" />
          <div className="halo-layer halo-layer-3" />

          {/* z-index: 2 — Tech background elements */}
          <svg className="portrait-tech-bg" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid dots */}
            {Array.from({ length: 12 }, (_, row) =>
              Array.from({ length: 10 }, (_, col) => (
                <circle
                  key={`dot-${row}-${col}`}
                  cx={30 + col * 60}
                  cy={30 + row * 60}
                  r="0.8"
                  fill="#ffffff"
                  opacity="0.04"
                />
              ))
            )}
            {/* Circuit traces */}
            <line x1="80" y1="120" x2="180" y2="120" stroke="#e55a3a" strokeWidth="0.4" opacity="0.08" />
            <line x1="180" y1="120" x2="200" y2="160" stroke="#e55a3a" strokeWidth="0.4" opacity="0.08" />
            <circle cx="80" cy="120" r="2" fill="#e55a3a" opacity="0.1" />
            <circle cx="200" cy="160" r="1.5" fill="#e55a3a" opacity="0.08" />
            <line x1="420" y1="100" x2="520" y2="100" stroke="#e55a3a" strokeWidth="0.4" opacity="0.08" />
            <line x1="520" y1="100" x2="540" y2="140" stroke="#e55a3a" strokeWidth="0.4" opacity="0.08" />
            <circle cx="420" cy="100" r="2" fill="#e55a3a" opacity="0.1" />
            <circle cx="540" cy="140" r="1.5" fill="#e55a3a" opacity="0.08" />
            <line x1="60" y1="500" x2="140" y2="500" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" />
            <line x1="140" y1="500" x2="160" y2="540" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" />
            <circle cx="60" cy="500" r="1.5" fill="#e55a3a" opacity="0.08" />
            <line x1="460" y1="520" x2="540" y2="520" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" />
            <line x1="540" y1="520" x2="560" y2="480" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" />
            <circle cx="460" cy="520" r="1.5" fill="#e55a3a" opacity="0.08" />
            {/* Geometric accents */}
            <rect x="100" y="300" width="6" height="6" rx="1" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" fill="none" />
            <rect x="500" y="280" width="6" height="6" rx="1" stroke="#e55a3a" strokeWidth="0.4" opacity="0.06" fill="none" />
            <polygon points="300,40 304,48 296,48" fill="#e55a3a" opacity="0.05" />
            <polygon points="300,660 304,652 296,652" fill="#e55a3a" opacity="0.05" />
            {/* Connection lines — badges to circle */}
            <line x1="300" y1="56" x2="300" y2="72" stroke="#e55a3a" strokeWidth="0.5" opacity="0.12" />
            <line x1="156" y1="106" x2="185" y2="98" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="444" y1="106" x2="415" y2="98" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="55" y1="280" x2="68" y2="310" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="55" y1="420" x2="78" y2="430" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="545" y1="280" x2="532" y2="310" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="545" y1="420" x2="522" y2="430" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="132" y1="602" x2="170" y2="590" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="468" y1="602" x2="430" y2="590" stroke="#e55a3a" strokeWidth="0.5" opacity="0.1" />
            <line x1="300" y1="642" x2="300" y2="625" stroke="#e55a3a" strokeWidth="0.5" opacity="0.12" />
            {/* Small nodes at line endpoints */}
            <circle cx="300" cy="72" r="1.5" fill="#e55a3a" opacity="0.15" />
            <circle cx="185" cy="90" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="415" cy="90" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="68" cy="310" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="78" cy="430" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="532" cy="310" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="522" cy="430" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="170" cy="590" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="430" cy="590" r="1.2" fill="#e55a3a" opacity="0.12" />
            <circle cx="300" cy="625" r="1.5" fill="#e55a3a" opacity="0.15" />
          </svg>

          {/* z-index: 3 — Particles */}
          <div className="portrait-particles">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className={`particle particle-${i}`} />
            ))}
          </div>

          {/* z-index: 4 — SVG Arcs */}
          <svg className="portrait-arcs" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" stroke="#e55a3a" strokeOpacity="0.12" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="215" stroke="#e55a3a" strokeOpacity="0.04" strokeWidth="0.3" strokeDasharray="1 16" />
            <circle cx="250" cy="250" r="230" stroke="#e55a3a" strokeOpacity="0.06" strokeWidth="0.6" strokeDasharray="6 8" />
            <circle cx="250" cy="250" r="245" stroke="#e55a3a" strokeOpacity="0.03" strokeWidth="0.3" />
            <circle cx="250" cy="250" r="260" stroke="#e55a3a" strokeOpacity="0.04" strokeWidth="0.5" />
            <path d="M 250 50 A 200 200 0 0 1 450 250" stroke="#e55a3a" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round" className="arc-glow-1" />
            <path d="M 450 250 A 200 200 0 0 1 250 450" stroke="#ff8a6f" strokeOpacity="0.15" strokeWidth="0.8" strokeLinecap="round" className="arc-glow-2" />
            <path d="M 250 450 A 200 200 0 0 1 50 250" stroke="#e55a3a" strokeOpacity="0.08" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 50 250 A 200 200 0 0 1 250 50" stroke="#ff8a6f" strokeOpacity="0.06" strokeWidth="0.4" strokeLinecap="round" />
            <path d="M 100 120 A 220 220 0 0 1 400 120" stroke="#e55a3a" strokeOpacity="0.1" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 80 350 A 240 240 0 0 0 420 350" stroke="#e55a3a" strokeOpacity="0.06" strokeWidth="0.5" strokeLinecap="round" />
            <circle cx="250" cy="250" r="170" stroke="#e55a3a" strokeOpacity="0.08" strokeWidth="0.4" strokeDasharray="2 12" />
          </svg>

          {/* z-index: 5 — Floating badges (crown layout) */}
          {/* Top zone */}
          <div className="floating-badge badge-main badge-b3">
            <img src="https://cdn.simpleicons.org/linux/FCC624" alt="" className="badge-icon-img" />
            Linux
          </div>
          <div className="floating-badge badge-main badge-b1">
            <img src="/icone/windows.png" alt="" className="badge-icon-img" />
            Windows
          </div>
          <div className="floating-badge badge-main badge-b2">
            <img src="/icone/microsoft.png" alt="" className="badge-icon-img" />
            Microsoft 365
          </div>
          {/* Left side */}
          <div className="floating-badge badge-main badge-b4">
            <img src="/icone/reseau.svg" alt="" className="badge-icon-img" />
            Réseaux
          </div>
          <div className="floating-badge badge-main badge-b6">
            <img src="/icone/pfsense.svg" alt="" className="badge-icon-img" />
            pfSense
          </div>
          {/* Right side */}
          <div className="floating-badge badge-main badge-b5">
            <img src="https://cdn.simpleicons.org/github/ffffff" alt="" className="badge-icon-img" />
            GitHub
          </div>
          <div className="floating-badge badge-main badge-b7">
            <img src="https://cdn.simpleicons.org/nextcloud/0082C9" alt="" className="badge-icon-img" />
            Nextcloud
          </div>
          {/* Bottom zone */}
          <div className="floating-badge badge-main badge-b8">
            <img src="https://cdn.simpleicons.org/git/F05032" alt="" className="badge-icon-img" />
            Git
          </div>
          <div className="floating-badge badge-main badge-b9">
            <img src="https://cdn.simpleicons.org/debian/A80030" alt="" className="badge-icon-img" />
            Serveurs
          </div>
          <div className="floating-badge badge-main badge-b10">
            <img src="https://cdn.simpleicons.org/norton/FFC300" alt="" className="badge-icon-img" />
            Cybersécurité
          </div>

          {/* z-index: 6 — Rim light (blurred copy behind photo) */}
          <img
            src="/profil.png"
            alt=""
            className="hero-photo-rim"
            aria-hidden="true"
          />

          {/* z-index: 7 — Main photo */}
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
