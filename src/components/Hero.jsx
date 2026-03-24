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
          Consultant IT Junior • Madagascar
        </div>
        <h1 className="hero-title">
          RAHARIJAONA <span className="hero-name">TOLOJANAHARY</span>
        </h1>
        <p className="hero-subtitle">
          Infrastructure IT & Solutions Numériques
        </p>
        <p className="hero-desc">
          Passionné par les systèmes et réseaux, je conçois des infrastructures robustes 
          et développe des solutions web performantes pour transformer vos idées en réalité.
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
            <span className="stat-number">4+</span>
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Expériences</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Curiosité</span>
          </div>
        </div>
      </div>
    </section>
  );
}
