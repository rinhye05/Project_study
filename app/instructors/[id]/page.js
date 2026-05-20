import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '../../components/PageLayout';
import CourseCard from '../../components/CourseCard';
import { instructors } from '../../data/instructors';
import { courses } from '../../data/courses';
import styles from '../../styles/InstructorDetail.module.css';

export function generateStaticParams() {
  return instructors.map((inst) => ({ id: inst.id }));
}

export function generateMetadata({ params }) {
  const inst = instructors.find((i) => i.id === params.id);
  return { title: `${inst?.name} 강사 - Arirang Class` };
}

export default function InstructorDetailPage({ params }) {
  const inst = instructors.find((i) => i.id === params.id);
  if (!inst) notFound();

  const instCourses = courses.filter((c) => inst.courseIds.includes(c.id));

  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <Link href="/instructors" className={styles.back}>← 강사 목록으로</Link>
            <span className={styles.tag}>{inst.tag}</span>
            <h1 className={styles.name}>{inst.name}</h1>
            <p className={styles.slogan}>{inst.slogan}</p>
            <div className={styles.divider} />
            <p className={styles.bio}>{inst.bio}</p>
            <ul className={styles.career}>
              {inst.career.map((c) => (
                <li key={c} className={styles.careerItem}>
                  <span className={styles.careerDot} />{c}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.photoFrame}>
              <Image src={inst.img} alt={inst.name} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              <div className={styles.fallback}>{inst.initial}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>강의 특징</h2>
          <div className={styles.featuresGrid}>
            {inst.features.map((f, i) => (
              <div key={f} className={styles.featureCard}>
                <span className={styles.featureNum}>0{i + 1}</span>
                <p className={styles.featureText}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {instCourses.length > 0 && (
        <div className={styles.section} style={{ background: 'var(--gray-50)' }}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>{inst.name} 강사의 강좌</h2>
            <div className={styles.coursesGrid}>
              {instCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}