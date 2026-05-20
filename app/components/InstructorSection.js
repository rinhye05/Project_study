import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/InstructorSection.module.css';

const instructors = [
  {
    name: '강민재',
    tag: 'TOPIK II · 문법',
    subject: '합격으로 가는 확실한 선택',
    img: '/images/instructors/kang-minjae.png',
    initial: '강',
    features: ['핵심을 꿰뚫는 강의', '빈틈없는 커리큘럼', '합격을 만드는 강의'],
  },
  {
    name: '정다은',
    tag: 'TOPIK I · 입문',
    subject: '개념을 이해하고, 실력으로 완성하는 강의',
    img: '/images/instructors/jeong-daeun.png',
    initial: '정',
    features: ['핵심을 꿰뚫는 강의', '빈틈없는 커리큘럼', '합격을 만드는 강의'],
  },
  {
    name: '이수민',
    tag: 'TOPIK I · 담당',
    subject: '시험에 딱 맞춘 전략으로 TOPIK I 완벽 대비',
    img: '/images/instructors/lee-sumin.png',
    initial: '이',
    features: ['TOPIK I 전문 강의', '쉽고 빠른 핵심 정리', '실전 문제 풀이 & 전략'],
  },
  {
    name: 'Madina Tursunova',
    tag: '회화 & 발음 교정 강사',
    subject: '영어가 들리고, 입이 트이는 진짜 회화',
    img: '/images/instructors/madina.png',
    initial: 'M',
    features: ['실전 회화 중심 수업', '정확한 발음 교정', '맞춤 피드백 & 코칭'],
  },
  {
    name: 'Daniel Lee',
    tag: '비즈니스 한국어 강사',
    subject: '글로벌 비즈니스 현장에서 바로 쓰는 한국어',
    img: '/images/instructors/daniel-lee.png',
    initial: 'D',
    features: ['실무 중심 비즈니스 한국어', '명확하고 자연스러운 표현', '글로벌 경험을 바탕으로'],
  },
  {
    name: 'Emma Kim',
    tag: 'K-문화 & 회화 강사',
    subject: '언어로 만나는 문화, 문화로 이어지는 우리',
    img: '/images/instructors/emma-kim.png',
    initial: 'E',
    features: ['자연스러운 회화 수업', 'K-문화로 배우는 한국어', '교포의 시선, 글로벌 감각'],
  },
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
            <div className={styles.photoWrap}>
              <Image
                src={inst.img}
                alt={inst.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div className={styles.fallback}>{inst.initial}</div>
              <div className={styles.overlay} />
              <div className={styles.photoBottom}>
                <p className={styles.photoName}>{inst.name}</p>
                <p className={styles.photoTag}>{inst.tag}</p>
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.subject}>{inst.subject}</p>
              <ul className={styles.features}>
                {inst.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
