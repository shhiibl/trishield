import React from 'react';
import { Ruler, RotateCw, CheckCircle, Sparkles, Layers } from 'lucide-react';

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
            Despite housing a 5-layer cooling matrix, TRI—SHIELD maintains an ultra-slim 1.2mm profile. Inspect the 360° revolving 3D model below to verify side edge thickness.
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
            1.2mm Ultra-Slim Profile
          </div>
          <div style={{ fontSize: '0.7rem', color: '#0088FF', marginTop: '2px' }}>
            360° Revolving 3D Model
          </div>
        </div>
      </div>

      {/* Center Layout: Left Specs + Middle Framed 360° CAD Box + Right Feature Card */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto 0', pointerEvents: 'auto', gap: '20px', width: '100%' }}>
        
        {/* Left Specification Card */}
        <div
          className="glass-panel"
          style={{
            width: '280px',
            padding: '22px',
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
                Thickness Specs
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500' }}>
                SIDE EDGE CALIPER
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,85,0,0.12)', border: '1px solid rgba(255,85,0,0.4)' }}>
              <div style={{ fontSize: '0.62rem', color: '#FF5500', fontWeight: 700 }}>TOTAL PROFILE THICKNESS</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>1.2 mm</div>
            </div>

            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>LIQUID CORE CHAMBER</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>0.4 mm</div>
            </div>

            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)' }}>TOTAL WEIGHT</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>34 Grams</div>
            </div>
          </div>
        </div>

        {/* Center Frame: Prominent 360° CAD Thickness Visual Box */}
        <div
          className="glass-panel"
          style={{
            flex: 1,
            height: '350px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.1) 0%, rgba(8, 10, 15, 0.95) 75%)',
            borderColor: 'rgba(255, 85, 0, 0.35)',
            boxShadow: '0 0 35px rgba(255, 85, 0, 0.15)',
            overflow: 'hidden'
          }}
        >
          {/* Top Floating CAD Header Badge */}
          <div
            style={{
              position: 'absolute',
              top: '14px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(10, 12, 18, 0.9)',
              border: '1px solid rgba(255, 85, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 5
            }}
          >
            <RotateCw size={14} color="#FF5500" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FFFFFF', fontWeight: 700 }}>
              360° REVOLVING 3D MODEL & SIDE-EDGE CALIPER
            </span>
          </div>

          {/* Interactive Side-Edge Graphic & 3D WebGL Model Container */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Minimal SVG Caliper Bracket overlay in center */}
            <svg
              viewBox="0 0 300 200"
              style={{
                position: 'absolute',
                width: '280px',
                height: '180px',
                pointerEvents: 'none',
                opacity: 0.6,
                zIndex: 3
              }}
            >
              {/* Left Caliper Bracket Line */}
              <line x1="40" y1="20" x2="40" y2="180" stroke="#FF5500" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="30" y1="20" x2="50" y2="20" stroke="#FF5500" strokeWidth="2" />
              <line x1="30" y1="180" x2="50" y2="180" stroke="#FF5500" strokeWidth="2" />
              <text x="25" y="105" fill="#FF5500" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold" transform="rotate(-90 25,105)" textAnchor="middle">
                1.2mm THICKNESS
              </text>

              {/* Right Caliper Bracket Line */}
              <line x1="260" y1="20" x2="260" y2="180" stroke="#0088FF" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="250" y1="20" x2="270" y2="20" stroke="#0088FF" strokeWidth="2" />
              <line x1="250" y1="180" x2="270" y2="180" stroke="#0088FF" strokeWidth="2" />
              <text x="275" y="105" fill="#0088FF" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold" transform="rotate(90 275,105)" textAnchor="middle">
                0.4mm LIQUID CORE
              </text>
            </svg>
          </div>

          {/* Bottom Side Edge Banner Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              padding: '8px 20px',
              borderRadius: '20px',
              background: 'rgba(255, 85, 0, 0.18)',
              border: '1px solid rgba(255, 85, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 5
            }}
          >
            <Sparkles size={14} color="#FF5500" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 800 }}>
              ULTRA-SLIM SIDE EDGE: 1.2mm THICKNESS
            </span>
          </div>
        </div>

        {/* Right Feature Indicator */}
        <div
          className="glass-panel"
          style={{
            width: '280px',
            padding: '22px',
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
                Slim Form Factor
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#0088FF' }}>
                ZERO POCKET BULK
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '14px' }}>
            The 3D model rotates 360° to prove that the micro-fluid channels add zero bulky overhang to your phone.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(0,136,255,0.1)', border: '1px solid rgba(0,136,255,0.25)' }}>
            <CheckCircle size={14} color="#0088FF" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FFFFFF', fontWeight: 700 }}>
              SLIPS EASILY INTO POCKETS
            </span>
          </div>
        </div>

      </div>

      {/* Footer Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        ULTRA-SLIM 1.2mm SIDE EDGE PROFILE WITH 360° CONTINUOUS REVOLUTION.
      </div>
    </div>
  );
}
