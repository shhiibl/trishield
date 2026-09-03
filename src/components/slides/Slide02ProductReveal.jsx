import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Eye, Flame, ShieldCheck } from 'lucide-react';

export default function Slide02ProductReveal() {
  const { activeFeature, setActiveFeature } = usePresentation();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '90px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      {/* Headline */}
      <div style={{ maxWidth: '540px' }}>
        <div className="mono-tag" style={{ marginBottom: '14px' }}>PRODUCT DISCOVERY</div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Meet <span style={{ color: '#FF5500' }}>TRI—SHIELD.</span>
        </h1>
        <p style={{ marginTop: '12px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
          A precision-molded protective phone back cover engineered with an invisible liquid thermal core.
        </p>
      </div>

      {/* Minimal Feature Focus List */}
      <div
        style={{
          position: 'absolute',
          right: '60px',
          top: '32%',
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          pointerEvents: 'auto'
        }}
      >
        <div
          onClick={() => setActiveFeature(activeFeature === 'liquid' ? null : 'liquid')}
          className="glass-panel-interactive"
          style={{
            padding: '16px',
            cursor: 'pointer',
            borderColor: activeFeature === 'liquid' ? '#FF5500' : 'var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <Eye size={16} color={activeFeature === 'liquid' ? '#FF5500' : '#FFFFFF'} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF' }}>
              Full-Back Liquid Chamber
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Transparent fluid core boundary. Normally invisible to the eye.
          </p>
        </div>

        <div
          onClick={() => setActiveFeature(activeFeature === 'thermal' ? null : 'thermal')}
          className="glass-panel-interactive"
          style={{
            padding: '16px',
            cursor: 'pointer',
            borderColor: activeFeature === 'thermal' ? '#FF5500' : 'var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <Flame size={16} color={activeFeature === 'thermal' ? '#FF5500' : '#FFFFFF'} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF' }}>
              Thermal Buffer
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Absorbs localized ambient thermal exposure.
          </p>
        </div>

        <div
          onClick={() => setActiveFeature(activeFeature === 'impact' ? null : 'impact')}
          className="glass-panel-interactive"
          style={{
            padding: '16px',
            cursor: 'pointer',
            borderColor: activeFeature === 'impact' ? '#FF5500' : 'var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <ShieldCheck size={16} color={activeFeature === 'impact' ? '#FF5500' : '#FFFFFF'} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF' }}>
              Elastomer Matrix
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Kinetic drop energy distribution matrix.
          </p>
        </div>
      </div>

      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        SELECT CARD TO FOCUS FEATURE
      </div>
    </div>
  );
}
