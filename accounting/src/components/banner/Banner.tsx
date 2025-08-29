import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from "./Banner.module.scss";

import { MainTitle } from "../main-title/MainTitle";
import { SLIDES } from './Constants';


export const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) {
      return;
    }

    const startAutoPlay = () => {
      if (autoPlayRef.current !== null) {
        window.clearTimeout(autoPlayRef.current);
      }

      autoPlayRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current !== null) {
        window.clearTimeout(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, nextSlide, currentSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
    if (autoPlayRef.current !== null) {
      window.clearTimeout(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  useEffect(() => {
    return () => {
      if (autoPlayRef.current !== null) {
        window.clearTimeout(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.banner}>
      <div 
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.slider}>
          <div 
            className={styles.slidesWrapper}
            style={{ 
              transform: `translateX(${-currentSlide * 100}%)`
            }}
          >
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <img 
                  className={styles.image} 
                  src={slide.image} 
                  alt={`Слайд ${index + 1}: ${slide.title}`} 
                />
              </div>
            ))}
          </div>
        </div>
        <MainTitle
          key={currentSlide}
          title={SLIDES[currentSlide].title}
          className={styles.title}
        />
      </div>
      <div className={styles.pagination}>
        {SLIDES.map((_, index) => (
          <div
            key={index}
            className={`${styles.dots} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};
