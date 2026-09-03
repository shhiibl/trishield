import React from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';

export default function Slide08FinalHero() {
  const { goToSlide } = usePresentation();

  const summaryHighlights = [
    { label: 'Thermal Core', val: 'Dielectric Liquid' },
    { label: 'Heat Spreader', val: 'Synthetic Graphite' },
    { label: 'Drop Rating', val: '3.5m Impact Grid' },
    { label: 'Moisture Barrier', val: 'IP68 Hydro-Seal' }
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '90px 60px 40px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {/* Speaker Badge & Title */}
      <div style={{ maxWidth: '680px' }}>
        <div
          className="glass-panel"
          style={{
            marginBottom: '10px',
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
            PRESENTER 08 — CONCLUSION & FINAL SUMMARY
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          TRI—SHIELD
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
          Thank you Professor. In conclusion, <strong>TRI—SHIELD</strong> delivers next-generation liquid cooling and 3-in-1 hardware defense.
        </p>
      </div>

      {/* Luxury Specs Summary Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          width: '85%',
          maxWidth: '880px',
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
              borderColor: 'rgba(255, 85, 0, 0.25)'
            }}
          >
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
              {item.val}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button & Conclusion Badge */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', pointerEvents: 'auto' }}>
        <button
          onClick={() => goToSlide(2)}
          style={{
            padding: '12px 28px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, #FF5500 0%, #CC4400 100%)',
            border: 'none',
            color: '#FFFFFF',
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 0 25px rgba(255, 85, 0, 0.5)',
            transition: 'transform 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span>RE-VISIT 3D LAYER ANATOMY</span>
          <ArrowRight size={16} />
        </button>

        <div className="glass-panel" style={{ padding: '6px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} color="#0088FF" />
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
            TEAM PRESENTATION COMPLETE — READY FOR PROFESSOR Q&A
          </span>
        </div>
      </div>
    </div>
  );
}
