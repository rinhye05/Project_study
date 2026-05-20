'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail.tab);
      setIsOpen(true);
    };
    window.addEventListener('openModal', handler);

    const keyHandler = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('openModal', handler);
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {activeTab === 'login' ? '로그인' : '회원가입'}
          </h2>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            &#215;
          </button>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
            onClick={() => setActiveTab('login')}
          >
            로그인
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'register' ? styles.active : ''}`}
            onClick={() => setActiveTab('register')}
          >
            회원가입
          </button>
        </div>

        <div className={styles.body}>
          {/* LOGIN */}
          <div className={`${styles.panel} ${activeTab !== 'login' ? styles.hidden : ''}`}>
            <div className={styles.formGroup}>
              <label className={styles.label}>이메일</label>
              <input className={styles.input} type="email" placeholder="이메일 주소를 입력하세요" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>비밀번호</label>
              <input className={styles.input} type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <button className={styles.btnFull}>로그인</button>
            <div className={styles.divider}>또는</div>
            <button className={styles.btnSocial}>Google 계정으로 로그인</button>
            <p className={styles.forgot}>
              <a href="#">비밀번호를 잊으셨나요?</a>
            </p>
          </div>

          {/* REGISTER */}
          <div className={`${styles.panel} ${activeTab !== 'register' ? styles.hidden : ''}`}>
            <div className={styles.formGroup}>
              <label className={styles.label}>이름</label>
              <input className={styles.input} type="text" placeholder="이름을 입력하세요" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>이메일</label>
              <input className={styles.input} type="email" placeholder="이메일 주소를 입력하세요" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>비밀번호</label>
              <input className={styles.input} type="password" placeholder="8자 이상 입력하세요" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>모국어 / Native Language</label>
              <select className={styles.input} style={{ cursor: 'pointer' }}>
                <option value="">선택하세요</option>
                <option>English</option>
                <option>中文</option>
                <option>日本語</option>
                <option>Русский</option>
                <option>Español</option>
                <option>Français</option>
                <option>기타 / Other</option>
              </select>
            </div>
            <button className={styles.btnFull}>회원가입</button>
            <p className={styles.agreement}>
              가입 시 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에<br />
              동의하는 것으로 간주됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
