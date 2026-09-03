import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Sliders, DollarSign, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function Slide07BusinessModel() {
  const [units, setUnits] = useState(50000);
  const [price, setPrice] = useState(1699);

  const bomCostPerUnit = 580; // Average Bill of Materials cost (₹500-₹650)
  const profitPerUnit = Math.max(0, price - bomCostPerUnit);
  const grossRevenue = units * price;
  const totalBomCost = units * bomCostPerUnit;
  // Estimated Net Profit after operating & logistics margins (~12%)
  const estNetProfit = Math.round(units * (profitPerUnit * 0.85));
  const grossMarginPercent = ((profitPerUnit / price) * 100).toFixed(1);

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const presetVolumes = [
    { label: '5K', val: 5000 },
    { label: '25K', val: 25000 },
    { label: '50K', val: 50000 },
    { label: '100K', val: 100000 },
    { label: '250K', val: 250000 },
    { label: '500K', val: 500000 }
  ];

  const costRows = [
    { label: 'PC / TPU Outer Armor Shell', cost: '₹120' },
    { label: 'Dielectric Liquid Chamber', cost: '₹135' },
    { label: 'Elastomer Impact Matrix', cost: '₹95' },
    { label: 'Graphite Thermal Spreader', cost: '₹105' },
    { label: 'Precision Seal & Gasket Assembly', cost: '₹125' }
  ];

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
        zIndex: 10,
        overflowY: 'auto'
      }}
    >
      {/* Slide Header */}
      <div style={{ maxWidth: '640px' }}>
        <div className="mono-tag" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PieChart size={14} color="#FF5500" />
          <span>FINANCIAL ARCHITECTURE & UNIT ECONOMICS</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Interactive Profit Calculator.
        </h1>
        <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.4 }}>
          Drag the meter slider to simulate total sales volume and analyze revenue, manufacturing cost, and projected profit.
        </p>
      </div>

      {/* Main Grid: Drag Meter Calculator (Left/Center) + BOM Breakdown (Right) */}
      <div style={{ display: 'flex', gap: '28px', marginTop: '16px', pointerEvents: 'auto' }}>
        
        {/* Left Side: Drag Meter Interactive Card */}
        <div
          className="glass-panel"
          style={{
            flex: 1.4,
            padding: '26px',
            borderColor: 'rgba(255, 85, 0, 0.25)',
            background: 'rgba(12, 14, 20, 0.85)',
            boxShadow: '0 0 35px rgba(0,0,0,0.6)'
          }}
        >
          {/* Header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sliders size={16} color="#FF5500" />
              </div>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.78rem', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.05em' }}>
                PROFIT SIMULATION METER
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,85,0,0.12)', border: '1px solid rgba(255,85,0,0.25)' }}>
              <Zap size={12} color="#FF5500" />
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500', fontWeight: 700 }}>
                LIVE METRIC
              </span>
            </div>
          </div>

          {/* Drag Control 1: Units Sold Slider */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                UNITS SOLD (SALES VOLUME)
              </span>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.4rem', color: '#FF5500', fontWeight: 800 }}>
                {units.toLocaleString('en-IN')} <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Units</span>
              </span>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="luxury-drag-slider"
              style={{
                background: `linear-gradient(to right, #FF5500 0%, #FF5500 ${((units - 1000) / (500000 - 1000)) * 100}%, rgba(255,255,255,0.08) ${((units - 1000) / (500000 - 1000)) * 100}%, rgba(255,255,255,0.08) 100%)`
              }}
            />

            {/* Quick Preset Volume Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {presetVolumes.map((preset) => (
                <button
                  key={preset.val}
                  onClick={() => setUnits(preset.val)}
                  style={{
                    flex: 1,
                    padding: '5px 0',
                    fontSize: '0.68rem',
                    fontFamily: "'Space Grotesk', monospace",
                    fontWeight: units === preset.val ? 700 : 500,
                    color: units === preset.val ? '#FFFFFF' : 'var(--text-dim)',
                    background: units === preset.val ? '#FF5500' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${units === preset.val ? '#FF5500' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Drag Control 2: MSRP Selling Price Slider */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                RETAIL PRICE PER UNIT (MSRP)
              </span>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 700 }}>
                ₹{price.toLocaleString('en-IN')} <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>/ unit</span>
              </span>
            </div>

            <input
              type="range"
              min={1200}
              max={3000}
              step={50}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="luxury-drag-slider"
              style={{
                background: `linear-gradient(to right, #0088FF 0%, #0088FF ${((price - 1200) / (3000 - 1200)) * 100}%, rgba(255,255,255,0.08) ${((price - 1200) / (3000 - 1200)) * 100}%, rgba(255,255,255,0.08) 100%)`
              }}
            />
          </div>

          {/* Live Dynamic Output Financial Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '20px' }}>
            
            {/* Metric 1: Total Revenue */}
            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '4px' }}>
                GROSS REVENUE
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                {formatCurrency(grossRevenue)}
              </div>
            </div>

            {/* Metric 2: Total Manufacturing BOM Cost */}
            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '4px' }}>
                MFG BOM COST (₹580/U)
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                {formatCurrency(totalBomCost)}
              </div>
            </div>

            {/* Metric 3: Projected Net Profit */}
            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(255,85,0,0.12)', border: '1px solid rgba(255,85,0,0.35)', boxShadow: '0 0 20px rgba(255,85,0,0.15)' }}>
              <div style={{ fontSize: '0.65rem', color: '#FF5500', letterSpacing: '0.08em', marginBottom: '4px', fontWeight: 700 }}>
                PROJECTED NET PROFIT
              </div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.3rem', fontWeight: 800, color: '#FF5500' }}>
                {formatCurrency(estNetProfit)}
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Unit Specs & Itemized BOM Breakdown */}
        <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Unit Profit summary box */}
          <div className="glass-panel" style={{ padding: '20px', borderColor: 'rgba(0,136,255,0.3)', background: 'rgba(10,12,18,0.85)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>PER-UNIT PROFIT CONTRIBUTION</span>
              <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(0,136,255,0.15)', color: '#0088FF', fontWeight: 700 }}>
                {grossMarginPercent}% MARGIN
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '2.1rem', fontWeight: 800, color: '#0088FF' }}>
                ₹{profitPerUnit.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                net yield / unit
              </span>
            </div>
          </div>

          {/* BOM Itemized Cost Breakdown */}
          <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Layers size={14} color="#FF5500" />
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                BOM COST STRUCTURE (AVG ₹580)
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {costRows.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    fontSize: '0.78rem'
                  }}
                >
                  <span style={{ color: '#FFFFFF' }}>{row.label}</span>
                  <span style={{ fontFamily: "'Space Grotesk', monospace", color: '#FF5500', fontWeight: 600 }}>
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Footer info tag */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '14px' }}>
        FINANCIAL ARCHITECTURE — SCALABLE MARGIN & HIGH-MARGIN UNIT ECONOMICS
      </div>
    </div>
  );
}
