import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, Droplets } from 'lucide-react';

export default function Slide01Problem() {
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
      {/* Headline */}
      <div style={{ maxWidth: '600px' }}>
        <div className="mono-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#FF5500' }} />
          <span>ENVIRONMENTAL THREAT ANALYSIS</span>
        </div>

        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Your phone faces <br />
          <span style={{ color: '#FF5500' }}>more than drops.</span>
        </h1>
      </div>

      {/* Dynamic Threat Badges */}
      <div
        style={{
          position: 'absolute',
          top: '46%',
          left: '60px',
          right: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none'
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            maxWidth: '300px'
          }}
        >
          <Flame size={18} color="#FF5500" />
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>Thermal Exposure</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Battery strain & CPU throttling</div>
          </div>
        </div>

        <div
          className="glass-panel"
          style={{
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            maxWidth: '300px'
          }}
        >
          <Droplets size={18} color="#0088FF" />
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>Fluid Contact</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Moisture seal penetration</div>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Statement */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="glass-panel"
          style={{
            padding: '10px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            background: 'rgba(10, 11, 15, 0.9)'
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.9rem', color: '#FF5500', letterSpacing: '0.15em' }}>HEAT.</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.9rem', color: '#FFFFFF', letterSpacing: '0.15em' }}>IMPACT.</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.9rem', color: '#0088FF', letterSpacing: '0.15em' }}>WATER.</span>
        </div>
      </div>
    </div>
  );
}
