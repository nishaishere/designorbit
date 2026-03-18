import { MARQUEE_ITEMS } from '../data/siteData.js';
import styles from './Marquee.module.css';

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.diamond}>◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
