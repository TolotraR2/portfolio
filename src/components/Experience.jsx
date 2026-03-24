import { EXPS } from '../data';
import { Building2, Shield, Code, Server } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Shield: Shield,
  Code: Code,
  Server: Server
};

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <div className="section-label">Expériences</div>
        <h2>
          Parcours <span className="highlight">professionnel</span>
        </h2>
      </div>
      <div className="experience-list">
        {EXPS.map((exp, i) => {
          const IconComponent = iconMap[exp.icon];
          return (
            <div key={exp.company} className="experience-item">
              <div className="experience-header">
                <div className="experience-info">
                  {IconComponent && <IconComponent className="experience-icon" size={24} />}
                  <div>
                    <h3>{exp.role}</h3>
                    <span className="experience-company">{exp.company}</span>
                  </div>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-desc">{exp.desc}</p>
              <div className="experience-tags">
                {exp.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
