import Link from 'next/link';
import styles from '../styles/NoticeBar.module.css';

export default function NoticeBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/notice" className={styles.label}>공지</Link>
        <Link href="/notice" className={styles.text}>
          <strong>2025년 제89회 TOPIK 시험 접수</strong>가 시작되었습니다. 시험일: 2025년 10월 19일
          &nbsp;·&nbsp; Arirang Class 모의고사 특강 무료 제공 중
        </Link>
      </div>
    </div>
  );
}