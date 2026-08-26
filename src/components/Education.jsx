import { EDUCATION, LANGUAGES, QUALITIES } from '../data';

export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <div className="section-label">Formation</div>
        <h2>
          Éducation & <span className="highlight">Qualités</span>
        </h2>
      </div>

      <div className="education-layout">
        <div className="education-list">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className={`education-item${edu.featured ? ' education-featured' : ''}`}>
              <span className="education-year">{edu.year}</span>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                {edu.specialty && <p className="education-specialty">{edu.specialty}</p>}
                <p className="education-school">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-sidebar">
          <div className="card">
            <h3>Langues</h3>
            {LANGUAGES.map(lang => (
              <div key={lang.name} className="lang-row">
                <strong>{lang.name}</strong>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Qualités</h3>
            {QUALITIES.map((quality, i) => (
              <div key={i} className="quality-row">
                <span className="quality-check">✓</span>
                <span>{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
