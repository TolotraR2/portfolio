import { SKILLS } from '../data';
import { Server, Network, Cloud, Shield, Database, Code2, Rocket } from 'lucide-react';

const iconMap = {
  Server,
  Network,
  Cloud,
  Shield,
  Database,
  Code2,
  Rocket
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-label">Compétences</div>
        <h2>
          Compétences <span className="highlight">techniques</span>
        </h2>
      </div>

      <div className="skills-grid skills-grid-7">
        {SKILLS.map((cat) => {
          const IconComponent = iconMap[cat.icon];
          return (
            <div key={cat.cat} className="skill-category">
              <div className="skill-header">
                {IconComponent && <IconComponent className="skill-icon-svg" size={20} />}
                <h4>{cat.cat}</h4>
              </div>
              <div className="skill-tags">
                {cat.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
