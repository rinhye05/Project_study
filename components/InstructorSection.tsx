import styles from './InstructorSection.module.css'

const instructors = [
  { name: '현우진', subject: '수학', color: '#E8002D', students: '58만', rating: '4.9', title: '수학의 神' },
  { name: '이명학', subject: '영어', color: '#0066CC', students: '42만', rating: '4.8', title: '영어 1등급 제조기' },
  { name: '김동욱', subject: '국어', color: '#FF6B00', students: '35만', rating: '4.9', title: '국어 독해의 달인' },
  { name: '한석원', subject: '과학', color: '#00B050', students: '28만', rating: '4.7', title: '통합과학 완벽정복' },
  { name: '이다지', subject: '한국사', color: '#7B2FBE', students: '45만', rating: '4.9', title: '한국사 스토리텔러' },
  { name: '신승범', subject: '사회', color: '#0066CC', students: '22만', rating: '4.8', title: '사회탐구 전문가' },
]

export default function InstructorSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          스타강사 라인업
          <span>전국 최고의 선생님들</span>
        </h2>
        <div className={styles.grid}>
          {instructors.map(inst => (
            <div key={inst.name} className={styles.card}>
              <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${inst.color}22, ${inst.color}44)`, borderColor: inst.color }}>
                <span className={styles.avatarText} style={{ color: inst.color }}>{inst.name[0]}</span>
              </div>
              <span className={styles.subject} style={{ background: inst.color }}>{inst.subject}</span>
              <h3 className={styles.name}>{inst.name}</h3>
              <p className={styles.title}>{inst.title}</p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statVal}>{inst.students}</span>
                  <span className={styles.statKey}>수강생</span>
                </div>
                <div className={styles.divider}/>
                <div className={styles.stat}>
                  <span className={styles.statVal}>★{inst.rating}</span>
                  <span className={styles.statKey}>평점</span>
                </div>
              </div>
              <button className={styles.btn} style={{ borderColor: inst.color, color: inst.color }}>
                강좌 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
