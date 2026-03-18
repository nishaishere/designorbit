import { useState } from 'react';
import { useScrolled, useHover } from '../hooks/index.js';
import { BtnPrimary } from './UI.jsx';
import { NAV_LINKS } from '../data/siteData.js';
import styles from './Navbar.module.css';

function NavLink({ href, label }) {
  const [hov, bind] = useHover();
  return (
    <li>
      <a
        href={href}
        className={styles.navLink}
        style={{ color: hov ? 'var(--fg)' : 'var(--fg2)' }}
        {...bind}
      >
        {label}
      </a>
    </li>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      {/* Logo */}
      <a href="#home" className={styles.logo}>
        Design<span className={styles.logoAccent}>Orbit</span>
        <span className={styles.logoDot}>.</span>
      </a>

      {/* Desktop links */}
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((l) => (
          <NavLink key={l.label} {...l} />
        ))}
      </ul>

      {/* CTA */}
      <div className={styles.navCta}>
        <BtnPrimary href="#contact">Work With Us</BtnPrimary>
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <BtnPrimary href="#contact">Work With Us</BtnPrimary>
        </div>
      )}
    </nav>
  );
}
