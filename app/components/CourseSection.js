'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CourseSection.module.css';

const courses = [
  {
    id: 1,
    cats: ['all', '1', '2'],
    badge: 'HOT',
    badgeType: 'hot',
    title: 'TOPIK I 완전정복 - 1·2급 한 번에 합격',
    instructor: '강민재',
    rating: '4.9',
    price: '89,000원',
    students: '12,483명',
    img: '/images/courses/1.png',
  },
  {
    id: 2,
    cats: ['all', 'beginner'],
    badge: 'NEW',
    badgeType: 'new',
    title: '왕초보 한국어 입문 - 한글부터 기초 회화까지',
    instructor: '정다은',
    rating: '4.8',
    price: '59,000원',
    students: '8,201명',
    img: '/images/courses/2.png',
  },
  {
    id: 3,
    cats: ['all', '5', '6'],
    badge: '5·6급',
    badgeType: 'level',
    title: 'TOPIK II 쓰기 집중반 - 고득점 작문 완성',
    instructor: '이수민',
    rating: '5.0',
    price: '99,000원',
    students: '6,774명',
    img: '/images/courses/3.png',
  },
  {
    id: 4,
    cats: ['all', 'speaking'],
    badge: 'BEST',
    badgeType: 'hot',
    title: '실전 한국어 회화 - 발음 교정 & 자유 회화',
    instructor: 'Madina Tursunova',
    rating: '4.9',
    price: '75,000원',
    students: '9,318명',
    img: '/images/courses/4.png',
  },
  {
    id: 5,
    cats: ['all', '3', '4'],
    badge: '3·4급',
    badgeType: 'level',
    title: '중급 한국어 문법 완성 - 3·4급 핵심 문법 총정리',
    instructor: '강민재',
    rating: '4.7',
    price: '79,000원',
    students: '7,045명',
    img: '/images/courses/5.png',
  },
  {
    id: 6,
    cats: ['all', 'speaking'],
    badge: 'NEW',
    badgeType: 'new',
    title: 'K-문화로 배우는 생활 한국어 - 드라마 & K-POP',
    instructor: 'Emma Kim',
    rating: '4.8',
    price: '65,000원',
    students: '11,220명',
    img: '/images/courses/6.png',
  },
  {
    id: 7,
    cats: ['all', 'speaking'],
    badge: 'HOT',
    badgeType: 'hot',
    title: '비즈니스 한국어 - 직장인을 위한 실전 한국어',
    instructor: 'Daniel Lee',
    rating: '4.9',
    price: '85,000원',
    students: '5,601명',
    img: '/images/courses/7.png',
  },
  {
    id: 8,
    cats: ['all', 'beginner', '1'],
    badge: '입문·1급',
    badgeType: 'level',
    title: 'TOPIK 필수 어휘 1500 - 단기 암기 완성반',
    instructor: '정다은',
    rating: '4.6',
    price: '55,000원',
    students: '14,832명',
    img: '/images/courses/8.png',
  },
];

const subtitles = {
  all: '수강생 선택 1위 강좌를 확인하세요',
  beginner: '한국어 첫걸음, 입문 과정',
  '1': '1급 목표 강좌 모음',
  '2': '2급 목표 강좌 모음',
  '3': '3급 목표 강좌 모음',
  '4': '4급 목표 강좌 모음',
  '5': '5급 목표 강좌 모음',
  '6': '6급 목표 강좌 모음',
  speaking: '자연스러운 한국어 회화 마스터',
};

export default function CourseSection() {
  const [activeCat, setActiveCat] = useState('all');

  useEffect(() => {
    const handler = (e) => setActiveCat(e.detail.cat);
    window.addEventListener('filterCat', handler);
    return () => window.removeEventListener('filterCat', handler);
  }, []);

  const visible = courses.filter((c) => c.cats.includes(activeCat));

  const badgeClass = (type) => {
    if (type === 'level') return styles.badgeLevel;
    if (type === 'new') return styles.badgeNew;
    return styles.badgeHot;
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>인기 강좌</h2>
          <p className={styles.sub}>{subtitles[activeCat]}</p>
        </div>
        <Link href="/courses" className={styles.viewAll}>전체 보기 →</Link>
      </div>

      <div className={styles.grid}>
        {visible.length === 0 ? (
          <p className={styles.empty}>해당 카테고리의 강좌를 준비 중입니다.</p>
        ) : (
          visible.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.thumb}>
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className={`${styles.badge} ${badgeClass(course.badgeType)}`}>
                {course.badge}
              </span>
              <p className={styles.courseTitle}>{course.title}</p>
              <p className={styles.instructor}>{course.instructor}</p>
              <div className={styles.meta}>
                <span className={styles.rating}>★ {course.rating}</span>
                <span className={styles.price}>{course.price}</span>
                <span className={styles.students}>수강생 {course.students}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}