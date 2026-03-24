import { EDUCATION, LANGUAGES, QUALITIES } from '../data';

export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <div className="section-label">Formation & Compétences Personnelles</div>
        <h2>
          Éducation & <span className="highlight">Qualités</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px' }}>
        {/* Education */}
        <div className="education-list">
        {EDUCATION.map((edu, i) => (
            <div key={edu.id} className="education-item">
              <span className="education-year">{edu.year}</span>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                {edu.specialty && <p className="education-specialty">{edu.specialty}</p>}
                <p className="education-school">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Qualities */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Languages */}
          <div className="card">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '20px', color: 'var(--text)' }}>Langues</h3>
            {LANGUAGES.map(lang => (
              <div key={lang.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                <strong style={{ color: 'var(--text2)' }}>{lang.name}</strong>
                <span style={{ color: 'var(--text-dim)', fontSize: '14px' }}>{lang.level}</span>
              </div>
            ))}
          </div>

          {/* Qualities */}
          <div className="card">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '20px', color: 'var(--text)' }}>Qualités</h3>
            {QUALITIES.map((quality, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '10px 0' }}>
                <span style={{ color: 'var(--primary)', fontSize: '16px' }}>✓</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
