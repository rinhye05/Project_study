# 메가스터디 인강 플랫폼 클론

메가스터디 스타일의 온라인 강의 플랫폼 프론트엔드입니다.

## 기술 스택
- **Next.js 14** (Pages Router)
- **TypeScript**
- **CSS Modules**
- **Vercel** 배포

## 로컬 실행

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Vercel 배포 방법

### 방법 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # 개발 배포 (preview)
vercel --prod   # 프로덕션 배포
```

### 방법 2: GitHub 연동 (권장)

1. 이 프로젝트를 GitHub 레포에 푸시
   ```bash
   git init
   git add .
   git commit -m "init: 메가스터디 인강 플랫폼"
   git remote add origin https://github.com/YOUR_USERNAME/megastudy-clone.git
   git push -u origin main
   ```

2. [vercel.com](https://vercel.com) 접속 → New Project
3. GitHub 레포 선택 → Import
4. Framework: **Next.js** (자동 감지됨)
5. Deploy 클릭

이후 `main` 브랜치에 push할 때마다 자동 배포됩니다.

## 프로젝트 구조

```
megastudy-clone/
├── components/
│   ├── Header.tsx / .module.css       # 상단 헤더 (검색, 과목 네비)
│   ├── HeroBanner.tsx / .module.css   # 메인 배너 슬라이더
│   ├── CourseCard.tsx / .module.css   # 강좌 카드
│   ├── InstructorSection.tsx / .css   # 스타강사 섹션
│   └── Footer.tsx / .module.css       # 푸터
├── pages/
│   ├── _app.tsx                       # 앱 진입점
│   ├── index.tsx                      # 메인 홈페이지
│   └── index.module.css               # 홈 스타일
├── styles/
│   └── globals.css                    # 전역 스타일 & CSS 변수
├── vercel.json                        # Vercel 배포 설정
└── package.json
```

## 추가 개발 방향

- `pages/courses/[id].tsx` — 강좌 상세 페이지
- `pages/instructor/[name].tsx` — 강사 상세 페이지
- `pages/cart.tsx` — 장바구니
- `pages/mypage.tsx` — 마이페이지
- `lib/api.ts` — 백엔드 API 연동 (강좌 데이터)
- Next.js API Routes로 간단한 서버 기능 추가 가능
