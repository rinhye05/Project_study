import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import { instructors } from '../data/instructors';
import styles from '../styles/InstructorsPage.module.css';

export const metadata = { title: '강사 소개 - Arirang Class' };

export default function InstructorsPage() {
  return (
    <PageLayout>
      <div className={styles.wrap}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>스타 강사진</h1>
          <p className={styles.pageDesc}>Arirang Class의 모든 강사를 만나보세요</p>
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
              </div>
              <div className={styles.info}>
                <p className={styles.photoName}>{inst.name}</p>
                <p className={styles.photoTag}>{inst.tag}</p>
                <p className={styles.subject}>{inst.subject}</p>
                <ul className={styles.features}>
                  {inst.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.dot} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}