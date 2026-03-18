import { useState } from 'react';
import { SERVICES } from '../data/siteData.js';
import { FadeUp, SectionLabel, SectionHeading, SectionSub } from './UI.jsx';
import styles from './Services.module.css';

function ServiceCard({ service, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        className={styles.card}
        style={{ background: hov ? '#111116' : 'var(--card)' }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <div className={styles.imgWrap}>
          <img
            src={service.img}
            alt={service.title}
            className={styles.img}
            style={{
              filter: hov ? 'brightness(0.8) saturate(0.7)' : 'brightness(0.5) saturate(0.35)',
              transform: hov ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <span className={styles.tag}>{service.tag}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.num}>{service.num}</div>
          <h3 className={styles.title}>{service.title}</h3>
          <p  className={styles.desc}>{service.desc}</p>
          <a href="#contact" className={styles.link}>
            See More
            <span
              className={styles.arrow}
              style={{ transform: hov ? 'translateX(5px)' : 'none' }}
            >→</span>
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <FadeUp><SectionLabel>Core Capabilities</SectionLabel></FadeUp>
      <FadeUp delay={0.05}>
        <SectionHeading>
          The Full Spectrum<br />of Services
        </SectionHeading>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionSub>
          We replace the need for multiple vendors. From brand identity to custom
          software, we build the entire ecosystem your business runs on.
        </SectionSub>
      </FadeUp>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} service={s} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
