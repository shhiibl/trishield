import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PresentationContext = createContext();

export const SLIDE_COUNT = 7;

export const SLIDE_NAMES = [
  '01 / BRAND & INTRO',
  '02 / THE MOTIVE & CAUSE',
  '03 / 3D LAYER ANATOMY',
  '04 / ULTRA-SLIM 3D PROFILE',
  '05 / USES & APPLICATIONS',
  '06 / PROFIT CALCULATOR',
  '07 / CONCLUSION'
];

export function PresentationProvider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [openingDone, setOpeningDone] = useState(false);
  
  // Interactive slide states
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(0);
  
  // Mouse position for subtle 3D parallax (-1 to 1)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToSlide = useCallback((targetIndex) => {
    if (isNavigating || targetIndex === currentSlide || targetIndex < 0 || targetIndex >= SLIDE_COUNT) {
      return;
    }
    setIsNavigating(true);
    setCurrentSlide(targetIndex);
    setActiveFeature(null);

    // Lock navigation briefly during slide transition
    setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  }, [isNavigating, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [goToSlide, currentSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [goToSlide, currentSlide]);

  useEffect(() => {
    if (!openingDone) return;

    let wheelCooldown = false;

    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelCooldown || isNavigating) return;

      if (Math.abs(e.deltaY) > 20) {
        wheelCooldown = true;
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        setTimeout(() => {
          wheelCooldown = false;
        }, 700);
      }
    };

    const handleKeyDown = (e) => {
      if (isNavigating) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDE_COUNT - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openingDone, isNavigating, nextSlide, prevSlide, goToSlide]);

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        goToSlide,
        nextSlide,
        prevSlide,
        isNavigating,
        openingDone,
        setOpeningDone,
        activeFeature,
        setActiveFeature,
        hoveredLayer,
        setHoveredLayer,
        mousePos,
        reducedMotion,
        setReducedMotion
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  return useContext(PresentationContext);
}
