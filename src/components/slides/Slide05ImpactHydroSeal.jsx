import React from 'react';
import { ShieldCheck, Droplets, Activity, Shield, User } from 'lucide-react';

export default function Slide05ImpactHydroSeal() {
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
              PRESENTER 05 — DROP DEFLECTION & HYDRO-SEAL BARRIER
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Drop defense & water sealing.
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Thank you Presenter 4. Professor, next we look at mechanical safety: how our case protects phone glass from high drops and prevents water entry.
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
            SLIDE 05 OF 08
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            3.5m Drop Tested
          </div>
          <div style={{ fontSize: '0.7rem', color: '#0088FF', marginTop: '2px' }}>
            IP68 Gasket Rating
          </div>
        </div>
      </div>

      {/* Main Dual Feature Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', margin: 'auto 0', pointerEvents: 'auto' }}>
        
        {/* Card 1: 3.5m Impact Deflection */}
        <div className="glass-panel-interactive" style={{ padding: '26px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(255, 85, 0, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={20} color="#FF5500" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Feature 1: 3.5m Drop Protection
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500' }}>
                  32-CELL HONEYCOMB GRID
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,85,0,0.15)', color: '#FF5500', fontWeight: 700 }}>
              SHOCK ABSORBER
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            When a phone hits the floor, drop energy causes glass rear panels to shatter. TRI—SHIELD uses 32 internal elastomer cells around the rim that bend and absorb shock before force reaches the phone.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>MAX DROP RATING</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>3.5 Meters</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>CELL MATERIAL</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FF5500' }}>TPE Rubber</div>
            </div>
          </div>
        </div>

        {/* Card 2: IP68 Hydro Gasket */}
        <div className="glass-panel-interactive" style={{ padding: '26px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(0, 136, 255, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(0,136,255,0.15)', border: '1px solid rgba(0,136,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplets size={20} color="#0088FF" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Feature 2: Water & Dust Gasket
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#0088FF' }}>
                  FLUOROSILICONE EDGE SEAL
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)', color: '#0088FF', fontWeight: 700 }}>
              MOISTURE SHIELD
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            Water splashes and fine dust particles enter behind standard cases and scratch the glass. Our molded rubber gasket forms a tight seal around the phone back to keep out moisture completely.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>WATERPROOF RATING</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>IP68 Edge Seal</div>
            </div>
            <div style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>COATING</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1rem', fontWeight: 700, color: '#0088FF' }}>Fingerprint-Proof</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Speaker Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        PRESENTER 5: EXPLAIN HONEYCOMB DROP ABSORPTION AND IP68 EDGE GASKET WATER RESISTANCE.
      </div>
    </div>
  );
}
