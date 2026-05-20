import PageLayout from '../components/PageLayout';
import styles from '../styles/ExamPage.module.css';

export const metadata = { title: '시험정보 - Arirang Class' };

const schedule = [
  { round: '제89회', date: '2025.10.19 (일)', reg: '2025.08.19 ~ 09.05', result: '2025.11.21' },
  { round: '제90회', date: '2026.01.18 (일)', reg: '2025.11.18 ~ 12.05', result: '2026.02.20' },
  { round: '제91회', date: '2026.04.19 (일)', reg: '2026.02.17 ~ 03.06', result: '2026.05.22' },
];

const levels = [
  { level: 'TOPIK I', grades: '1~2급', subjects: '읽기, 듣기', total: '200점', pass: '1급 80점 / 2급 140점' },
  { level: 'TOPIK II', grades: '3~6급', subjects: '읽기, 듣기, 쓰기', total: '300점', pass: '3급 120점 / 4급 150점 / 5급 190점 / 6급 230점' },
];

export default function ExamPage() {
  return (
    <PageLayout>
      <div className={styles.wrap}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>시험정보</h1>
          <p className={styles.pageDesc}>TOPIK 시험 일정 및 합격 기준을 확인하세요</p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2025~2026 시험 일정</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>회차</th><th>시험일</th><th>접수기간</th><th>성적발표</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s) => (
                  <tr key={s.round}>
                    <td>{s.round}</td><td>{s.date}</td><td>{s.reg}</td><td>{s.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>급수 구성 및 합격 기준</h2>
          <div className={styles.levelGrid}>
            {levels.map((l) => (
              <div key={l.level} className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelName}>{l.level}</span>
                  <span className={styles.levelGrades}>{l.grades}</span>
                </div>
                <dl className={styles.levelDl}>
                  <dt>시험 과목</dt><dd>{l.subjects}</dd>
                  <dt>총점</dt><dd>{l.total}</dd>
                  <dt>합격 기준</dt><dd>{l.pass}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>시험 준비 Tip</h2>
          <div className={styles.tipGrid}>
            {['최소 3개월 전부터 준비 시작', '기출문제 반복 풀이 필수', '듣기는 매일 꾸준히 연습', '쓰기는 첨삭 피드백이 핵심'].map((tip, i) => (
              <div key={i} className={styles.tipCard}>
                <span className={styles.tipNum}>0{i+1}</span>
                <p className={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}