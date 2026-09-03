import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, Droplets, Zap, ArrowDown, User } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';

export default function Slide01Problem() {
  const { nextSlide } = usePresentation();

  const usps = [
    {
      icon: Flame,
      color: '#FF5500',
      tag: 'FEATURE 01',
      title: 'Liquid Cooling Chamber',
      simpleNote: 'Sealed liquid core absorbs phone heat and sunlight radiation.'
    },
    {
      icon: Zap,
      color: '#FFAA00',
      tag: 'FEATURE 02',
      title: '3.5m Drop Protection',
      simpleNote: '32 rubber honeycomb cells absorb and deflect impact force.'
    },
    {
      icon: Droplets,
      color: '#0088FF',
      tag: 'FEATURE 03',
      title: 'Water & Dust Gasket',
      simpleNote: 'Precision edge seal protects rear glass against water and dust.'
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
      {/* Header with Speaker Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '720px' }}>
          <div
            className="glass-panel"
            style={{
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(255, 85, 0, 0.12)',
              borderColor: 'rgba(255, 85, 0, 0.3)',
              pointerEvents: 'auto'
            }}
          >
            <User size={14} color="#FF5500" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', fontWeight: 800, color: '#FFFFFF' }}>
              PRESENTER 01 — BRAND OVERVIEW & UNIQUE VALUE
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: '0 0 10px 0'
            }}
          >
            TRI—SHIELD
          </h1>

          <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FF5500', marginBottom: '6px' }}>
            The World's First Liquid-Cooled Smart Phone Case
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '640px' }}>
            Good morning Professor. Our product, <strong>TRI—SHIELD</strong>, combines liquid thermal cooling, drop impact absorption, and water sealing into one single slim protective case.
          </p>
        </div>

        {/* Presenter Summary Card */}
        <div
          className="glass-panel"
          style={{
            padding: '16px 20px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', fontWeight: 700 }}>
            SLIDE 01 OF 08
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            Introduction
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            Brand & Core Features
          </div>
        </div>
      </div>

      {/* 3 Core Feature Cards */}
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
                padding: '24px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `${usp.color}15`, border: `1px solid ${usp.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={usp.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: usp.color, fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: `${usp.color}12` }}>
                  {usp.tag}
                </span>
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                {usp.title}
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {usp.simpleNote}
              </p>
            </div>
          );
        })}
      </div>

      {/* Speaker Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: 'var(--text-dim)' }}>
          KEY TAKEAWAY: TRI-SHIELD SOLVES OVERHEATING, DROPS, AND WATER DAMAGE IN ONE PRODUCT.
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
          <span>NEXT: PRESENTER 02 (THE PROBLEM)</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </div>
  );
}
