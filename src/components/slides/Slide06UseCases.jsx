import React from 'react';
import { Gamepad2, Compass, Plane, HardHat, ShieldCheck } from 'lucide-react';

export default function Slide06UseCases() {
  const cards = [
    {
      title: 'PRO GAMER',
      tagline: 'HIGH-LOAD SUSTAINED PERFORMANCE',
      desc: 'Sinks CPU junction heat during intensive gaming, maintaining max FPS without thermal throttling.',
      icon: Gamepad2,
      stat: '–12°C Temp Buffer',
      color: '#FF5500'
    },
    {
      title: 'TREKKER / EXPLORER',
      tagline: 'ALL-WEATHER SHIELD',
      desc: 'Hydrophobic fluorosilicone seal blocks heavy rain, mountain moisture, and granite drop impacts.',
      icon: Compass,
      stat: 'IP68 Gasket Seal',
      color: '#0088FF'
    },
    {
      title: 'GLOBAL TRAVELER',
      tagline: 'CLIMATE EXTREMES',
      desc: 'Isolates airport tarmac heat (+45°C) and sub-zero airline cargo holds (–20°C).',
      icon: Plane,
      stat: '–20°C to +55°C Range',
      color: '#FFAA00'
    },
    {
      title: 'FIELD & SITE WORKER',
      tagline: 'INDUSTRIAL FORCE DEFLECTION',
      desc: 'Dampens high-frequency machinery vibrations and severe drop forces on concrete.',
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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '600px' }}>
          <div className="mono-tag" style={{ marginBottom: '12px' }}>APPLICATION SPECS</div>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Engineered for extremes.
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Versatile thermal and mechanical protection tailored for demanding daily usage scenarios.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,85,0,0.08)' }}>
          <ShieldCheck size={18} color="#FF5500" />
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FFFFFF', fontWeight: 700 }}>
            4 APPLICATION PROFILES
          </span>
        </div>
      </div>

      {/* Grid of 4 Use Cases */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
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
                padding: '24px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: `${card.color}15`, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={card.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: card.color, fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: `${card.color}12` }}>
                  {card.stat}
                </span>
              </div>

              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>{card.title}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px', fontFamily: "'Space Grotesk', monospace" }}>
                {card.tagline}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        FIELD SPECS & APPLICATION PROFILES — TRI-SHIELD HARDWARE INTEGRATION
      </div>
    </div>
  );
}
