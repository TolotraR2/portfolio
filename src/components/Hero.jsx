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

        <p className="hero-subtitle">
          Administrateur Systèmes & Réseaux
        </p>
        <p className="hero-subtitle-line">
          Infrastructure IT • Réseaux • Développement
        </p>

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
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Technologies maîtrisées</span>
          </div>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-area">
          <div className="orange-glow" />
          <div className="portrait-radial" />
          <div className="portrait-arcs">
            <div className="arc arc-1" />
            <div className="arc arc-2" />
            <div className="arc arc-3" />
          </div>
          <div className="portrait-lines">
            <div className="p-line p-line-1" />
            <div className="p-line p-line-2" />
            <div className="p-line p-line-3" />
          </div>
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
