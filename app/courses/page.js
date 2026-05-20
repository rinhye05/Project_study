'use client';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import styles from '../styles/CoursesPage.module.css';

const categories = [
  { key: 'all', label: '전체' },
  { key: 'beginner', label: '입문' },
  { key: '1', label: '1급' }, { key: '2', label: '2급' },
  { key: '3', label: '3급' }, { key: '4', label: '4급' },
  { key: '5', label: '5급' }, { key: '6', label: '6급' },
  { key: 'speaking', label: '회화' },
];

export default function CoursesPage() {
  const [active, setActive] = useState('all');
  const visible = courses.filter((c) => c.cats.includes(active));

  return (
    <PageLayout>
      <div className={styles.wrap}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>전체 강좌</h1>
          <p className={styles.pageDesc}>목표 레벨에 맞는 강좌를 선택하세요</p>
        </div>
        <div className={styles.filterRow}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.filterBtn} ${active === cat.key ? styles.active : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {visible.map((course) => <CourseCard key={course.id} course={course} />)}
          {visible.length === 0 && <p className={styles.empty}>해당 카테고리의 강좌를 준비 중입니다.</p>}
        </div>
      </div>
    </PageLayout>
  );
}