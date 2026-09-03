import React from 'react';
import { Feather, Ruler, RotateCw, CheckCircle } from 'lucide-react';

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
        <div style={{ maxWidth: '680px' }}>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            "Is the case bulky?" — No. Only 1.2mm Thin!
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.45 }}>
            Despite having a liquid-cooled 5-layer system, TRI—SHIELD maintains an ultra-slim 1.2mm profile, as demonstrated in our revolving 3D model.
          </p>
        </div>

        {/* Slide Summary Card */}
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
            SLIDE 04 OF 07
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            1.2mm Ultra-Slim
          </div>
          <div style={{ fontSize: '0.7rem', color: '#0088FF', marginTop: '2px' }}>
            360° Revolving 3D View
          </div>
        </div>
      </div>

      {/* Side HUD Cards with Revolving 3D Canvas in Center Background */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto 0', pointerEvents: 'auto' }}>
        
        {/* Left Specification Card */}
        <div
          className="glass-panel"
          style={{
            width: '320px',
            padding: '24px',
            background: 'rgba(12, 14, 20, 0.88)',
            borderColor: 'rgba(255, 85, 0, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ruler size={20} color="#FF5500" />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                Actual Dimensions
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500' }}>
                FEATHERWEIGHT ENGINEERING
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.08)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>TOTAL CASE THICKNESS</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.4rem', fontWeight: 800, color: '#FF5500' }}>1.2 mm</div>
            </div>

            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>LIQUID CHAMBER THICKNESS</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>0.4 mm</div>
            </div>

            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>TOTAL WEIGHT</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>34 Grams</div>
            </div>
          </div>
        </div>

        {/* Right Revolving 3D Feature Indicator */}
        <div
          className="glass-panel"
          style={{
            width: '320px',
            padding: '24px',
            background: 'rgba(12, 14, 20, 0.88)',
            borderColor: 'rgba(0, 136, 255, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(0,136,255,0.15)', border: '1px solid rgba(0,136,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RotateCw size={20} color="#0088FF" />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                360° Revolving 3D
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#0088FF' }}>
                INSPECT ALL ANGLES
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
            Observe the 3D model rotating in real time. The precision micro-fluid channels fit seamlessly without making your pocket feel heavy or bulky.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.1)', border: '1px solid rgba(0,136,255,0.25)' }}>
            <CheckCircle size={14} color="#0088FF" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FFFFFF', fontWeight: 700 }}>
              FITS EASILY IN JEANS & POCKETS
            </span>
          </div>
        </div>

      </div>

      {/* Footer Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        ULTRA-SLIM (1.2mm) FEATHERWEIGHT PROFILE WITH 360° CONTINUOUS REVOLUTION.
      </div>
    </div>
  );
}
