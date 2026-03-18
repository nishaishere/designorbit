import { useState } from 'react';
import { STACK } from '../data/siteData.js';
import { FadeUp, SectionLabel, SectionHeading, SectionSub } from './UI.jsx';
import styles from './Stack.module.css';

function StackItem({ item, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        className={styles.item}
        style={{
          background:   hov ? '#111116' : 'var(--card)',
          borderColor:  hov ? '#222228' : 'var(--border)',
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <span
          className={styles.icon}
          style={{ color: hov ? 'var(--accent)' : '#38383f' }}
        >
          {item.icon}
        </span>
        <span
          className={styles.name}
          style={{ color: hov ? '#606070' : '#28282f' }}
        >
          {item.name}
        </span>
      </div>
    </FadeUp>
  );
}

export default function Stack() {
  return (
    <section id="about" className={styles.section}>
      <FadeUp><SectionLabel>Build Environment</SectionLabel></FadeUp>
      <FadeUp delay={0.05}>
        <SectionHeading>The Proven Stack</SectionHeading>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionSub>
          A battle-tested stack for speed and scale. We leverage these tools to
          ensure reliability and uncompromising polish on every project.
        </SectionSub>
      </FadeUp>

      <div className={styles.grid}>
        {STACK.map((s, i) => (
          <StackItem key={i} item={s} delay={i * 0.035} />
        ))}
      </div>
    </section>
  );
}
