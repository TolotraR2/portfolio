import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { Lock, Package, Ticket, FileText, CheckCircle, ClipboardCheck, Globe, Wallet, ChevronLeft, ChevronRight } from 'lucide-react';

const iconMap = { Lock, Package, Ticket, FileText, CheckCircle, ClipboardCheck, Globe, Wallet };

const imageMap = {
  'Système de Gestion des Évaluations': '/Projets/Auto-evaluation.png',
  'Infrastructure Nextcloud': '/Projets/nextcloud.webp',
  'TIKERA': '/Projets/Tikera.png',
  'Genesis Capital': '/Projets/Genesis-Capital.png',
};

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -400 : 400, opacity: 0, scale: 0.95 }),
};

export default function Projects() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useRef(false);
  const timerRef = useRef(null);
  const total = PROJECTS.length;

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const paginate = useCallback((newDir) => {
    setCurrent(([prev]) => {
      const next = (prev + newDir + total) % total;
      return [next, newDir];
    });
  }, [total]);

  const goTo = useCallback((idx) => {
    setCurrent(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (paused || prefersReduced.current) return;
    timerRef.current = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timerRef.current);
  }, [paused, paginate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paginate]);

  const project = PROJECTS[current];
  const IconComponent = iconMap[project.icon];
  const imgSrc = imageMap[project.name];
  const padded = String(current + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <section id="projects" className="fade-in">
      <div className="section-header">
        <div className="section-label">- Projets -</div>
        <h2>Mes projets</h2>
      </div>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel-viewport">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              className="carousel-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) paginate(1);
                else if (info.offset.x > 60) paginate(-1);
              }}
            >
              <div className="carousel-card-image">
                {imgSrc ? (
                  <img src={imgSrc} alt={project.name} className="carousel-img" />
                ) : (
                  <div className="carousel-img-fallback">
                    {IconComponent && <IconComponent size={64} strokeWidth={1.2} />}
                  </div>
                )}
                <div className="carousel-img-overlay" />
                <span className="carousel-counter">{padded} / {totalStr}</span>
              </div>

              <div className="carousel-card-content">
                <span className="carousel-category">{project.category}</span>
                <h3 className="carousel-title">{project.name}</h3>
                <p className="carousel-desc">{project.desc}</p>
                <div className="carousel-techs">
                  {project.techs.map(t => (
                    <span key={t} className="carousel-tech">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-nav-row">
          <button className="carousel-btn carousel-btn-prev" onClick={() => paginate(-1)} aria-label="Projet précédent">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={() => paginate(1)} aria-label="Projet suivant">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="carousel-dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' carousel-dot-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Aller au projet ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
