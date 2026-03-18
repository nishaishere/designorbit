import { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api.js';
import { PROJECTS }    from '../data/siteData.js';
import { FadeUp, SectionLabel, SectionHeading, SectionSub } from './UI.jsx';
import styles from './Work.module.css';

function WorkCard({ project, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={delay}>
      <div
        className={styles.card}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <img
          src={project.img}
          alt={project.title}
          className={styles.img}
          style={{
            filter:    hov ? 'brightness(0.28) saturate(0.2)' : 'brightness(0.55) saturate(0.4)',
            transform: hov ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div
          className={styles.overlay}
          style={{
            background: hov
              ? 'linear-gradient(to top, rgba(6,6,8,0.97) 55%, rgba(6,6,8,0.25) 100%)'
              : 'linear-gradient(to top, rgba(6,6,8,0.9) 28%, transparent 70%)',
          }}
        >
          <div className={styles.meta}>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.tag}>{project.tag}</span>
          </div>
          <div className={styles.bottom}>
            <h3 className={styles.title}>{project.title}</h3>
            <p
              className={styles.desc}
              style={{ maxHeight: hov ? '80px' : '0', opacity: hov ? 1 : 0 }}
            >
              {project.desc}
            </p>
            <span
              className={styles.viewLink}
              style={{
                opacity:   hov ? 1 : 0,
                transform: hov ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              View Project →
            </span>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function SkeletonCard() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonShimmer} />
    </div>
  );
}

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await projectsAPI.getAll();
        setProjects(res.data?.length ? res.data : PROJECTS);
      } catch {
        setProjects(PROJECTS);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="work" className={styles.section}>
      <FadeUp><SectionLabel>Portfolio</SectionLabel></FadeUp>
      <FadeUp delay={0.05}>
        <SectionHeading>Selected Work</SectionHeading>
      </FadeUp>
      <FadeUp delay={0.1}>
        <SectionSub>
          Redefining the standard. We sharpen clarity, elevate design, and build
          digital identities that perform at the highest level.
        </SectionSub>
      </FadeUp>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((p, i) => (
              <WorkCard key={p._id || i} project={p} delay={i * 0.07} />
            ))}
      </div>
    </section>
  );
}
