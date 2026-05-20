import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CourseCard.module.css';

export default function CourseCard({ course }) {
  const badgeClass =
    course.badgeType === 'level' ? styles.badgeLevel
    : course.badgeType === 'new' ? styles.badgeNew
    : styles.badgeHot;

  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <Image src={course.img} alt={course.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <span className={`${styles.badge} ${badgeClass}`}>{course.badge}</span>
      <p className={styles.title}>{course.title}</p>
      <Link href={`/instructors/${course.instructorId}`} className={styles.instructor}>
        {course.instructor}
      </Link>
      <div className={styles.meta}>
        <span className={styles.rating}>★ {course.rating}</span>
        <span className={styles.price}>{course.price}</span>
        <span className={styles.students}>수강생 {course.students}</span>
      </div>
    </div>
  );
}