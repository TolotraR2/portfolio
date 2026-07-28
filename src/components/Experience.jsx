import { EXPS } from '../data';
import { Building2, Shield, Code, Server, ShieldCheck } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Shield: Shield,
  ShieldCheck: ShieldCheck,
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
            <div key={exp.company + exp.role} className={`experience-item${exp.details ? ' experience-featured' : ''}`}>
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
              {exp.details && (
                <div className="experience-details">
                  {exp.details.map((section) => (
                    <div key={section.category} className="experience-detail-section">
                      <h4 className="experience-detail-category">{section.category}</h4>
                      <ul className="experience-detail-list">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
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
