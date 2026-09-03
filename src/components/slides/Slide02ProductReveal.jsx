import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Eye, Flame, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export default function Slide02ProductReveal() {
  const { activeFeature, setActiveFeature } = usePresentation();

  const features = [
    {
      id: 'liquid',
      icon: Eye,
      title: 'Full-Back Liquid Chamber',
      tagline: '0.4mm Dielectric Fluid Boundary',
      desc: 'Transparent fluid core sealed across the entire back panel. Maintains hydrostatic equilibrium and remains completely invisible to the user.'
    },
    {
      id: 'thermal',
      icon: Flame,
      title: 'Thermal Dissipation Buffer',
      tagline: 'Graphite + Liquid Heat Barrier',
      desc: 'Combines pyrolytic graphite lateral spreading with a high-capacitance fluid layer to absorb junction heat and isolate battery cells.'
    },
    {
      id: 'impact',
      icon: ShieldCheck,
      title: 'Elastomer Impact Grid',
      tagline: '32-Cell Kinetic Deflection Lattice',
      desc: 'High-durometer TPE perimeter matrix channels drop energy around phone edges, protecting fragile back glass from cracking.'
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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '600px' }}>
          <div className="mono-tag" style={{ marginBottom: '12px' }}>PRODUCT DISCOVERY</div>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Meet <span style={{ color: '#FF5500' }}>TRI—SHIELD.</span>
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
            A precision-molded protective back cover engineered with an invisible liquid thermal core and 5-layer composite defense.
          </p>
        </div>

        {/* Luxury Badge */}
        <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,85,0,0.08)', borderColor: 'rgba(255,85,0,0.25)' }}>
          <Cpu size={18} color="#FF5500" />
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>INVIS-CORE ENGINE</div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500' }}>PATENT PENDING</div>
          </div>
        </div>
      </div>

      {/* Center Luxury Feature Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {features.map((feat) => {
          const Icon = feat.icon;
          const isSelected = activeFeature === feat.id;
          return (
            <div
              key={feat.id}
              onClick={() => setActiveFeature(isSelected ? null : feat.id)}
              className="glass-panel-interactive"
              style={{
                padding: '28px',
                cursor: 'pointer',
                borderColor: isSelected ? '#FF5500' : 'rgba(255, 255, 255, 0.08)',
                backgroundColor: isSelected ? 'rgba(255, 85, 0, 0.12)' : 'rgba(12, 14, 20, 0.85)',
                boxShadow: isSelected ? '0 0 30px rgba(255, 85, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 300ms ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: isSelected ? '#FF5500' : 'rgba(255,255,255,0.05)', border: `1px solid ${isSelected ? '#FF5500' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color={isSelected ? '#FFFFFF' : '#FF5500'} />
                </div>
                {isSelected && (
                  <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', padding: '3px 8px', borderRadius: '4px', background: '#FF5500', color: '#FFF', fontWeight: 700 }}>
                    FOCUS ACTIVE
                  </span>
                )}
              </div>

              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                {feat.title}
              </div>

              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', marginBottom: '12px' }}>
                {feat.tagline}
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
          CLICK ANY FEATURE CARD TO HIGHLIGHT SPECIFIC HARDWARE INNOVATION
        </div>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>NEXT: LAYER ANATOMY (3D VIEW)</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </div>
  );
}
