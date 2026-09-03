import React from 'react';
import { Gamepad2, Compass, Plane, HardHat, User } from 'lucide-react';

export default function Slide05ImpactHydroSeal() {
  const uses = [
    {
      title: '1. Mobile Gamers',
      subtitle: 'PREVENT CPU OVERHEATING',
      desc: 'Keeps smartphone processors cool during intensive BGMI / COD sessions so frame rates stay locked at 60-120 FPS without lag.',
      icon: Gamepad2,
      stat: '–12°C Temp Drop',
      color: '#FF5500'
    },
    {
      title: '2. Outdoor Trekkers',
      tagline: 'RAIN & MOUNTAIN DROPS',
      desc: 'Rubber hydro-gasket blocks mountain rain and dust while honeycomb cells protect phone glass against granite rock falls.',
      icon: Compass,
      stat: 'IP68 & 3.5m Drops',
      color: '#0088FF'
    },
    {
      title: '3. Global Travelers',
      tagline: 'HOT & COLD CLIMATES',
      desc: 'Insulates battery cells from extreme sun heat (+45°C) and freezing winter cold (–20°C) during international travel.',
      icon: Plane,
      stat: 'Temp Insulation',
      color: '#FFAA00'
    },
    {
      title: '4. Field & Site Workers',
      tagline: 'CONSTRUCTION & ONSITE',
      desc: 'Deflects heavy concrete drops, machinery vibrations, and fine construction dust away from internal ports.',
      icon: HardHat,
      stat: 'Heavy Impact Shield',
      color: '#FF3366'
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
        <div style={{ maxWidth: '660px' }}>
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
              SLIDE 05 / PRESENTER 5 — PRODUCT USES & APPLICATIONS
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Who uses TRI—SHIELD?
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Thank you Presenter 4. Professor, our product serves four core user groups who face real environmental challenges every day.
          </p>
        </div>

        {/* Presenter Summary Card */}
        <div
          className="glass-panel"
          style={{
            padding: '12px 18px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', fontWeight: 700 }}>
            SLIDE 05 OF 07
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            Product Uses
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            Gamers, Trekkers & More
          </div>
        </div>
      </div>

      {/* Grid of 4 Use Cases */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '18px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {uses.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{
                padding: '22px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color={item.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.62rem', color: item.color, fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: `${item.color}12` }}>
                  {item.stat}
                </span>
              </div>

              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.06em', marginBottom: '8px', fontFamily: "'Space Grotesk', monospace" }}>
                {item.subtitle || item.tagline}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Speaker Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        PRESENTER 5: EXPLAIN REAL-WORLD USES FOR GAMERS, OUTDOOR TREKKERS, TRAVELERS AND FIELD WORKERS.
      </div>
    </div>
  );
}
