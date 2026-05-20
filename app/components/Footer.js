import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.logo}>Arirang Class</Link>
            <p className={styles.desc}>
              한국어 토픽 전문 인강 플랫폼.<br />
              입문부터 6급까지, 당신의 한국어 여정을<br />
              Arirang Class와 함께하세요.
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>강좌</p>
            <ul>
              <li><Link href="#">TOPIK I (1-2급)</Link></li>
              <li><Link href="#">TOPIK II (3-6급)</Link></li>
              <li><Link href="#">입문 과정</Link></li>
              <li><Link href="#">회화 과정</Link></li>
              <li><Link href="#">비즈니스 한국어</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>서비스</p>
            <ul>
              <li><Link href="#">강사 소개</Link></li>
              <li><Link href="#">교재 안내</Link></li>
              <li><Link href="#">시험 일정</Link></li>
              <li><Link href="#">합격 후기</Link></li>
              <li><Link href="#">1:1 학습 상담</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>고객센터</p>
            <ul>
              <li><Link href="#">공지사항</Link></li>
              <li><Link href="#">자주 묻는 질문</Link></li>
              <li><Link href="#">이용약관</Link></li>
              <li><Link href="#">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 Arirang Class. All rights reserved.</span>
          <span>사업자등록번호: 000-00-00000 · 대표: 홍길동 · 서울특별시 중구 세종대로 110</span>
        </div>
      </div>
    </footer>
  );
}
