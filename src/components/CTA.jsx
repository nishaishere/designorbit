import { FadeUp, SectionLabel, BtnPrimary, BtnGhost } from './UI.jsx';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="contact" className={styles.section}>
      {/* bg image */}
      <div className={styles.bgWrap}>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80"
          alt=""
          className={styles.bgImg}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* grid lines decoration */}
      <div className={styles.gridDeco} aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.gridLine} style={{ left: `${(i + 1) * 16.66}%` }} />
        ))}
      </div>

      <div className={styles.content}>
        <FadeUp>
          <SectionLabel center>Let's Build</SectionLabel>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className={styles.headline}>
            Ready For<br />
            <span className={styles.accentLine}>What's Next?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className={styles.sub}>
            Let's discuss your vision and see if we are the right fit.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className={styles.actions}>
            <BtnPrimary href="mailto:hello@designorbit.co">Work With Us</BtnPrimary>
            <BtnGhost href="#services">Explore Services</BtnGhost>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className={styles.available}>
            <span className={styles.availDot} />
            Available for new projects — 2 spots remaining in Q1
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
