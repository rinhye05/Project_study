'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  function openModal(tab) {
    const event = new CustomEvent('openModal', { detail: { tab } });
    window.dispatchEvent(event);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}><span>아</span></div>
          Arirang Class
        </Link>

        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="강좌, 강사명을 검색하세요"
          />
          <button className={styles.searchBtn} aria-label="검색">&#128269;</button>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>강좌</Link>
          <Link href="#" className={styles.navLink}>강사</Link>
          <Link href="#" className={styles.navLink}>교재</Link>
          <Link href="#" className={styles.navLink}>시험정보</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.btnGhost} onClick={() => openModal('login')}>로그인</button>
          <button className={styles.btnSolid} onClick={() => openModal('register')}>회원가입</button>
        </div>
      </div>
    </header>
  );
}
