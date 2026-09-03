import React from 'react';
import { ShieldCheck, Droplets, Activity } from 'lucide-react';

export default function Slide05ImpactHydroSeal() {
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
      {/* Header */}
      <div style={{ maxWidth: '560px' }}>
        <div className="mono-tag" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={14} color="#FF5500" />
          <span>IMPACT & HYDRO-SEAL</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Force distribution & liquid seal.
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
          Combines kinetic shock absorption with an elastomeric moisture barrier.
        </p>
      </div>

      {/* Main Feature Cards */}
      <div style={{ display: 'flex', gap: '24px', width: '56%', pointerEvents: 'auto' }}>
        
        {/* Kinetic Impact Matrix */}
        <div className="glass-panel" style={{ flex: 1, padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Activity size={18} color="#FF5500" />
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
              KINETIC IMPACT MATRIX
            </div>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', marginBottom: '8px' }}>
            32-Cell Honeycomb Elastomer Grid
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
            Protects back glass by channeling corner drop energy away from the device frame into 32 shock-absorbing cells.
          </p>
          <div style={{ padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)', fontSize: '0.76rem', color: '#FFFFFF', fontFamily: "'Space Grotesk', monospace" }}>
            Rating: 3.5m Kinetic Drop Absorption
          </div>
        </div>

        {/* Perimeter Hydro-Gasket */}
        <div className="glass-panel" style={{ flex: 1, padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Droplets size={18} color="#0088FF" />
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
              PERIMETER HYDRO-GASKET
            </div>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#0088FF', marginBottom: '8px' }}>
            Fluorosilicone Edge Sealing Lip
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
            Forms a micro-seal along the rear glass perimeter to stop water droplets and fine dust particles from entering.
          </p>
          <div style={{ padding: '8px 12px', borderRadius: '6px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)', fontSize: '0.76rem', color: '#FFFFFF', fontFamily: "'Space Grotesk', monospace" }}>
            Barrier: IP68 Edge Moisture Protection
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        MECHANICAL INTEGRITY — FORCE DEFLECTION & HYDROPHOBIC SEALING
      </div>
    </div>
  );
}
