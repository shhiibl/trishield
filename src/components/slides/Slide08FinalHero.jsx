import React from 'react';

export default function Slide08FinalHero() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '90px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <div
          className="mono-tag"
          style={{
            marginBottom: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '12px',
            background: 'rgba(255, 85, 0, 0.08)',
            border: '1px solid rgba(255, 85, 0, 0.2)'
          }}
        >
          HARDWARE SUMMARY
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
          TRI—SHIELD
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
          A protective back cover with an invisible liquid core.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>
          Invisible technology. <span style={{ color: '#FF5500' }}>Visible protection.</span>
        </div>

        <div className="glass-panel" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500' }} />
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
            CONCEPT / PROTOTYPE DEVELOPMENT
          </span>
        </div>
      </div>
    </div>
  );
}
