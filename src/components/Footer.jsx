import { useState } from 'react';
import { FOOTER_LINKS } from '../data/siteData.js';
import Newsletter from './Newsletter.jsx';
import styles from './Footer.module.css';

function FooterLink({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <li>
      <a
        href="#"
        className={styles.footerLink}
        style={{ color: hov ? 'var(--fg2)' : '#35353f' }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            Design<span className={styles.logoAccent}>Orbit</span>
            <span className={styles.logoDot}>.</span>
          </a>
          <p className={styles.tagline}>
            Merging the precision of code<br />
            with the power of design.
          </p>
          <div className={styles.socials}>
            {['𝕏', 'in', 'Be', 'Dr'].map((s) => (
              <a key={s} href="#" className={styles.social}>{s}</a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div className={styles.columns}>
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col} className={styles.col}>
              <h4 className={styles.colTitle}>{col}</h4>
              <ul className={styles.colLinks}>
                {links.map((l) => (
                  <FooterLink key={l} label={l} />
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className={styles.col}>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2026 DesignOrbit. All rights reserved.
        </p>
        <p className={styles.madeby}>
          Defining <span className={styles.accentText}>Digital Identity</span>
        </p>
      </div>
    </footer>
  );
}
