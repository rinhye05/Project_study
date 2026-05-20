'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const slides = [
  {
    type: 'dark',
    tag: '2025 TOPIK 완전 정복',
    tagInvert: false,
    title: '한국어의 깊이를\n더하다',
    titleSub: 'Deepen your Korean, one level at a time.',
    desc: 'TOPIK I · II 완벽 대비 커리큘럼으로\n입문부터 고급까지 체계적으로 학습하세요.',
    cta: '지금 시작하기',
    ctaHref: '#courses',
    deco: '한',
  },
  {
    type: 'gray',
    tag: '신규 강좌 오픈',
    tagInvert: false,
    title: '이수민 선생님의\nTOPIK II 쓰기 집중반',
    titleSub: 'Writing intensive for TOPIK II — now open.',
    desc: '쓰기 54점 목표! 고득점 작문 전략과\n실전 첨삭으로 완성하는 합격의 길.',
    cta: '강좌 살펴보기',
    ctaHref: '#',
    deco: '글',
  },
  {
    type: 'white',
    tag: '기간 한정 이벤트',
    tagInvert: true,
    title: '첫 수강생 30% 할인\n지금 바로 등록하세요',
    titleSub: 'Limited-time offer for first-time learners.',
    desc: 'Arirang Class 전 강좌 대상 · 선착순 500명 한정\n지금 회원가입하고 할인 혜택을 받으세요.',
    cta: '할인 받기',
    ctaHref: '#',
    deco: '%',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goSlide = (n) => {
    setCurrent(n);
    resetTimer();
  };

  const moveSlide = (dir) => {
    setCurrent((c) => (c + dir + slides.length) % slides.length);
    resetTimer();
  };

  const isWhite = slides[current].type === 'white';

  return (
    <section className={styles.hero}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${
              slide.type === 'dark'
                ? styles.slideDark
                : slide.type === 'gray'
                ? styles.slideGray
                : styles.slideWhite
            }`}
          >
            <div className={styles.content}>
              <span className={`${styles.tag} ${slide.tagInvert ? styles.tagInvert : ''}`}>
                {slide.tag}
              </span>
              <h1 className={`${styles.title} ${slide.type === 'white' ? styles.titleDark : ''}`}>
                {slide.title.split('\n').map((line, j) => (
                  <span key={j} style={{ display: 'block' }}>{line}</span>
                ))}
                <em className={styles.titleSub}>{slide.titleSub}</em>
              </h1>
              <p className={`${styles.desc} ${slide.type === 'white' ? styles.descDark : ''}`}>
                {slide.desc.split('\n').map((line, j) => (
                  <span key={j} style={{ display: 'block' }}>{line}</span>
                ))}
              </p>
              <Link
                href={slide.ctaHref}
                className={`${styles.cta} ${slide.type === 'white' ? styles.ctaInvert : ''}`}
              >
                {slide.cta}
              </Link>
            </div>

            <div className={styles.deco}>
              <div className={`${styles.decoText} ${slide.type === 'white' ? styles.decoTextDark : ''}`}>
                {slide.deco}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.arrow} ${isWhite ? styles.arrowDark : ''}`}
          onClick={() => moveSlide(-1)}
          aria-label="이전"
        >
          &#8592;
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${isWhite ? styles.dotDark : ''} ${current === i ? styles.active : ''}`}
              onClick={() => goSlide(i)}
              aria-label={`${i + 1}번 슬라이드`}
            />
          ))}
        </div>
        <button
          className={`${styles.arrow} ${isWhite ? styles.arrowDark : ''}`}
          onClick={() => moveSlide(1)}
          aria-label="다음"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
