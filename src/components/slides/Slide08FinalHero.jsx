import React from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';

export default function Slide08FinalHero() {
  const { goToSlide } = usePresentation();

  const summaryHighlights = [
    { label: 'Thermal Core', val: 'Dielectric Fluid' },
    { label: 'Spreader Layer', val: '99.9% Graphite' },
    { label: 'Drop Rating', val: '3.5m Absorption' },
    { label: 'Moisture Barrier', val: 'IP68 Hydro-Seal' }
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '90px 60px 50px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {/* Top Tag */}
      <div style={{ maxWidth: '640px' }}>
        <div
          className="mono-tag"
          style={{
            marginBottom: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '12px',
            background: 'rgba(255, 85, 0, 0.08)',
            border: '1px solid rgba(255, 85, 0, 0.2)'
          }}
        >
          <Sparkles size={12} color="#FF5500" />
          <span>HARDWARE ARCHITECTURE SUMMARY</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          TRI—SHIELD
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '12px' }}>
          Invisible technology. <span style={{ color: '#FF5500', fontWeight: 600 }}>Visible protection.</span>
        </p>
      </div>

      {/* Luxury Specs Cards Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          width: '80%',
          maxWidth: '850px',
          pointerEvents: 'auto'
        }}
      >
        {summaryHighlights.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '16px',
              background: 'rgba(12, 14, 20, 0.85)',
              borderColor: 'rgba(255, 85, 0, 0.2)'
            }}
          >
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>
              {item.val}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button & Prototype Badge */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', pointerEvents: 'auto' }}>
        <button
          onClick={() => goToSlide(2)}
          style={{
            padding: '14px 32px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #FF5500 0%, #CC4400 100%)',
            border: 'none',
            color: '#FFFFFF',
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 0 25px rgba(255, 85, 0, 0.5)',
            transition: 'transform 200ms ease, box-shadow 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 85, 0, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 85, 0, 0.5)';
          }}
        >
          <span>RE-INSPECT 3D LAYER ANATOMY</span>
          <ArrowRight size={16} />
        </button>

        <div className="glass-panel" style={{ padding: '6px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={12} color="#0088FF" />
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
            PATENT-PENDING HYDRAULIC LIQUID CORE ENGINEERING
          </span>
        </div>
      </div>
    </div>
  );
}
