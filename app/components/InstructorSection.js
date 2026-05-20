import Image from 'next/image';
import Link from 'next/link';
import { instructors } from '../data/instructors';
import styles from '../styles/InstructorSection.module.css';

export default function InstructorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>스타 강사진</h2>
          <p className={styles.sub}>Arirang Class 대표 강사들을 만나보세요</p>
        </div>
        <Link href="#" className={styles.viewAll}>전체 강사 보기 →</Link>
      </div>

      <div className={styles.grid}>
        {instructors.map((inst) => (
          <Link key={inst.id} href={`/instructors/${inst.id}`} className={styles.card}>
            <div className={styles.photoWrap}>
              <Image
                src={inst.img}
                alt={inst.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div className={styles.fallback}>{inst.initial}</div>
              <div className={styles.overlay} />
              <div className={styles.photoBottom}>
                <p className={styles.photoName}>{inst.name}</p>
                <p className={styles.photoTag}>{inst.tag}</p>
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.subject}>{inst.subject}</p>
              <ul className={styles.features}>
                {inst.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
