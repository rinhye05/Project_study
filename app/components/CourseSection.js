'use client';

import { useState, useEffect } from 'react';
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
    thumbBg: '#1a1a1a',
    thumbCategory: 'TOPIK I',
    thumbTitle: '1-2급 완성\n기초부터 합격까지',
    decoText: 'TOPIK',
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
    thumbBg: '#2d2d2d',
    thumbCategory: 'BEGINNER',
    thumbTitle: '한글부터\n첫 한국어 시작',
    decoText: '입문',
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
    thumbBg: '#0a0a0a',
    thumbCategory: 'TOPIK II WRITING',
    thumbTitle: '쓰기 54점\n고득점 전략',
    decoText: '쓰기',
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
    thumbBg: '#404040',
    thumbCategory: 'SPEAKING',
    thumbTitle: '발음 교정부터\n자유회화까지',
    decoText: '말',
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
    thumbBg: '#1a1a1a',
    thumbCategory: 'GRAMMAR',
    thumbTitle: '중급 문법\n3·4급 핵심 정리',
    decoText: '문법',
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
    thumbBg: '#2d2d2d',
    thumbCategory: 'K-CULTURE',
    thumbTitle: '드라마·K-POP으로\n배우는 한국어',
    decoText: 'K',
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
    thumbBg: '#0a0a0a',
    thumbCategory: 'BUSINESS',
    thumbTitle: '직장인 필수\n비즈니스 한국어',
    decoText: '비즈',
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
    thumbBg: '#333333',
    thumbCategory: 'VOCABULARY',
    thumbTitle: 'TOPIK 필수 어휘\n1500 단어 완성',
    decoText: '어휘',
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
        <Link href="#" className={styles.viewAll}>전체 보기 →</Link>
      </div>

      <div className={styles.grid}>
        {visible.length === 0 ? (
          <p className={styles.empty}>해당 카테고리의 강좌를 준비 중입니다.</p>
        ) : (
          visible.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.thumb}>
                <div
                  className={styles.thumbBg}
                  style={{ background: course.thumbBg }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '52px',
                      color: 'rgba(255,255,255,0.07)',
                    }}
                  >
                    {course.decoText}
                  </span>
                </div>
                <div className={styles.thumbLabel}>
                  <span className={styles.thumbCategory}>{course.thumbCategory}</span>
                  <span className={styles.thumbTitle}>
                    {course.thumbTitle.split('\n').map((line, i) => (
                      <span key={i} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </span>
                </div>
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
