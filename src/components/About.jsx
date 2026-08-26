import { Monitor, Cloud, Code2, Wrench, Shield, Globe } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: Shield,
      title: "Administration Systèmes & Réseaux",
      sub: "Windows Server, Active Directory, Entra ID"
    },
    {
      icon: Cloud,
      title: "Microsoft 365",
      sub: "Exchange Online, Intune, Teams"
    },
    {
      icon: Globe,
      title: "Infrastructure Réseau",
      sub: "TCP/IP, VLAN, Wi-Fi, Ubiquiti UniFi"
    },
    {
      icon: Code2,
      title: "Développement",
      sub: "React, Next.js, Node.js, Django"
    },
    {
      icon: Wrench,
      title: "Support IT",
      sub: "Installation, maintenance, assistance"
    },
    {
      icon: Monitor,
      title: "Virtualisation",
      sub: "VMware, Proxmox, Docker"
    },
  ];

  return (
    <section id="about">
      <div className="section-header">
        <div className="section-label">À propos</div>
        <h2>
          À propos de <span className="highlight">moi</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Administrateur Systèmes & Réseaux de formation, je m'intéresse à l'administration
            des infrastructures informatiques, aux réseaux, au support IT et au développement
            de solutions numériques.
          </p>
          <p>
            Ma double compétence en infrastructure et en développement me permet également de
            concevoir des outils adaptés aux besoins des utilisateurs et des entreprises.
          </p>
          <p>
            Je suis spécialisé dans :
          </p>
          <ul className="about-specializations">
            <li>Administration systèmes & réseaux</li>
            <li>Microsoft 365, Entra ID & Intune</li>
            <li>Infrastructure réseau & support IT</li>
            <li>Cybersécurité & bases de données</li>
            <li>Développement et déploiement de solutions numériques</li>
          </ul>
        </div>
        <div className="about-info">
          {items.map(item => {
            const IconComp = item.icon;
            return (
            <div key={item.title} className="info-item">
              <div className="info-icon"><IconComp size={22} className="about-icon" /></div>
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
