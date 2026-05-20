'use client';

import { useState } from 'react';
import styles from '../styles/CategoryNav.module.css';

const categories = [
  { key: 'all', label: '전체' },
  { key: 'beginner', label: '입문' },
  { divider: true },
  { key: '1', label: '1급' },
  { key: '2', label: '2급' },
  { key: '3', label: '3급' },
  { key: '4', label: '4급' },
  { key: '5', label: '5급' },
  { key: '6', label: '6급' },
  { divider: true },
  { key: 'speaking', label: '회화' },
];

export default function CategoryNav() {
  const [active, setActive] = useState('all');

  const handleClick = (key) => {
    setActive(key);
    const event = new CustomEvent('filterCat', { detail: { cat: key } });
    window.dispatchEvent(event);
  };

  return (
    <nav className={styles.nav} id="courses">
      <div className={styles.inner}>
        {categories.map((item, i) =>
          item.divider ? (
            <div key={`divider-${i}`} className={styles.divider} />
          ) : (
            <button
              key={item.key}
              className={`${styles.btn} ${active === item.key ? styles.active : ''}`}
              onClick={() => handleClick(item.key)}
            >
              {item.label}
            </button>
          )
        )}
      </div>
    </nav>
  );
}
