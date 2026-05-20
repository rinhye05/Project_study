import PageLayout from '../components/PageLayout';
import styles from '../styles/BooksPage.module.css';
import Image from 'next/image';

export const metadata = { title: '교재 안내 - Arirang Class' };

const books = [
  { id: 1, level: 'TOPIK I', title: 'Arirang TOPIK I 완성 교재', desc: '1·2급 시험 완벽 대비 종합서. 어휘·문법·읽기·듣기 전 영역 수록.', instructor: '강민재', price: '22,000원', img: '/images/books/1.png' },
  { id: 2, level: '입문', title: 'Arirang 왕초보 한국어', desc: '한글부터 기초 회화까지. 외국인 학습자를 위한 가장 쉬운 한국어 입문서.', instructor: '정다은', price: '18,000원', img: '/images/books/2.png' },
  { id: 3, level: 'TOPIK II', title: 'Arirang TOPIK II 쓰기 전략서', desc: '고득점 작문을 위한 실전 전략. 유형별 모범 답안 및 첨삭 포인트 수록.', instructor: '이수민', price: '24,000원', img: '/images/books/3.png' },
  { id: 4, level: '회화', title: 'Arirang 실전 회화 워크북', desc: '발음 교정부터 자유 회화까지. 실생활 대화문과 오디오 QR 코드 제공.', instructor: 'Madina Tursunova', price: '20,000원', img: '/images/books/4.png' },
  { id: 5, level: '비즈니스', title: 'Arirang 비즈니스 한국어', desc: '직장인을 위한 실무 한국어. 이메일·회의·프레젠테이션 표현 총망라.', instructor: 'Daniel Lee', price: '26,000원', img: '/images/books/5.png' },
  { id: 6, level: 'K-문화', title: 'Arirang K-Culture 한국어', desc: '드라마·K-POP으로 배우는 생활 한국어. 문화 배경지식과 함께 학습.', instructor: 'Emma Kim', price: '19,000원', img: '/images/books/6.png' },
];

export default function BooksPage() {
  return (
    <PageLayout>
      <div className={styles.wrap}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>교재 안내</h1>
          <p className={styles.pageDesc}>Arirang Class 전용 교재로 더욱 체계적으로 학습하세요</p>
        </div>
        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.id} className={styles.card}>
              <div className={styles.cover}>
                <Image
                  src={book.img}
                  alt={book.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.info}>
                <span className={styles.levelBadge}>{book.level}</span>
                <p className={styles.title}>{book.title}</p>
                <p className={styles.desc}>{book.desc}</p>
                <div className={styles.footer}>
                  <span className={styles.instructor}>{book.instructor}</span>
                  <span className={styles.price}>{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}