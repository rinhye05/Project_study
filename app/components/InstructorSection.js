import Link from 'next/link';
import styles from '../styles/InstructorSection.module.css';

const instructors = [
  { name: '강민재', tag: 'TOPIK II · 문법', initial: '강', bg: 'linear-gradient(160deg,#f0f0f0 0%,#d9d9d9 100%)' },
  { name: '정다은', tag: 'TOPIK I · 입문', initial: '정', bg: 'linear-gradient(160deg,#ebebeb 0%,#c8c8c8 100%)' },
  { name: '이수민', tag: 'TOPIK II · 쓰기', initial: '이', bg: 'linear-gradient(160deg,#f5f5f5 0%,#cfcfcf 100%)' },
  { name: 'Madina Tursunova', tag: '회화 · 발음', initial: 'M', bg: 'linear-gradient(160deg,#e8e8e8 0%,#cacaca 100%)' },
  { name: 'Daniel Lee', tag: '비즈니스 한국어', initial: 'D', bg: 'linear-gradient(160deg,#f0f0f0 0%,#d4d4d4 100%)' },
  { name: 'Emma Kim', tag: 'K-문화 · 회화', initial: 'E', bg: 'linear-gradient(160deg,#eeeeee 0%,#d0d0d0 100%)' },
];

export default function InstructorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>스타 강사진</h2>
          <p className={styles.sub}>Arirang Class 대표 강사들을 만나보세요</p>
        </div>
        <Link href="#" className={styles.viewAll}>전체 강사 보기 →</Link>
      </div>

      <div className={styles.grid}>
        {instructors.map((inst) => (
          <div key={inst.name} className={styles.card}>
            <div className={styles.avatar}>
              <div className={styles.bg} style={{ background: inst.bg }} />
              <div className={styles.initial}>{inst.initial}</div>
            </div>
            <p className={styles.name}>{inst.name}</p>
            <p className={styles.tag}>{inst.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
