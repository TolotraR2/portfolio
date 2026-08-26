import { ACHIEVEMENTS } from '../data';
import { Wifi, Cloud, Users, Printer, ClipboardCheck, FileCheck } from 'lucide-react';

const iconMap = {
  Wifi,
  Cloud,
  Users,
  Printer,
  ClipboardCheck,
  FileCheck
};

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-header">
        <div className="section-label">Réalisations</div>
        <h2>
          Réalisations <span className="highlight">professionnelles</span>
        </h2>
      </div>
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a) => {
          const IconComponent = iconMap[a.icon];
          return (
            <div key={a.title} className="achievement-card">
              <div className="achievement-icon-wrapper">
                {IconComponent && <IconComponent size={24} className="achievement-icon" />}
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
