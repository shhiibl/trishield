import React from 'react';
import { Flame, Cpu, ArrowDownRight, ShieldAlert } from 'lucide-react';

export default function Slide04ThermalDynamics() {
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
          <Flame size={14} color="#FF5500" />
          <span>THERMAL DYNAMICS</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Dual-path heat management.
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
          Resists external thermal radiation while rapidly wicking away internal CPU heat.
        </p>
      </div>

      {/* Main Dual-Path Comparison Cards */}
      <div style={{ display: 'flex', gap: '24px', width: '56%', pointerEvents: 'auto' }}>
        
        {/* Pathway A: Internal Heat Dissipation */}
        <div className="glass-panel" style={{ flex: 1, padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Cpu size={18} color="#FF5500" />
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
              INTERNAL DISSIPATION
            </div>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', marginBottom: '8px' }}>
            CPU → Graphite Spreader → Edges
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
            99.9% carbon graphite sheet conducts hot spots out to case perimeter rails, preventing processor speed throttling.
          </p>
          <div style={{ padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)', fontSize: '0.76rem', color: '#FFFFFF', fontFamily: "'Space Grotesk', monospace" }}>
            Metric: –12°C Peak Junction Temp
          </div>
        </div>

        {/* Pathway B: External Heat Isolation */}
        <div className="glass-panel" style={{ flex: 1, padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <ShieldAlert size={18} color="#0088FF" />
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
              EXTERNAL HEAT BUFFER
            </div>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#0088FF', marginBottom: '8px' }}>
            Sun/Ambient Heat → Fluid Core (Blocked)
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
            Stationary liquid layer acts as a high-capacitance barrier that slows ambient radiation from penetrating phone battery.
          </p>
          <div style={{ padding: '8px 12px', borderRadius: '6px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)', fontSize: '0.76rem', color: '#FFFFFF', fontFamily: "'Space Grotesk', monospace" }}>
            Tolerance: Up to +55°C Ambient
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        THERMAL FLOW PRINCIPLE — TWO-WAY DISSIPATION & BARRIER ARCHITECTURE
      </div>
    </div>
  );
}
