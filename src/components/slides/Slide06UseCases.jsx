import React from 'react';
import { Gamepad2, Compass, Plane, HardHat, User } from 'lucide-react';

export default function Slide06UseCases() {
  const cards = [
    {
      title: '1. Mobile Gamers',
      tagline: 'PREVENT CPU THROTTLING',
      desc: 'Keeps high-end smartphones cool during long gaming sessions so games stay at 60-120 FPS without lag.',
      icon: Gamepad2,
      stat: '–12°C Temp Buffer',
      color: '#FF5500'
    },
    {
      title: '2. Outdoor Trekkers',
      tagline: 'RAIN & MOUNTAIN WEATHER',
      desc: 'Rubber hydro-gasket seal blocks heavy rain, mountain moisture, and granite rock drop impacts.',
      icon: Compass,
      stat: 'IP68 Gasket Seal',
      color: '#0088FF'
    },
    {
      title: '3. Global Travelers',
      tagline: 'HOT & COLD CLIMATES',
      desc: 'Insulates battery cells when traveling in high heat (+45°C) or freezing mountain cold (–20°C).',
      icon: Plane,
      stat: '–20°C to +55°C Range',
      color: '#FFAA00'
    },
    {
      title: '4. Field & Site Workers',
      tagline: 'CONSTRUCTION & ONSITE',
      desc: 'Protects phone back glass against concrete falls, machinery vibration, and heavy site dust.',
      icon: HardHat,
      stat: '3.5m Impact Rated',
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
        <div style={{ maxWidth: '640px' }}>
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
              PRESENTER 06 — TARGET MARKET & USER PROFILES
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Who needs TRI—SHIELD?
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Thank you Presenter 5. Professor, our target market consists of four high-demand user groups who need specialized thermal and drop protection.
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
            SLIDE 06 OF 08
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            4 User Segments
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            Target Demographics
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
        {cards.map((card, idx) => {
          const Icon = card.icon;
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
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${card.color}15`, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color={card.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.62rem', color: card.color, fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: `${card.color}12` }}>
                  {card.stat}
                </span>
              </div>

              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>{card.title}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.06em', marginBottom: '8px', fontFamily: "'Space Grotesk', monospace" }}>
                {card.tagline}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Speaker Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        PRESENTER 6: EXPLAIN HOW EACH USER PROFILE BENEFIT FROM THE TRI-SHIELD CASE INNOVATIONS.
      </div>
    </div>
  );
}
