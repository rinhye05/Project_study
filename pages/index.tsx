import Head from 'next/head'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import CourseCard, { Course } from '../components/CourseCard'
import InstructorSection from '../components/InstructorSection'
import Footer from '../components/Footer'
import styles from './index.module.css'

const bestCourses: Course[] = [
  {
    id: 1, subject: '수학', subjectColor: '#E8002D',
    title: '[2026수능] 현우진의 수학의 바이블 - 킬러문항 완전정복',
    instructor: '현우진', level: '고3·재수', price: 59000, originalPrice: 89000, discount: 33,
    rating: 4.9, reviewCount: 28541, studentCount: '12.4만',
    tags: ['킬러문항', '확률과통계', '미적분'], isBest: true,
  },
  {
    id: 2, subject: '영어', subjectColor: '#0066CC',
    title: '[2026수능] 이명학의 수능 영어 1등급 - 독해 속도 혁명',
    instructor: '이명학', level: '고3·재수', price: 49000, originalPrice: 79000, discount: 38,
    rating: 4.8, reviewCount: 19283, studentCount: '8.7만',
    tags: ['독해', '빈칸추론', '어법'], isBest: true,
  },
  {
    id: 3, subject: '국어', subjectColor: '#FF6B00',
    title: '김동욱의 비문학 독해 완성 - 과학·기술 지문 정복',
    instructor: '김동욱', level: '고3·재수', price: 45000, originalPrice: 69000, discount: 34,
    rating: 4.9, reviewCount: 14920, studentCount: '6.2만',
    tags: ['비문학', '화법과작문', '언어'], isNew: true,
  },
  {
    id: 4, subject: '과학', subjectColor: '#00B050',
    title: '한석원의 물리학Ⅰ 개념완성 + 기출분석',
    instructor: '한석원', level: '고3', price: 55000, originalPrice: 85000, discount: 35,
    rating: 4.7, reviewCount: 8763, studentCount: '3.8만',
    tags: ['물리학', '역학', '전기'],
  },
  {
    id: 5, subject: '한국사', subjectColor: '#7B2FBE',
    title: '이다지의 한국사 개념완성 - 스토리텔링으로 외우는 한국사',
    instructor: '이다지', level: '전학년', price: 0, originalPrice: 49000, discount: 100,
    rating: 4.9, reviewCount: 35221, studentCount: '18만',
    tags: ['전근대', '근현대', '한능검'], isFree: true, isBest: true,
  },
  {
    id: 6, subject: '영어', subjectColor: '#0066CC',
    title: '조정식의 문법·어법 완벽정리 - 출제 패턴 집중 공략',
    instructor: '조정식', level: '고1·고2', price: 39000, originalPrice: 59000, discount: 33,
    rating: 4.8, reviewCount: 12004, studentCount: '5.1만',
    tags: ['문법', '어법', '수능기초'], isNew: true,
  },
]

