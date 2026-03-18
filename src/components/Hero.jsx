import { BtnPrimary, BtnGhost, FadeUp, SectionLabel } from './UI.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background image layer */}
      <div className={styles.bgWrap}>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=80"
          alt=""
          className={styles.bgImg}
          loading="eager"
        />
        <div className={styles.bgGrad} />
        <div className={styles.bgVignette} />
      </div>

      {/* Scanline animation */}
      <div className={styles.scanlineWrap} aria-hidden>
        <div className={styles.scanline} />
      </div>

      {/* Orbit decoration */}
      <div className={styles.orbitDeco} aria-hidden>
        <div className={styles.orbitRing1} />
        <div className={styles.orbitRing2} />
        <div className={styles.orbitDot1} />
        <div className={styles.orbitDot2} />
      </div>

      {/* Availability badge */}
      <div className={styles.badge}>
        <span className={styles.badgeDot} /> 2 Q1 Spots Available
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <FadeUp>
          <SectionLabel>Digital Agency</SectionLabel>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className={styles.headline}>
            Defining
            <span className={styles.headlineItalic}>Digital Orbit</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className={styles.sub}>
            We merge the precision of code with the power of design,
            orchestrating a single identity that signals authority everywhere.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className={styles.actions}>
            <BtnPrimary href="#contact">Work With Us</BtnPrimary>
            <BtnGhost href="#services">Explore Services</BtnGhost>
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <FadeUp delay={0.45}>
          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
            <span className={styles.scrollLabel}>Scroll</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
