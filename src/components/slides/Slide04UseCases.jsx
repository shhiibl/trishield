import React from 'react';
import { Gamepad2, Compass, Plane, HardHat } from 'lucide-react';

export default function Slide04UseCases() {
  const cards = [
    { title: 'GAMER', tagline: 'HIGH-LOAD THERMAL', desc: 'Prevents CPU throttling during heavy mobile gaming.', icon: Gamepad2, stat: '–12°C Buffer' },
    { title: 'TREKKER', tagline: 'WEATHER SEAL', desc: 'Hydrophobic barrier against heavy rain & granite drops.', icon: Compass, stat: 'IP68 Barrier' },
    { title: 'TRAVELER', tagline: 'CLIMATE ADAPTATION', desc: 'Isolates tarmac heat and sub-zero airline holds.', icon: Plane, stat: '–20°C to +55°C' },
    { title: 'FIELD WORKER', tagline: 'FORCE DISSIPATION', desc: 'Absorbs machinery vibration and severe impacts.', icon: HardHat, stat: '3.5m Energy Abs.' }
  ];

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
      <div style={{ maxWidth: '540px' }}>
        <div className="mono-tag" style={{ marginBottom: '14px' }}>USE CASES</div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Engineered for extremes.
        </h1>
      </div>

      <div
        style={{
          width: '54%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          pointerEvents: 'auto'
        }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{ padding: '20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Icon size={18} color="#FF5500" />
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FF5500' }}>
                  {card.stat}
                </span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>{card.title}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.08em', margin: '2px 0 8px 0' }}>
                {card.tagline}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        FIELD SPECS & APPLICATION PROFILES
      </div>
    </div>
  );
}
