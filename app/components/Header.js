'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  function openModal(tab) {
    const event = new CustomEvent('openModal', { detail: { tab } });
    window.dispatchEvent(event);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}><span>아</span></div>
          Arirang Class
        </Link>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="강좌, 강사명을 검색하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.searchBtn} type="submit" aria-label="검색">&#128269;</button>
        </form>

        <nav className={styles.nav}>
          <Link href="/courses" className={styles.navLink}>강좌</Link>
          <Link href="/instructors" className={styles.navLink}>강사</Link>
          <Link href="/books" className={styles.navLink}>교재</Link>
          <Link href="/exam" className={styles.navLink}>시험정보</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.btnGhost} onClick={() => openModal('login')}>로그인</button>
          <button className={styles.btnSolid} onClick={() => openModal('register')}>회원가입</button>
        </div>
      </div>
    </header>
  );
}