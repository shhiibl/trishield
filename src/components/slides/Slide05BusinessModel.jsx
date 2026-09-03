import React from 'react';
import { PieChart, AlertCircle } from 'lucide-react';

export default function Slide05BusinessModel() {
  const costRows = [
    { label: 'PC / TPU Outer Shell', cost: '₹100–₹130' },
    { label: 'Dielectric Liquid Chamber', cost: '₹120–₹150' },
    { label: 'Elastomer Impact Matrix', cost: '₹80–₹110' },
    { label: 'Graphite Thermal Spreader', cost: '₹90–₹120' },
    { label: 'Precision Assembly & Seal', cost: '₹110–₹140' }
  ];

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
      <div style={{ maxWidth: '540px' }}>
        <div className="mono-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PieChart size={14} />
          <span>UNIT ECONOMICS</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Viable manufacturing cost.
        </h1>
      </div>

      <div style={{ display: 'flex', gap: '32px', pointerEvents: 'auto' }}>
        {/* Left Side Table */}
        <div className="glass-panel" style={{ flex: 1.2, padding: '24px' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '14px' }}>
            BOM (BILL OF MATERIALS) BREAKDOWN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {costRows.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  fontSize: '0.86rem'
                }}
              >
                <span style={{ color: '#FFFFFF' }}>{row.label}</span>
                <span style={{ fontFamily: "'Space Grotesk', monospace", color: 'var(--text-secondary)' }}>{row.cost}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '16px',
              padding: '12px 14px',
              borderRadius: '8px',
              background: 'rgba(255, 85, 0, 0.08)',
              border: '1px solid rgba(255, 85, 0, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FFFFFF' }}>Total BOM Cost</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FF5500' }}>~₹500–₹650</span>
          </div>
        </div>

        {/* Right Side Retail & Contribution */}
        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '4px' }}>MSRP RETAIL PRICE</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#FFFFFF' }}>₹1,699</div>
          </div>

          <div className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ fontSize: '0.7rem', color: '#0088FF', marginBottom: '4px' }}>ESTIMATED GROSS CONTRIBUTION</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0088FF' }}>~₹1,099 / unit</div>
            <div style={{ marginTop: '10px', fontSize: '0.7rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertCircle size={12} color="#FF5500" />
              <span>Gross contribution ≠ net profit</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        FINANCIAL ARCHITECTURE
      </div>
    </div>
  );
}
