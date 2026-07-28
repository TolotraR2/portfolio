import { Monitor, Cloud, Code2, Wrench, Shield, Globe } from 'lucide-react';

export default function About() {
  const items = [
    { 
      icon: Shield, 
      title: "Administration Systèmes & Réseaux", 
      sub: "Microsoft 365, Entra ID, Intune" 
    },
    { 
      icon: Cloud, 
      title: "Cloud Microsoft 365", 
      sub: "Exchange Online, SharePoint, Teams" 
    },
    { 
      icon: Globe, 
      title: "Infrastructure Réseau", 
      sub: "Fortinet FortiGate, Ubiquiti UniFi" 
    },
    { 
      icon: Code2, 
      title: "Développement Full Stack", 
      sub: "React, Next.js, NestJS, Node.js" 
    },
    { 
      icon: Wrench, 
      title: "Support IT", 
      sub: "Installation, maintenance, assistance" 
    },
    { 
      icon: Monitor, 
      title: "Automatisation", 
      sub: "Power Automate, Power BI, Forms" 
    },
  ];

  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">À propos</div>
        <h2>
          Administrateur Systèmes<br />
          <span className="highlight">& Développeur Full Stack</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Administrateur Systèmes & Réseaux chez <strong style={{ color: 'var(--primary)' }}>AFG Assurances</strong>, 
            je gère l'infrastructure IT complète : Microsoft 365, Entra ID, Intune, 
            le réseau Fortinet FortiGate et les accès Ubiquiti UniFi.
          </p>
          <p>
            Ma double compétence en 
            <strong style={{ color: 'var(--primary)' }}> administration systèmes & réseaux</strong> et en 
            <strong style={{ color: 'var(--primary)' }}> développement web</strong> me permet d'aborder les projets 
            informatiques avec une vision globale, de l'infrastructure réseau jusqu'aux applications métier.
          </p>
          <p>
            Je suis spécialisé dans :
          </p>
          <ul className="about-specializations">
            <li>Administration Systèmes & Réseaux</li>
            <li>Cloud Microsoft 365 & Entra ID</li>
            <li>Microsoft Intune & Infrastructure réseau</li>
            <li>Cybersécurité & Développement Full Stack</li>
            <li>Automatisation des processus métier</li>
          </ul>
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
