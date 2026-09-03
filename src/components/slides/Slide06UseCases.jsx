import React, { useState } from 'react';
import { Sliders, PieChart } from 'lucide-react';

export default function Slide06UseCases() {
  const [units, setUnits] = useState(25000);
  const [price, setPrice] = useState(1699);

  // Financial Constants
  const bomCostPerUnit = 580; // ₹580 per unit total manufacturing cost
  const totalRevenue = units * price;
  const totalBOMCost = units * bomCostPerUnit;
  const grossProfit = totalRevenue - totalBOMCost;
  const marginPercent = ((price - bomCostPerUnit) / price) * 100;

  const presetUnits = [5000, 25000, 50000, 100000, 250000, 500000];

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

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
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Interactive Profit Generator.
          </h1>
          <p style={{ marginTop: '4px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.4 }}>
            Our business model: drag the slider to test sales volume and calculate net profit live.
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
            SLIDE 06 OF 07
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            Unit Financials
          </div>
        </div>
      </div>

      {/* Main Drag Meter & Cost Breakdown Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {/* Left Side: Drag Meter Interactive Card */}
        <div
          className="glass-panel"
          style={{
            padding: '24px',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            boxShadow: '0 0 30px rgba(255, 85, 0, 0.15)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sliders size={18} color="#FF5500" />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                PROFIT GENERATOR DRAG METER
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,85,0,0.12)', border: '1px solid rgba(255,85,0,0.3)' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500', fontWeight: 700 }}>
                INTERACTIVE DEMO
              </span>
            </div>
          </div>

          {/* Volume Drag Meter Slider */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                UNITS SOLD (SALES VOLUME)
              </span>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.2rem', fontWeight: 800, color: '#FF5500' }}>
                {units.toLocaleString('en-IN')} <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Units</span>
              </span>
            </div>

            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="luxury-drag-slider"
              style={{ width: '100%' }}
            />

            {/* Quick Preset Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {presetUnits.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setUnits(preset)}
                  style={{
                    flex: 1,
                    padding: '6px 0',
                    borderRadius: '6px',
                    border: units === preset ? '1px solid #FF5500' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: units === preset ? '#FF5500' : 'rgba(255, 255, 255, 0.04)',
                    color: units === preset ? '#FFFFFF' : 'var(--text-secondary)',
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                >
                  {preset >= 100000 ? `${preset / 100000}L` : `${preset / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          {/* MSRP Unit Price Drag Slider */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                RETAIL PRICE PER UNIT (MSRP)
              </span>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>
                ₹{price.toLocaleString('en-IN')} <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>/ unit</span>
              </span>
            </div>

            <input
              type="range"
              min="1200"
              max="3000"
              step="50"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="luxury-drag-slider"
              style={{ width: '100%' }}
            />
          </div>

          {/* Financial Calculation Cards Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>GROSS REVENUE</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                {formatCurrency(totalRevenue)}
              </div>
            </div>

            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>MFG COST (₹580/U)</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '2px' }}>
                {formatCurrency(totalBOMCost)}
              </div>
            </div>

            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 85, 0, 0.15)', border: '1px solid rgba(255, 85, 0, 0.4)' }}>
              <div style={{ fontSize: '0.62rem', color: '#FF5500', letterSpacing: '0.05em', fontWeight: 700 }}>PROJECTED NET PROFIT</div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.15rem', fontWeight: 800, color: '#FF5500', marginTop: '2px' }}>
                {formatCurrency(grossProfit)}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Per-Unit Margin & Manufacturing Cost Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Per-Unit Margin Card */}
          <div
            className="glass-panel"
            style={{
              padding: '20px',
              background: 'rgba(12, 14, 20, 0.85)',
              borderColor: 'rgba(0, 136, 255, 0.3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                PROFIT MARGIN PER UNIT
              </span>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#0088FF', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)' }}>
                {marginPercent.toFixed(1)}% MARGIN
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.8rem', fontWeight: 800, color: '#0088FF' }}>
                ₹{(price - bomCostPerUnit).toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>net yield / unit</span>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div
            className="glass-panel"
            style={{
              flex: 1,
              padding: '18px 20px',
              background: 'rgba(12, 14, 20, 0.85)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <PieChart size={16} color="#FF5500" />
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: '#FFFFFF', fontWeight: 700 }}>
                MANUFACTURING COST (BOM ₹580)
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { name: 'PC / TPU Outer Armor Shell', cost: '₹120' },
                { name: 'Dielectric Liquid Chamber', cost: '₹135' },
                { name: 'Elastomer Impact Matrix', cost: '₹95' },
                { name: 'Graphite Thermal Spreader', cost: '₹105' },
                { name: 'Precision Seal & Gasket Assembly', cost: '₹125' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    fontSize: '0.78rem'
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
                  <span style={{ fontFamily: "'Space Grotesk', monospace", color: '#FF5500', fontWeight: 700 }}>{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        DRAG THE METER SLIDER TO TEST SALES VOLUME & CALCULATE NET PROFIT IN REAL TIME.
      </div>
    </div>
  );
}
