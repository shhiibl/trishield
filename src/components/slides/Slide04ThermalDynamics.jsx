import React from 'react';
import { Flame, Cpu, ShieldAlert, Thermometer, User } from 'lucide-react';

export default function Slide04ThermalDynamics() {
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
              PRESENTER 04 — THERMAL COOLING & HEAT MANAGEMENT
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Dual-path thermal cooling.
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Thank you Presenter 3. Professor, our case manages heat in two smart ways: drawing heat out from inside the phone while blocking sun heat from outside.
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
            SLIDE 04 OF 08
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            –12°C Temp Drop
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            CPU Junction Delta
          </div>
        </div>
      </div>

      {/* Main Dual-Path Comparison Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', margin: 'auto 0', pointerEvents: 'auto' }}>
        
        {/* Pathway A: Internal Heat Spreading */}
        <div className="glass-panel-interactive" style={{ padding: '26px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(255, 85, 0, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={20} color="#FF5500" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Path 1: Internal CPU Cooling
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500' }}>
                  GRAPHITE HEAT SPREADER
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,85,0,0.15)', color: '#FF5500', fontWeight: 700 }}>
              SINK INTERNAL HEAT
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            When playing games or processing heavy apps, the internal processor gets hot. The synthetic graphite sheet pulls heat off the processor and spreads it across the outer frame so the phone never slows down.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>HEAT SPREAD RATE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>1,500 W/m·K</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>RESULT</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FF5500' }}>Zero Lag / Throttling</div>
            </div>
          </div>
        </div>

        {/* Pathway B: External Sun Radiation Insulation */}
        <div className="glass-panel-interactive" style={{ padding: '26px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(0, 136, 255, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(0,136,255,0.15)', border: '1px solid rgba(0,136,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldAlert size={20} color="#0088FF" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Path 2: Sunlight Heat Shield
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#0088FF' }}>
                  SEALED LIQUID CORE BUFFER
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)', color: '#0088FF', fontWeight: 700 }}>
              BLOCK SUNLIGHT HEAT
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            When left outside in direct sunlight, standard phones overheat quickly. The liquid fluid layer acts as a heat buffer, absorbing solar energy before it can warm up the phone battery.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>SUN HEAT TOLERANCE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>Up to +55°C</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>LIQUID TYPE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#0088FF' }}>Non-Conductive Fluid</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Speaker Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        PRESENTER 4: EXPLAIN HOW GRAPHITE HANDLES INTERNAL CPU HEAT & LIQUID CORE BLOCKS OUTDOOR SUN HEAT.
      </div>
    </div>
  );
}
