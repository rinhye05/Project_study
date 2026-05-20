import PageLayout from '../components/PageLayout';
import styles from '../styles/NoticePage.module.css';

export const metadata = { title: '공지사항 - Arirang Class' };

const notices = [
  { id: 1, type: '공지', title: '2025년 제89회 TOPIK 시험 접수 안내', date: '2025.08.01', important: true },
  { id: 2, type: '이벤트', title: '신규 회원가입 30% 할인 이벤트 (선착순 500명)', date: '2025.07.28', important: true },
  { id: 3, type: '공지', title: '이수민 선생님 TOPIK II 쓰기 집중반 신규 오픈', date: '2025.07.20', important: false },
  { id: 4, type: '공지', title: '강의 서비스 점검 안내 (7월 15일 새벽 2~4시)', date: '2025.07.14', important: false },
  { id: 5, type: '이벤트', title: '여름 특강 패키지 출시 — TOPIK I+II 번들 할인', date: '2025.07.10', important: false },
  { id: 6, type: '공지', title: '교재 개정판 출시 안내 — 2025년 하반기 기준 반영', date: '2025.07.05', important: false },
  { id: 7, type: '공지', title: '모의고사 특강 무료 제공 안내', date: '2025.06.30', important: false },
  { id: 8, type: '공지', title: '개인정보처리방침 개정 안내', date: '2025.06.20', important: false },
];

export default function NoticePage() {
  return (
    <PageLayout>
      <div className={styles.wrap}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>공지사항</h1>
          <p className={styles.pageDesc}>Arirang Class의 새로운 소식을 확인하세요</p>
        </div>

        <ul className={styles.list}>
          {notices.map((n) => (
            <li key={n.id} className={`${styles.item} ${n.important ? styles.important : ''}`}>
              <span className={`${styles.type} ${n.type === '이벤트' ? styles.typeEvent : ''}`}>
                {n.type}
              </span>
              <span className={styles.title}>{n.title}</span>
              <span className={styles.date}>{n.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}