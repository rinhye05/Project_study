import { useState } from 'react'
import styles from './HeroBanner.module.css'

const banners = [
  {
    badge: '2025 수능 대비',
    title: '수능 수학 만점의\n비결을 공개합니다',
    desc: '현우진 선생님의 킬러문항 완전정복',
    cta: '강좌 보러가기',
    sub: '지금 신청 시 10% 할인',
    bg: '#0A1628',
    accent: '#E8002D',
  },
  {
    badge: '인기 급상승',
    title: '영어 1등급을\n만드는 강의',
    desc: '이명학 선생님의 수능 영어 전략',
    cta: '무료 맛보기',
    sub: '3일 무료 수강 가능',
    bg: '#0D2340',
    accent: '#0066CC',
  },
  {
    badge: '신규 오픈',
    title: '국어 비문학\n고득점 전략',
    desc: '김동욱 선생님의 독해 속도 UP',
    cta: '강좌 신청',
    sub: '얼리버드 할인 진행 중',
    bg: '#1A0A00',
    accent: '#FF6B00',
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const b = banners[current]

  return (
    <div className={styles.hero} style={{ background: b.bg }}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.badge} style={{ background: b.accent }}>{b.badge}</span>
          <h1 className={styles.title}>{b.title}</h1>
          <p className={styles.desc}>{b.desc}</p>
          <div className={styles.actions}>
            <button className={styles.cta} style={{ background: b.accent }}>{b.cta}</button>
            <span className={styles.subText}>{b.sub}</span>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.statsBox}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4.9</span>
              <span className={styles.statLabel}>★ 평점</span>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <span className={styles.statNum}>12만</span>
              <span className={styles.statLabel}>수강생</span>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>재수강률</span>
            </div>
          </div>
        </div>
      </div>

      {/* 도트 인디케이터 */}
      <div className={styles.dots}>
        {banners.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            style={i === current ? { background: b.accent } : {}}
          />
        ))}
      </div>
    </div>
  )
}
