import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation, SLIDE_COUNT, SLIDE_NAMES } from '../context/PresentationContext';
import { Shield, Sparkles, ChevronUp, ChevronDown, Sliders } from 'lucide-react';

export default function NavigationControls() {
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    openingDone,
    reducedMotion,
    setReducedMotion
  } = usePresentation();

  if (!openingDone) return null;

  const formattedSlideNum = String(currentSlide + 1).padStart(2, '0');
  const formattedTotal = String(SLIDE_COUNT).padStart(2, '0');

  return (
    <>
      {/* Top Header Navigation */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          pointerEvents: 'auto',
          background: 'linear-gradient(to bottom, rgba(5, 5, 7, 0.8) 0%, transparent 100%)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => goToSlide(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #FF5500 0%, #331100 100%)',
              border: '1px solid rgba(255, 85, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)'
            }}
          >
            <Shield size={16} color="#FFFFFF" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.25em',
                color: '#FFFFFF'
              }}
            >
              TRI—SHIELD
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '0.62rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em'
              }}
            >
              INVIS-LIQUID CORE
            </div>
          </div>
        </div>

        {/* Current Slide Category Title */}
        <div
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.75rem',
            color: 'var(--accent-orange)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500', boxShadow: '0 0 8px #FF5500' }}></span>
          {SLIDE_NAMES[currentSlide]}
        </div>

        {/* Right side controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Motion Toggle */}
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            title="Toggle Motion Reduction"
            style={{
              background: reducedMotion ? 'rgba(255,85,0,0.15)' : 'transparent',
              border: `1px solid ${reducedMotion ? '#FF5500' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '20px',
              padding: '6px 14px',
              color: reducedMotion ? '#FF5500' : 'var(--text-secondary)',
              fontSize: '0.7rem',
              fontFamily: "'Space Grotesk', monospace",
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 300ms ease'
            }}
          >
            <Sliders size={12} />
            {reducedMotion ? 'REDUCED MOTION' : 'CINEMATIC'}
          </button>

          {/* Key shortcut hint */}
          <div
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '0.68rem',
              color: 'var(--text-dim)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <kbd style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>↑</kbd>
            <kbd style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>↓</kbd>
            <span>NAVIGATE</span>
          </div>
        </div>
      </header>

      {/* Bottom Progress Bar & Slide Controller */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '70px',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          pointerEvents: 'auto',
          background: 'linear-gradient(to top, rgba(5, 5, 7, 0.8) 0%, transparent 100%)'
        }}
      >
        {/* Slide Numbers & Progress Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '1rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{ color: '#FF5500' }}>{formattedSlideNum}</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 6px' }}>/</span>
            <span style={{ color: 'var(--text-dim)' }}>{formattedTotal}</span>
          </div>

          {/* Thin Horizontal Progress Bar */}
          <div
            style={{
              width: '180px',
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = clickX / rect.width;
              const targetSlide = Math.floor(ratio * SLIDE_COUNT);
              goToSlide(targetSlide);
            }}
          >
            <motion.div
              style={{
                height: '100%',
                backgroundColor: '#FF5500',
                borderRadius: '2px',
                boxShadow: '0 0 10px #FF5500'
              }}
              animate={{
                width: `${((currentSlide + 1) / SLIDE_COUNT) * 100}%`
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Slide Selector Pill Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {Array.from({ length: SLIDE_COUNT }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              title={`Jump to slide ${idx + 1}`}
              style={{
                width: currentSlide === idx ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentSlide === idx ? '#FF5500' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: currentSlide === idx ? '0 0 10px rgba(255, 85, 0, 0.6)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Arrow Up/Down buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: currentSlide === 0 ? 'rgba(255,255,255,0.2)' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 200ms ease'
            }}
          >
            <ChevronUp size={18} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === SLIDE_COUNT - 1}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: currentSlide === SLIDE_COUNT - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(255, 85, 0, 0.2)',
              border: `1px solid ${currentSlide === SLIDE_COUNT - 1 ? 'rgba(255,255,255,0.1)' : '#FF5500'}`,
              color: currentSlide === SLIDE_COUNT - 1 ? 'rgba(255,255,255,0.2)' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlide === SLIDE_COUNT - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 200ms ease',
              boxShadow: currentSlide === SLIDE_COUNT - 1 ? 'none' : '0 0 12px rgba(255, 85, 0, 0.4)'
            }}
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}
