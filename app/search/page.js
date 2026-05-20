'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { instructors } from '../data/instructors';
import styles from '../styles/SearchPage.module.css';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [input, setInput] = useState(query);

  const q = query.toLowerCase();
  const filteredCourses = q ? courses.filter(c =>
    c.title.includes(q) || c.instructor.toLowerCase().includes(q)
  ) : [];
  const filteredInstructors = q ? instructors.filter(i =>
    i.name.toLowerCase().includes(q) || i.tag.includes(q)
  ) : [];

  return (
    <div className={styles.wrap}>
      <div className={styles.searchBar}>
        <form action="/search" method="get" className={styles.form}>
          <input
            className={styles.input}
            name="q"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="강좌, 강사명을 검색하세요"
            autoFocus
          />
          <button className={styles.btn} type="submit">검색</button>
        </form>
      </div>

      {q && (
        <p className={styles.resultInfo}>
          <strong>"{query}"</strong> 검색 결과 —
          강좌 {filteredCourses.length}개, 강사 {filteredInstructors.length}명
        </p>
      )}

      {filteredInstructors.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>강사</h2>
          <div className={styles.instructorRow}>
            {filteredInstructors.map((inst) => (
              <Link key={inst.id} href={`/instructors/${inst.id}`} className={styles.instCard}>
                <div className={styles.instPhoto}>
                  <Image src={inst.img} alt={inst.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                  <div className={styles.instFallback}>{inst.initial}</div>
                </div>
                <p className={styles.instName}>{inst.name}</p>
                <p className={styles.instTag}>{inst.tag}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {filteredCourses.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>강좌</h2>
          <div className={styles.courseGrid}>
            {filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </section>
      )}

      {q && filteredCourses.length === 0 && filteredInstructors.length === 0 && (
        <div className={styles.empty}>
          <p>"{query}"에 대한 검색 결과가 없습니다.</p>
          <p className={styles.emptySub}>다른 키워드로 검색해보세요.</p>
        </div>
      )}

      {!q && (
        <div className={styles.empty}>
          <p>검색어를 입력하세요.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <PageLayout>
      <Suspense>
        <SearchResults />
      </Suspense>
    </PageLayout>
  );
}