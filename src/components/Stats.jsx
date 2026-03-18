import { STATS } from '../data/siteData.js';
import { FadeUp, SectionLabel, SectionHeading } from './UI.jsx';
import { useCountUp } from '../hooks/index.js';
import styles from './Stats.module.css';

function StatCard({ stat, delay, isLast }) {
  const [ref, count] = useCountUp(stat.num, 1800);

  // Format display: preserve prefix/suffix symbols around number
  const prefix = stat.num.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = stat.num.match(/[^0-9]*$/)?.[0] ?? '';

  return (
    <FadeUp delay={delay}>
      <div
        ref={ref}
        className={styles.card}
        style={{ borderRight: isLast ? 'none' : `1px solid var(--border)` }}
      >
        <div className={styles.num}>
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className={styles.label}>{stat.label}</div>
        <p className={styles.desc}>{stat.desc}</p>
      </div>
    </FadeUp>
  );
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <FadeUp><SectionLabel>Impact at Scale</SectionLabel></FadeUp>
      <FadeUp delay={0.05}>
        <SectionHeading>
          Design is Subjective.<br />Performance is Not.
        </SectionHeading>
      </FadeUp>

      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} delay={i * 0.1} isLast={i === STATS.length - 1} />
        ))}
      </div>
    </section>
  );
}
