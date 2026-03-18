import { useState } from 'react';
import { useFadeUp } from '../hooks/index.js';
import styles from './UI.module.css';

// ── FadeUp wrapper ────────────────────────────────────────
export function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useFadeUp();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Section label (eyebrow text) ──────────────────────────
export function SectionLabel({ children, center = false }) {
  return (
    <div className={`${styles.label} ${center ? styles.labelCenter : ''}`}>
      <span className={styles.labelLine} />
      <span className={styles.labelText}>{children}</span>
    </div>
  );
}

// ── Buttons ───────────────────────────────────────────────
export function BtnPrimary({ href = '#', children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={styles.btnPrimary}
      style={{ background: hov ? '#f5ff66' : 'var(--accent)' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

export function BtnGhost({ href = '#', children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      className={styles.btnGhost}
      style={{
        color:       hov ? 'var(--fg)' : 'var(--fg2)',
        borderColor: hov ? 'var(--fg2)' : 'var(--muted)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

// ── Section heading ───────────────────────────────────────
export function SectionHeading({ children, style = {} }) {
  return (
    <h2 className={styles.sectionH2} style={style}>
      {children}
    </h2>
  );
}

// ── Section subtext ───────────────────────────────────────
export function SectionSub({ children }) {
  return <p className={styles.sectionSub}>{children}</p>;
}

// ── Divider line ──────────────────────────────────────────
export function Divider() {
  return <div className={styles.divider} />;
}
