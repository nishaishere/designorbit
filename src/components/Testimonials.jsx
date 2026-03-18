import { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData.js';
import { FadeUp, SectionLabel } from './UI.jsx';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className={styles.section}>
      <FadeUp>
        <SectionLabel center>What Clients Say</SectionLabel>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className={styles.quoteWrap}>
          <span className={styles.quoteIcon}>"</span>
          <blockquote key={active} className={styles.quote}>
            {t.quote}
          </blockquote>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className={styles.author}>
          <img
            src={t.avatar}
            alt={t.name}
            className={styles.avatar}
          />
          <div>
            <div className={styles.authorName}>{t.name}</div>
            <div className={styles.authorRole}>{t.role}</div>
          </div>
        </div>
      </FadeUp>

      {/* Switcher dots */}
      <FadeUp delay={0.3}>
        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={styles.dot}
              style={{
                background: i === active ? 'var(--accent)' : 'var(--muted)',
                width:      i === active ? '28px' : '8px',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
