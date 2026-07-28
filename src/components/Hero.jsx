export default function Hero() {
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
          Administrateur Systèmes & Réseaux • AFG Assurances
        </div>
        <h1 className="hero-title">
          RAHARIJAONA <span className="hero-name">TOLOJANAHARY</span>
        </h1>
        <p className="hero-subtitle">
          Infrastructure IT & Développement Full Stack
        </p>
        <p className="hero-desc">
          Administrateur Systèmes & Réseaux passionné, je gère les infrastructures cloud 
          Microsoft 365 et développe des solutions web performantes pour transformer 
          les processus métier en outils digitaux.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
            Découvrir mes projets
          </a>
          <a className="btn-secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Me contacter
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
            <span className="stat-number">35+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
