import { useState } from 'react';
import { Phone, Mail, Briefcase, GitBranch, MapPin, CheckCircle, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const cvHref = `${import.meta.env.BASE_URL}CV-Odilon_RAHARIJAONA-IT-Support.pdf`;

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
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error('Erreur EmailJS:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="fade-in">
      <div className="section-header">
        <div className="section-label">- Contact -</div>
        <h2>
          Travaillons <span className="highlight">ensemble</span>
        </h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Disponible pour de nouvelles opportunités</h3>
          <p>
            Que ce soit pour un poste, un projet ou simplement pour échanger
            sur des sujets IT, n'hésitez pas à me contacter.
          </p>
          <div className="contact-methods">
            <a className="contact-method" href="mailto:raharijaonatolotra2@gmail.com">
              <div className="contact-icon"><Mail size={20} /></div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>raharijaonatolotra2@gmail.com</p>
              </div>
            </a>
            <a className="contact-method" href="tel:+261383000520">
              <div className="contact-icon"><Phone size={20} /></div>
              <div className="contact-details">
                <h4>Téléphone</h4>
                <p>+261 38 30 005 20</p>
              </div>
            </a>
            <a className="contact-method" href="https://www.linkedin.com/in/raharijaona-tolojanahary-tiana-odilon-927b913a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <div className="contact-icon"><Briefcase size={20} /></div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p>Tiana Odilon</p>
              </div>
            </a>
            <a className="contact-method" href="https://github.com/TolotraR2" target="_blank" rel="noreferrer">
              <div className="contact-icon"><GitBranch size={20} /></div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p>@TolotraR2</p>
              </div>
            </a>
            <div className="contact-method contact-method-static">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div className="contact-details">
                <h4>Localisation</h4>
                <p>Madagascar — Ouvert au remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          {sent ? (
            <div className="form-success">
              <CheckCircle size={40} />
              <h3>Message envoyé !</h3>
              <p>Je vous répondrai dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="contact-name">Nom</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-msg">Message</label>
                <textarea
                  id="contact-msg"
                  placeholder="Votre message..."
                  value={form.msg}
                  onChange={e => setForm({ ...form, msg: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="cv-download-section">
        <div className="cv-download-icon"><Download size={32} /></div>
        <h3>Télécharger mon CV</h3>
        <p>Retrouvez l'ensemble de mon parcours et compétences en un document.</p>
        <a className="btn-primary" href={cvHref} download>
          Télécharger le CV (PDF)
        </a>
      </div>
    </section>
  );
}
