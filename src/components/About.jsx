import { Monitor, Cloud, Code2, Wrench, Database, Globe } from 'lucide-react';

export default function About() {
  const items = [
    { 
      icon: Monitor, 
      title: "Systèmes & Réseaux", 
      sub: "Linux, Windows Server, AD, TCP/IP" 
    },
    { 
      icon: Cloud, 
      title: "Virtualisation", 
      sub: "Proxmox, VMware, gestion VMs" 
    },
    { 
      icon: Code2, 
      title: "Développement Web", 
      sub: "React, Django, Node.js, REST API" 
    },
    { 
      icon: Wrench, 
      title: "Support IT", 
      sub: "Helpdesk, maintenance, ticketing" 
    },
    { 
      icon: Database, 
      title: "Bases de données", 
      sub: "PostgreSQL, SQLite, requêtes SQL" 
    },
    { 
      icon: Globe, 
      title: "Administration réseau", 
      sub: "DHCP, DNS, routage, switching" 
    },
  ];

  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">À propos</div>
        <h2>
          Profil <span className="highlight">polyvalent</span><br />
          & orienté solutions
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Consultant IT junior passionné par les technologies, je possède une double compétence en 
            <strong style={{ color: 'var(--primary)' }}> administration systèmes & réseaux</strong> et en 
            <strong style={{ color: 'var(--primary)' }}> développement web</strong>. Cette polyvalence me permet 
            d'aborder les projets informatiques avec une vision globale.
          </p>
          <p>
            Après plusieurs expériences en stage dans des environnements variés (entreprise privée, 
            institution publique, secteur assurantiel), j'ai acquis des bases solides en infrastructure IT 
            et en gestion de parc informatique, tout en développant des applications web fonctionnelles.
          </p>
          <p>
            Je suis actuellement <strong style={{ color: '#22c55e' }}>disponible pour des opportunités</strong> — 
            stage, alternance, ou poste junior — où je pourrais contribuer et continuer à progresser.
          </p>
        </div>
        <div className="about-info">
          {items.map(item => {
            const IconComp = item.icon;
            return (
            <div key={item.title} className="info-item">
              <div className="info-icon"><IconComp size={28} className="about-icon" /></div>
              <div className="info-content">
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
