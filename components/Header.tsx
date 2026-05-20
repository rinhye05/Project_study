import { useState } from 'react'
import styles from './Header.module.css'

const levels = ['전체', '입문', 'TOPIK I (1급)', 'TOPIK I (2급)', 'TOPIK II (3급)', 'TOPIK II (4급)', 'TOPIK II (5-6급)', '비즈니스 한국어']

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLevel, setActiveLevel] = useState('전체')

  return (
    <header>
      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <span>외국인을 위한 한국어 강의 플랫폼 — English · 中文 · 日本語 · Español 지원</span>
          <div className={styles.topLinks}>
            <a href="#">로그인</a>
            <a href="#">회원가입</a>
            <a href="#">마이페이지</a>
            <a href="#">고객센터</a>
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={`container ${styles.headerInner}`}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoKr}>한국어</span>
            <span className={styles.logoEn}>STUDIO</span>
          </a>

          <div className={styles.searchBox}>
            <select className={styles.searchCategory}>
              <option>전체</option>
              <option>말하기</option>
              <option>듣기</option>
              <option>읽기</option>
              <option>쓰기</option>
              <option>문법</option>
              <option>TOPIK</option>
            </select>
            <input
              type="text"
              placeholder="강사명, 강좌명, 주제 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
          </div>

          <div className={styles.headerActions}>
            <a href="#" className={styles.cartBtn}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <span className={styles.cartCount}>2</span>
            </a>
            <a href="#" className={styles.loginBtn}>로그인</a>
            <a href="#" className={styles.joinBtn}>수강 시작하기</a>
          </div>
        </div>
      </div>

      <nav className={styles.subjectNav}>
        <div className={`container ${styles.navInner}`}>
          <span className={styles.navLabel}>LEVEL</span>
          {levels.map(level => (
            <button
              key={level}
              className={`${styles.levelBtn} ${activeLevel === level ? styles.active : ''}`}
              onClick={() => setActiveLevel(level)}
            >
              {level}
            </button>
          ))}
          <a href="#" className={styles.allCourses}>전체 강좌 보기 →</a>
        </div>
      </nav>
    </header>
  )
}