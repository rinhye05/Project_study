import styles from './InstructorSection.module.css'

const instructors = [
  { name: '김민지', subject: '문법', color: '#C0392B', students: '18K', rating: '4.9', title: 'TOPIK II 문법 전문가' },
  { name: '이준호', subject: '말하기', color: '#2980B9', students: '14K', rating: '4.8', title: '회화 집중 훈련' },
  { name: '박소연', subject: '쓰기', color: '#8E44AD', students: '11K', rating: '4.9', title: 'TOPIK 작문 고득점' },
  { name: '한태우', subject: '비즈니스', color: '#E67E22', students: '9K', rating: '4.7', title: '직장 한국어 실전' },
  { name: '최유나', subject: '문화', color: '#16A085', students: '22K', rating: '4.9', title: 'K-문화로 배우는 한국어' },
  { name: '신동호', subject: '입문', color: '#27AE60', students: '31K', rating: '4.8', title: '한글부터 시작하기' },
]

export default function InstructorSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          강사 라인업
          <span>원어민 및 전문 한국어 강사진</span>
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
                  <span className={styles.statVal}>{inst.rating}</span>
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