import React from 'react';
import { ShieldCheck, Droplets, Activity, Maximize2, Shield } from 'lucide-react';

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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '640px' }}>
          <div className="mono-tag" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} color="#FF5500" />
            <span>MECHANICAL DYNAMICS & PROTECTION</span>
          </div>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Force deflection & liquid seal.
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Engineered honeycomb shock absorption paired with a perimeter hydrophobic gasket.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,136,255,0.08)', borderColor: 'rgba(0,136,255,0.25)' }}>
          <Shield size={20} color="#0088FF" />
          <div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>3.5M DROP RATED</div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#0088FF' }}>IP68 EDGE BARRIER</div>
          </div>
        </div>
      </div>

      {/* Main Feature Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', margin: 'auto 0', pointerEvents: 'auto' }}>
        
        {/* Card 1: Kinetic Impact Matrix */}
        <div className="glass-panel-interactive" style={{ padding: '28px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(255, 85, 0, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={20} color="#FF5500" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  KINETIC IMPACT MATRIX
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FF5500' }}>
                  32-CELL HONEYCOMB ELASTOMER
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,85,0,0.15)', color: '#FF5500', fontWeight: 700 }}>
              70A DUROMETER
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
            Protects phone back glass by channeling severe corner drop forces away from device components into 32 shock-dissipating thermoplastic elastomer cells.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>IMPACT ABSORPTION</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>3.5 Meters</div>
            </div>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>ELONGATION AT BREAK</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FF5500' }}>450% Strain</div>
            </div>
          </div>
        </div>

        {/* Card 2: Perimeter Hydro-Gasket */}
        <div className="glass-panel-interactive" style={{ padding: '28px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(0, 136, 255, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,136,255,0.15)', border: '1px solid rgba(0,136,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplets size={20} color="#0088FF" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  PERIMETER HYDRO-GASKET
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#0088FF' }}>
                  FLUOROSILICONE SEALLING LIP
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)', color: '#0088FF', fontWeight: 700 }}>
              MOISTURE GUARD
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
            Precision-molded fluorosilicone rim forms a micro-seal around the entire rear glass perimeter to block fine dust, water splashes, and high humidity.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>SEAL BARRIER RATING</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>IP68 Edge Seal</div>
            </div>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>MATERIAL RESISTANCE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#0088FF' }}>Oleophobic</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        MECHANICAL INTEGRITY — FORCE DISSIPATION & DUAL MOISTURE ISOLATION
      </div>
    </div>
  );
}
