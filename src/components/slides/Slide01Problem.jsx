import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, Droplets, Zap } from 'lucide-react';

export default function Slide01Problem() {
  const threats = [
    {
      icon: Flame,
      color: '#FF5500',
      title: 'Thermal Strain',
      metric: '+48°C Direct Sun',
      desc: 'Ambient sun radiation causes processor throttling and degrades lithium battery health.'
    },
    {
      icon: Zap,
      color: '#FFAA00',
      title: 'Kinetic Shock',
      metric: '3.5m Drop Force',
      desc: 'Corner impacts transfer shockwaves directly into brittle rear glass panels.'
    },
    {
      icon: Droplets,
      color: '#0088FF',
      title: 'Fluid Penetration',
      metric: 'IP68 Breach Risk',
      desc: 'Moisture and fine dust ruin seals over time, corroding internal electronics.'
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
      {/* Top Headline & Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '640px' }}>
          <div className="mono-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500', boxShadow: '0 0 10px #FF5500' }} />
            <span>ENVIRONMENTAL THREAT ANALYSIS</span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Your phone faces <br />
            <span style={{ color: '#FF5500' }}>more than simple drops.</span>
          </h1>
        </div>

        <div style={{ textAlign: 'right', fontFamily: "'Space Grotesk', monospace" }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>THREAT MATRIX</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FF5500' }}>TRIPLE EXPOLOGY</div>
        </div>
      </div>

      {/* Main Luxury Threat Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {threats.map((t, idx) => {
          const Icon = t.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{
                padding: '28px',
                background: 'rgba(12, 14, 20, 0.82)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${t.color}15`, border: `1px solid ${t.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color={t.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: t.color, fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: `${t.color}12`, border: `1px solid ${t.color}30` }}>
                  {t.metric}
                </span>
              </div>

              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {t.title}
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {t.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Minimal Luxury Footer Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          className="glass-panel"
          style={{
            padding: '10px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            background: 'rgba(10, 11, 15, 0.9)'
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.82rem', color: '#FF5500', letterSpacing: '0.15em', fontWeight: 700 }}>THERMAL HEAT</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.82rem', color: '#FFFFFF', letterSpacing: '0.15em', fontWeight: 700 }}>KINETIC IMPACT</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.82rem', color: '#0088FF', letterSpacing: '0.15em', fontWeight: 700 }}>HYDRO MOISTURE</span>
        </div>

        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
          SYSTEM IDENTIFIER — TRI-SHIELD HAZARD ANALYSIS
        </div>
      </div>
    </div>
  );
}
