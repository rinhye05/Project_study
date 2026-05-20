import styles from '../styles/StatsBar.module.css';

const stats = [
  { number: '127,000+', label: '누적 수강생' },
  { number: '98%', label: '수강생 만족도' },
  { number: '340+', label: '전체 강좌 수' },
  { number: '6', label: '스타 강사' },
];

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
