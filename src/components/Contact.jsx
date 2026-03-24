import { useState } from 'react';
import { Phone, Mail, Briefcase, GitBranch, MapPin, CheckCircle, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialiser EmailJS (remplacer YOUR_PUBLIC_KEY par votre clé)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.msg,
          to_email: 'raharijaonatolotra2@gmail.com'
        }
      );

      setSent(true);
      setForm({ name: '', email: '', msg: '' });
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (err) {
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error('Erreur EmailJS:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-label">Contact</div>
        <h2>
          Travaillons <span className="highlight">ensemble</span>
        </h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Disponible pour de nouvelles opportunités</h3>
          <p>
            Que ce soit pour un stage, une alternance, un poste junior, 
            ou simplement pour échanger sur un projet, n'hésitez pas à me contacter.
          </p>
          <div className="contact-methods">
            <a className="contact-method" href="tel:+261383000520">
              <div className="contact-icon"><Phone size={24} /></div>
              <div className="contact-details">
                <h4>Téléphone</h4>
                <p>+261 38 30 005 20</p>
              </div>
            </a>
            <a className="contact-method" href="mailto:raharijaonatolotra2@gmail.com">
              <div className="contact-icon"><Mail size={24} /></div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>raharijaonatolotra2@gmail.com</p>
              </div>
            </a>
            <a className="contact-method" href="https://www.linkedin.com/in/raharijaona-tolojanahary-tiana-odilon-927b913a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <div className="contact-icon"><Briefcase size={24} /></div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p>Tiana Odilon</p>
              </div>
            </a>
            <a className="contact-method" href="https://github.com/TolotraR2" target="_blank" rel="noreferrer">
              <div className="contact-icon"><GitBranch size={24} /></div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p>@TolotraR2</p>
              </div>
            </a>
            <div className="contact-method" style={{ cursor: 'default' }}>
              <div className="contact-icon"><MapPin size={24} /></div>
              <div className="contact-details">
                <h4>Localisation</h4>
                <p>Madagascar — Ouvert au remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary)' }}><CheckCircle size={48} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '8px', color: 'var(--text)' }}>Message envoyé !</h3>
              <p style={{ color: 'var(--text-muted)' }}>Je vous répondrai dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              {error && (
                <div style={{ 
                  padding: '12px 16px', 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  color: '#ef4444',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}
              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Votre message..."
                  value={form.msg}
                  onChange={e => setForm({ ...form, msg: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer le message →'}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="card" style={{ marginTop: '64px', textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary)' }}><Download size={40} /></div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px', color: 'var(--text)' }}>Télécharger mon CV</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Retrouvez l'ensemble de mon parcours, compétences et formations en un document.</p>
        <a className="btn-primary" href="/Curriculum-vitae-Tolojanahary.pdf" download>
          ↓ Télécharger le CV (PDF)
        </a>
      </div>
    </section>
  );
}
