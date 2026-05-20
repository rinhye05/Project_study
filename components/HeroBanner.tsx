import { useState } from 'react'
import styles from './HeroBanner.module.css'

const banners = [
  {
    badge: 'TOPIK II 5-6급 대비',
    title: '한국어 실력을\n완성하는 강의',
    desc: 'TOPIK 고득점을 위한 체계적인 커리큘럼',
    cta: '강좌 보러가기',
    sub: '지금 신청 시 10% 할인',
    bg: '#0A1628',
    accent: '#C0392B',
  },
  {
    badge: '인기 급상승',
    title: '일상 한국어를\n자연스럽게',
    desc: '원어민처럼 말하는 회화 집중 훈련',
    cta: '무료 맛보기',
    sub: '3일 무료 수강 가능',
    bg: '#0D2340',
    accent: '#2980B9',
  },
  {
    badge: '신규 오픈',
    title: '비즈니스 한국어\n실전 완성',
    desc: '이메일, 회의, 발표까지 직장 한국어 총정리',
    cta: '강좌 신청',
    sub: '얼리버드 할인 진행 중',
    bg: '#1A0A00',
    accent: '#E67E22',
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
              <span className={styles.statLabel}>평점</span>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <span className={styles.statNum}>42K+</span>
              <span className={styles.statLabel}>수강생</span>
            </div>
            <div className={styles.statDivider}/>
            <div className={styles.stat}>
              <span className={styles.statNum}>94%</span>
              <span className={styles.statLabel}>TOPIK 합격률</span>
            </div>
          </div>
        </div>
      </div>

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