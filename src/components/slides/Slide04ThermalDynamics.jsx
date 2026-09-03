import React from 'react';
import { Flame, Cpu, ShieldAlert, ArrowRightLeft, Sparkles, Thermometer } from 'lucide-react';

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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '640px' }}>
          <div className="mono-tag" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Flame size={14} color="#FF5500" />
            <span>THERMAL DYNAMICS & HEAT MANAGEMENT</span>
          </div>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Dual-path thermal protection.
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Resists external ambient heat radiation while rapidly drawing away intense internal CPU junction heat.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,85,0,0.08)' }}>
          <Thermometer size={20} color="#FF5500" />
          <div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>–12°C PEAK TEMP</div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: 'var(--text-dim)' }}>CPU JUNCTION DELTA</div>
          </div>
        </div>
      </div>

      {/* Main Dual-Path Comparison Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', margin: 'auto 0', pointerEvents: 'auto' }}>
        
        {/* Pathway A: Internal Heat Dissipation */}
        <div className="glass-panel-interactive" style={{ padding: '28px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(255, 85, 0, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={20} color="#FF5500" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  INTERNAL HEAT DISSIPATION
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FF5500' }}>
                  PATHWAY 01 — ACTIVE GRAPHITE MATRIX
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,85,0,0.15)', color: '#FF5500', fontWeight: 700 }}>
              IN-PLANE SPREAD
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
            A 99.9% pure pyrolytic synthetic graphite layer draws localized processor hot spots away from battery cells and spreads thermal energy laterally across case perimeter rails.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>THERMAL CONDUCTIVITY</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>1,500 W/m·K</div>
            </div>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>PERFORMANCE EFFECT</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FF5500' }}>Zero Throttle</div>
            </div>
          </div>
        </div>

        {/* Pathway B: External Thermal Isolation */}
        <div className="glass-panel-interactive" style={{ padding: '28px', background: 'rgba(12, 14, 20, 0.85)', borderColor: 'rgba(0, 136, 255, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,136,255,0.15)', border: '1px solid rgba(0,136,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldAlert size={20} color="#0088FF" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                  EXTERNAL THERMAL BARRIER
                </div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#0088FF' }}>
                  PATHWAY 02 — LIQUID CHAMBER BUFFER
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)', color: '#0088FF', fontWeight: 700 }}>
              FLUID SHIELD
            </span>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
            The stationary dielectric fluid core acts as a high-capacitance thermal cushion, significantly delaying direct sunlight and ambient environmental heat from warming the phone body.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>SUN RADIANT TOLERANCE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>Up to +55°C</div>
            </div>
            <div style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', background: 'rgba(0,136,255,0.08)', border: '1px solid rgba(0,136,255,0.2)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>FLUID VISCOSITY</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.05rem', fontWeight: 700, color: '#0088FF' }}>0.8 cSt Sealed</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        THERMAL FLOW ARCHITECTURE — SYNTHETIC GRAPHITE CONDUCTIVITY & DIELECTRIC ABSORPTION
      </div>
    </div>
  );
}
