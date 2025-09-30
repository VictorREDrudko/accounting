import React, { useCallback, useEffect, useRef,useState } from 'react';

import { MainTitle } from '../main-title/MainTitle';
import styles from './Banner.module.scss';
import { SLIDES, type SlideType } from './Constants';


export const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Сбрасываем состояние transitioning после анимации
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [currentSlide, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, [isTransitioning]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current !== null) {
      window.clearTimeout(autoPlayRef.current);
    }

    autoPlayRef.current = window.setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  useEffect(() => {
    if (!isAutoPlay) {
      return;
    }
    startAutoPlay();

    return () => {
      if (autoPlayRef.current !== null) {
        window.clearTimeout(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, startAutoPlay, currentSlide]);

  const handleMouseEnter = useCallback(() => {
    setIsAutoPlay(false);
    if (autoPlayRef.current !== null) {
      window.clearTimeout(autoPlayRef.current);
    }
  }, []);

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

  const renderSlideContent = useCallback((slide: SlideType, index: number) => {
    if (slide.type === 'image') {
      return (
        <img 
          className={styles.image} 
          src={slide.content as string} 
          alt={`Слайд ${index + 1}: ${slide.title}`} 
        />
      );
    } else {
      const SlideComponent = slide.content as React.ComponentType;
      // этот key мне нужен для перерендера слайда, чтобы началась анимация заново
      return <SlideComponent key={`${slide.id}-${currentSlide}`} />;
    }
  }, [currentSlide]);

  const getCurrentTitle = useCallback((): string => {
    const currentSlideData = SLIDES[currentSlide];
    return currentSlideData.type === 'image'
      && currentSlideData.title
      ? currentSlideData.title
      : '';
  }, [currentSlide]);

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
              transform: `translateX(${-currentSlide * 100}%)`,
            }}
          >
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                {renderSlideContent(slide, index)}
              </div>
            ))}
          </div>
        </div>
        {/* Показываем MainTitle только для image слайдов */}
        {SLIDES[currentSlide].type === 'image' && getCurrentTitle() && (
          <MainTitle
            key={currentSlide}
            title={getCurrentTitle()}
            className={styles.title}
          />
        )}
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
