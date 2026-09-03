import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, Droplets, Zap, ArrowDown, Sparkles } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';

export default function Slide01Problem() {
  const { nextSlide } = usePresentation();

  const usps = [
    {
      icon: Flame,
      color: '#FF5500',
      uspNum: 'USP 01',
      title: 'Dielectric Liquid Thermal Core',
      metric: '0.4mm Sealed Chamber',
      desc: 'Stationary fluid core acts as a high-capacitance thermal buffer that absorbs CPU junction heat and insulates against direct sun radiation.'
    },
    {
      icon: Zap,
      color: '#FFAA00',
      uspNum: 'USP 02',
      title: '3.5m Kinetic Shock Lattice',
      metric: '32-Cell Honeycomb Grid',
      desc: 'High-durometer TPE elastomer matrix channels corner impact shockwaves laterally away from fragile device rear glass.'
    },
    {
      icon: Droplets,
      color: '#0088FF',
      uspNum: 'USP 03',
      title: 'Fluorosilicone Hydro-Gasket',
      metric: 'IP68 Edge Barrier',
      desc: 'Precision perimeter sealing lip keeps fine dust, water splashes, and high environmental humidity from reaching device internals.'
    }
  ];

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
      {/* Brand Hero Header & Tagline */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '720px' }}>
          <div
            className="mono-tag"
            style={{
              marginBottom: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '12px',
              background: 'rgba(255, 85, 0, 0.08)',
              border: '1px solid rgba(255, 85, 0, 0.2)'
            }}
          >
            <Sparkles size={12} color="#FF5500" />
            <span>ADVANCED HARDWARE DEFENSE</span>
          </div>

          {/* Brand Name */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              margin: '0 0 12px 0'
            }}
          >
            TRI—SHIELD
          </h1>

          {/* Brand Tagline & Primary USP */}
          <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#FF5500', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            Invisible Technology. Absolute Protection.
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.5, maxWidth: '620px' }}>
            The world's first luxury phone back cover engineered with a sealed liquid thermal chamber, pyrolytic graphite spreader, and 3.5m kinetic impact matrix.
          </p>
        </div>

        {/* Brand Specs Badge */}
        <div
          className="glass-panel"
          style={{
            padding: '16px 24px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.85)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            boxShadow: '0 0 25px rgba(255,85,0,0.15)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', marginBottom: '4px' }}>
            <Shield size={16} color="#FF5500" />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.1em' }}>
              TRI—SHIELD
            </span>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FF5500', fontWeight: 700 }}>
            3-IN-1 PROTECTION MATRIX
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            PATENT PENDING HARDWARE
          </div>
        </div>
      </div>

      {/* 3 Core USP Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {usps.map((usp, idx) => {
          const Icon = usp.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{
                padding: '26px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${usp.color}15`, border: `1px solid ${usp.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={usp.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: usp.color, fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: `${usp.color}12`, border: `1px solid ${usp.color}30` }}>
                  {usp.uspNum}
                </span>
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                {usp.title}
              </div>

              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FF5500', marginBottom: '10px', fontWeight: 600 }}>
                {usp.metric}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {usp.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          className="glass-panel"
          style={{
            padding: '10px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            background: 'rgba(10, 11, 15, 0.9)'
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.78rem', color: '#FF5500', letterSpacing: '0.15em', fontWeight: 700 }}>LIQUID THERMAL</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.78rem', color: '#FFFFFF', letterSpacing: '0.15em', fontWeight: 700 }}>3.5M DROP GRID</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.78rem', color: '#0088FF', letterSpacing: '0.15em', fontWeight: 700 }}>IP68 GASKET</span>
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
          <span>EXPLORE PRODUCT DISCOVERY</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </div>
  );
}
