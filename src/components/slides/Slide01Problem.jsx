import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';

export default function Slide01Problem() {
  const { nextSlide } = usePresentation();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '90px 60px 40px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '640px' }}>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              margin: '0 0 10px 0'
            }}
          >
            TRI—SHIELD
          </h1>

          <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#FF5500', marginBottom: '8px' }}>
            The World's First Liquid-Cooled Smart Phone Back Cover
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.5, maxWidth: '580px' }}>
            Introducing <strong>TRI—SHIELD</strong>: an advanced hardware phone case designed with a sealed liquid thermal chamber, kinetic shock matrix, and waterproof edge gasket.
          </p>
        </div>

        {/* Slide Tracker */}
        <div
          className="glass-panel"
          style={{
            padding: '14px 20px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', fontWeight: 700 }}>
            SLIDE 01 OF 07
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            Brand Introduction
          </div>
        </div>
      </div>

      {/* Center Showcase: Minimal SVG Line-Art Outline of iPhone Case with 3 Camera Lenses */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {/* SVG Minimal Line Art Phone Case Outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            width: '210px',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Ambient Glow behind outline */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '40px',
              background: 'radial-gradient(circle, rgba(255,85,0,0.2) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(15px)',
              pointerEvents: 'none'
            }}
          />

          <svg
            viewBox="0 0 200 400"
            style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 12px rgba(255,85,0,0.6))' }}
          >
            {/* Outer Case Rim Outline */}
            <rect
              x="10"
              y="10"
              width="180"
              height="380"
              rx="38"
              ry="38"
              fill="none"
              stroke="#FF5500"
              strokeWidth="2.5"
              strokeDasharray="1000"
            />

            {/* Inner Precision Bezel Lip Outline */}
            <rect
              x="16"
              y="16"
              width="168"
              height="368"
              rx="32"
              ry="32"
              fill="none"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="1.2"
            />

            {/* iPhone 3-Camera Island Rounded Square Outline */}
            <rect
              x="28"
              y="28"
              width="68"
              height="74"
              rx="16"
              ry="16"
              fill="rgba(255, 85, 0, 0.06)"
              stroke="#FF5500"
              strokeWidth="1.8"
            />

            {/* Lens 1 Circle (Top Left) */}
            <circle cx="46" cy="46" r="12" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="46" cy="46" r="6" fill="none" stroke="#FF5500" strokeWidth="1.2" />

            {/* Lens 2 Circle (Bottom Left) */}
            <circle cx="46" cy="84" r="12" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="46" cy="84" r="6" fill="none" stroke="#FF5500" strokeWidth="1.2" />

            {/* Lens 3 Circle (Middle Right) */}
            <circle cx="76" cy="65" r="12" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="76" cy="65" r="6" fill="none" stroke="#FF5500" strokeWidth="1.2" />

            {/* Flash & LiDAR Sensor Circles */}
            <circle cx="76" cy="40" r="3.5" fill="#FF5500" />
            <circle cx="76" cy="90" r="3" fill="rgba(255,255,255,0.4)" />

            {/* Side Action & Volume Button Outlines */}
            <rect x="4" y="90" width="4" height="24" rx="2" fill="#FF5500" />
            <rect x="4" y="124" width="4" height="24" rx="2" fill="#FF5500" />
            <rect x="192" y="105" width="4" height="36" rx="2" fill="#FF5500" />

            {/* Center Brand Outline Stamp */}
            <path
              d="M 100 190 L 115 205 L 100 220 L 85 205 Z"
              fill="none"
              stroke="rgba(255,85,0,0.5)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        {/* Quick Intro Summary Card */}
        <div style={{ maxWidth: '420px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              background: 'rgba(12, 14, 20, 0.88)',
              borderColor: 'rgba(255, 85, 0, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Sparkles size={16} color="#FF5500" />
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FF5500', fontWeight: 700 }}>
                MINIMAL OUTLINE CAD SPECS
              </span>
            </div>

            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              3-Lens Precision Cutout
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Engineered specifically for modern 3-camera iPhone layouts. Designed with raised lip protection to keep camera lenses safe when set down on flat surfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: 'var(--text-dim)' }}>
          BRAND OVERVIEW & MINIMAL OUTLINE GEOMETRY
        </div>

        <div
          onClick={nextSlide}
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.75rem',
            color: '#FF5500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'auto',
            fontWeight: 700
          }}
        >
          <span>NEXT: SLIDE 02 (THE MOTIVE & CAUSE)</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </div>
  );
}
