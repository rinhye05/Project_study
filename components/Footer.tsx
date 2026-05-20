import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}><span>MEGA</span>스터디</div>
            <p className={styles.tagline}>대한민국 1위 온라인 교육 플랫폼</p>
            <div className={styles.social}>
              {['유튜브', '인스타', '카카오', '네이버'].map(s => (
                <a key={s} href="#" className={styles.socialLink}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {[
              { title: '회사소개', items: ['회사 정보', '채용 공고', '투자자 관계', '언론 보도'] },
              { title: '서비스', items: ['강좌 소개', '교재 구매', '모의고사', '커리큘럼'] },
              { title: '고객지원', items: ['자주 묻는 질문', '1:1 문의', '공지사항', '수강 후기'] },
            ].map(group => (
              <div key={group.title} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul>
                  {group.items.map(item => (
                    <li key={item}><a href="#" className={styles.linkItem}>{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            (주)메가스터디교육 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890
            | 통신판매업신고: 제2024-서울강남-00000호 | 개인정보보호책임자: 김개인
          </p>
          <p className={styles.copy}>© 2025 MegaStudy Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
