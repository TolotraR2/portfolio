import { useEffect } from 'react';
import { SKILLS } from '../data';
import { Monitor, Network, Rocket, Lock, Code2, Zap, Database, Wrench } from 'lucide-react';

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-fill');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const w = e.target.getAttribute('data-width');
          e.target.style.width = w + '%';
        }
      });
    }, { threshold: 0.1 });
    bars.forEach(b => io.observe(b));
    return () => io.disconnect();
  }, []);

  const iconMap = {
    Monitor,
    Network,
    Rocket,
    Lock,
    Code2,
    Zap,
    Database,
    Wrench
  };

  return (
    <section id="skills">
      <div className="section-header">
        <div className="section-label">Compétences</div>
        <h2>
          Stack <span className="highlight">technique</span>
        </h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map((cat, ci) => {
          const IconComponent = iconMap[cat.icon];
          return (
            <div key={cat.cat} className="skill-category">
              <div className="skill-header">
                {IconComponent && <IconComponent className="skill-icon-svg" size={28} />}
                <h3>{cat.cat}</h3>
              </div>
              <div className="skill-list">
                {cat.items.map(item => (
                  <div key={item.name} className="skill-item">
                    <div className="skill-top">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-percent">{item.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" data-width={item.pct} style={{ width: '0%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
