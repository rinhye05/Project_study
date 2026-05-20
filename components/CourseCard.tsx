import styles from './CourseCard.module.css'

export type Course = {
  id: number
  subject: string
  subjectColor: string
  title: string
  instructor: string
  topikLevel: string
  levelNum?: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviewCount: number
  studentCount: string
  tags: string[]
  isNew?: boolean
  isBest?: boolean
  isFree?: boolean
}

interface Props { course: Course }

export default function CourseCard({ course }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb} style={{ background: getBg(course.subjectColor) }}>
        <span className={styles.subjectBadge} style={{ background: course.subjectColor }}>
          {course.subject}
        </span>
        {course.isBest && <span className={`${styles.topBadge} ${styles.bestBadge}`}>BEST</span>}
        {course.isNew && <span className={`${styles.topBadge} ${styles.newBadge}`}>NEW</span>}
        <div className={styles.thumbContent}>
          <div className={styles.thumbIcon}>{getIcon(course.subject)}</div>
          <div className={styles.thumbInstructor}>{course.instructor}</div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.level}>{course.topikLevel} {course.levelNum}</span>
          <span className={styles.students}>{course.studentCount}명</span>
        </div>

        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.instructor}>{course.instructor} 강사</p>

        <div className={styles.tags}>
          {course.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.rating}>
          <span className={styles.stars}>{'★'.repeat(Math.floor(course.rating))}</span>
          <span className={styles.ratingNum}>{course.rating}</span>
          <span className={styles.reviewCount}>({course.reviewCount.toLocaleString()})</span>
        </div>

        <div className={styles.price}>
          {course.isFree ? (
            <span className={styles.free}>무료</span>
          ) : (
            <>
              <span className={styles.discount}>{course.discount}%</span>
              <span className={styles.currentPrice}>{course.price.toLocaleString()}원</span>
              <span className={styles.originalPrice}>{course.originalPrice.toLocaleString()}원</span>
            </>
          )}
        </div>

        <button className={styles.cartBtn}>장바구니 담기</button>
      </div>
    </div>
  )
}

function getBg(color: string) {
  const map: Record<string, string> = {
    '#C0392B': 'linear-gradient(135deg, #1A0610 0%, #2D0A1A 100%)',
    '#2980B9': 'linear-gradient(135deg, #061228 0%, #0A1F42 100%)',
    '#8E44AD': 'linear-gradient(135deg, #120A1A 0%, #1E0E2D 100%)',
    '#E67E22': 'linear-gradient(135deg, #1A0D00 0%, #2D1600 100%)',
    '#16A085': 'linear-gradient(135deg, #001A14 0%, #002D24 100%)',
    '#27AE60': 'linear-gradient(135deg, #001A0D 0%, #002D17 100%)',
  }
  return map[color] || 'linear-gradient(135deg, #111 0%, #222 100%)'
}

function getIcon(subject: string) {
  const map: Record<string, string> = {
    'TOPIK': 'T',
    '말하기': '話',
    '쓰기': '筆',
    '비즈니스': 'B',
    '문화': '韓',
    '입문': '가',
  }
  return map[subject] || '語'
}