const notice = [
  { label: '공지', text: '7월 TOPIK 시험 접수 일정 안내', date: '05.20' },
  { label: '이벤트', text: '여름 특별 패키지 전 레벨 20% 할인', date: '05.19' },
  { label: '공지', text: '비즈니스 한국어 신규 강좌 오픈', date: '05.18' },
  { label: '이벤트', text: '신규 회원 첫 강좌 50% 할인 쿠폰 지급', date: '05.17' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>메가스터디 - 대한민국 1위 온라인 강의</title>
        <meta name="description" content="수능, 내신, 검정고시까지 대한민국 최고의 선생님들과 함께하는 온라인 강의" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroBanner />

      <main>
        {/* 공지사항 + 빠른 링크 */}
        <div className="container">
          <div className={styles.utilRow}>
            <div className={styles.noticeBox}>
              <div className={styles.noticeTitle}>공지사항</div>
              <ul className={styles.noticeList}>
                {notice.map((n, i) => (
                  <li key={i} className={styles.noticeItem}>
                    <span className={`badge badge-${n.label === '이벤트' ? 'red' : 'gray'} ${styles.noticeBadge}`}>
                      {n.label}
                    </span>
                    <a href="#" className={styles.noticeText}>{n.text}</a>
                    <span className={styles.noticeDate}>{n.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.quickLinks}>
              {[
                { icon: null, label: '내 강좌', sub: '수강 현황 관리' },
                { icon: null, label: '레벨 테스트', sub: '나의 레벨 확인' },
                { icon: null, label: '교재 구매', sub: 'TOPIK 교재 할인' },
                { icon: null, label: '모의 TOPIK', sub: '실전 시험 연습' },
              ].map(q => (
                <a key={q.label} href="#" className={styles.quickItem}>
                  <span className={styles.quickIcon}>{q.icon}</span>
                  <span className={styles.quickLabel}>{q.label}</span>
                  <span className={styles.quickSub}>{q.sub}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 베스트 강좌 */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              베스트 강좌
              <span>이번 주 가장 많이 찾는 강좌</span>
            </h2>
            <div className={styles.courseGrid}>
              {bestCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className={styles.moreWrap}>
              <button className={styles.moreBtn}>전체 강좌 보기</button>
            </div>
          </div>
        </section>

        {/* 스타강사 */}
        <InstructorSection />

        {/* 이벤트 배너 */}
        <section className={styles.eventSection}>
          <div className="container">
            <div className={styles.eventGrid}>
              <div className={styles.eventCard} style={{ background: 'linear-gradient(135deg, #0A1628, #1A2B4A)' }}>
                <span className={`badge badge-gold`}>LIMITED</span>
                <h3>수능 100일 전<br/><strong>패키지 특가</strong></h3>
                <p>전 과목 묶음 구매 시 최대 40% 할인</p>
                <button className={styles.eventBtn}>지금 신청하기 →</button>
              </div>
              <div className={styles.eventCard} style={{ background: 'linear-gradient(135deg, #1A0610, #2D0A1A)' }}>
                <span className={`badge badge-green`}>무료특강</span>
                <h3>6월 모의평가<br/><strong>분석 특강</strong></h3>
                <p>시험 다음날 오후 2시 LIVE 무료 진행</p>
                <button className={styles.eventBtn}>알림 신청 →</button>
              </div>
              <div className={styles.eventCard} style={{ background: 'linear-gradient(135deg, #0D1A00, #162900)' }}>
                <span className={`badge badge-blue`}>신규회원</span>
                <h3>첫 강좌<br/><strong>50% 쿠폰</strong></h3>
                <p>가입 즉시 사용 가능한 할인 쿠폰 지급</p>
                <button className={styles.eventBtn}>쿠폰 받기 →</button>
              </div>
            </div>
          </div>
        </section>

        {/* 수강 후기 */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              생생 수강 후기
              <span>실제 수강생들의 성적 변화</span>
            </h2>
            <div className={styles.reviewGrid}>
              {[
                { name: '김*민', subject: '수학', score: '4등급 → 1등급', instructor: '현우진', text: '처음엔 반신반의했는데 개념 설명이 너무 명확해서 킬러문항이 풀리기 시작했어요. 3개월 만에 1등급 달성했습니다!', stars: 5 },
                { name: '이*현', subject: '영어', score: '3등급 → 1등급', instructor: '이명학', text: '독해 시간이 항상 부족했는데 선생님 방법론 따라하니까 시간 내에 다 풀 수 있게 됐어요. 진짜 효과 있어요.', stars: 5 },
                { name: '박*서', subject: '국어', score: '2등급 → 1등급', instructor: '김동욱', text: '비문학 지문이 두렵지 않아졌어요. 특히 과학 지문 대처법이 정말 좋았습니다. 강추!', stars: 5 },
              ].map((r, i) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewer}>
                      <div className={styles.reviewerAvatar}>{r.name[0]}</div>
                      <div>
                        <span className={styles.reviewerName}>{r.name}</span>
                        <span className={styles.reviewerSub}>{r.instructor} 선생님 · {r.subject}</span>
                      </div>
                    </div>
                    <span className={styles.scoreChange}>{r.score}</span>
                  </div>
                  <div className={styles.reviewStars}>{'★'.repeat(r.stars)}</div>
                  <p className={styles.reviewText}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
