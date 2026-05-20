import { useState } from 'react'
import styles from './Header.module.css'

const subjects = ['전체', '수학', '영어', '국어', '과학', '사회', '한국사', '논술', '면접']

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSubject, setActiveSubject] = useState('전체')

  return (
    <header>
      {/* 상단 유틸리티 바 */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <span>수능까지 D-<strong>124</strong></span>
          <div className={styles.topLinks}>
            <a href="#">로그인</a>
            <a href="#">회원가입</a>
            <a href="#">마이페이지</a>
            <a href="#">고객센터</a>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className={styles.mainHeader}>
        <div className={`container ${styles.headerInner}`}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoText}>MEGA</span>
            <span className={styles.logoSub}>스터디</span>
          </a>

          <div className={styles.searchBox}>
            <select className={styles.searchCategory}>
              <option>전 과목</option>
              <option>수학</option>
              <option>영어</option>
              <option>국어</option>
            </select>
            <input
              type="text"
              placeholder="강사명, 강좌명, 교재명 검색"
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
            <a href="#" className={styles.joinBtn}>회원가입</a>
          </div>
        </div>
      </div>

      {/* 과목 네비게이션 */}
      <nav className={styles.subjectNav}>
        <div className={`container ${styles.navInner}`}>
          {subjects.map(subject => (
            <button
              key={subject}
              className={`${styles.subjectBtn} ${activeSubject === subject ? styles.active : ''}`}
              onClick={() => setActiveSubject(subject)}
            >
              {subject}
            </button>
          ))}
          <a href="#" className={styles.allCourses}>전체 강좌 보기 →</a>
        </div>
      </nav>
    </header>
  )
}
