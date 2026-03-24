import { PROJECTS } from '../data';
import { Lock, Package, Ticket, FileText, CheckCircle } from 'lucide-react';

const iconMap = {
  Lock,
  Package,
  Ticket,
  FileText,
  CheckCircle
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-label">Projets</div>
        <h2>
          Réalisations <span className="highlight">sélectionnées</span>
        </h2>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => {
          const IconComponent = iconMap[p.icon];
          return (
            <div key={p.name} className="project-card">
              <div className="project-image" style={{ background: p.color }}>
                {IconComponent && <IconComponent size={48} className="project-icon" />}
              </div>
              <div className="project-content">
                <span className="project-category">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-techs">
                  {p.techs.map(t => (
                    <span key={t} className="project-tech">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
