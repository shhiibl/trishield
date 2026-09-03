import React from 'react';
import { motion } from 'framer-motion';
import { User, Flame, ShieldAlert, Droplets, ArrowRight } from 'lucide-react';

export default function Slide02ProductReveal() {
  const motives = [
    {
      icon: Flame,
      color: '#FF5500',
      num: 'MOTIVE 01',
      title: 'Stopping Phone Overheating',
      simpleNote: 'Smartphones slow down and battery health drops rapidly when heat gets trapped inside standard plastic cases during high gaming or direct sunlight.'
    },
    {
      icon: ShieldAlert,
      color: '#FFAA00',
      num: 'MOTIVE 02',
      title: 'Protecting Shatter-Prone Rear Glass',
      simpleNote: 'Modern smartphones use fragile glass backs. Standard cases fail to absorb drop shock, leaving users with expensive ₹15,000+ glass repair bills.'
    },
    {
      icon: Droplets,
      color: '#0088FF',
      num: 'MOTIVE 03',
      title: 'Preventing Moisture & Dust Wear',
      simpleNote: 'Dust and water fine droplets seep behind cheap cases, scratching the glass back and corroding internal seals over time.'
    }
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
        zIndex: 10
      }}
    >
      {/* Header with Speaker Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '660px' }}>
          <div
            className="glass-panel"
            style={{
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(255, 85, 0, 0.12)',
              borderColor: 'rgba(255, 85, 0, 0.3)',
              pointerEvents: 'auto'
            }}
          >
            <User size={14} color="#FF5500" />
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', fontWeight: 800, color: '#FFFFFF' }}>
              SLIDE 02 / PRESENTER 2 — THE MOTIVE & CAUSE
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Why we created TRI—SHIELD.
          </h1>
          <p style={{ marginTop: '6px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Thank you Presenter 1. Professor, our motivation was simple: existing phone cases only protect against light scratches, but ignore overheating, drop glass shatters, and moisture penetration.
          </p>
        </div>

        {/* Presenter Summary Card */}
        <div
          className="glass-panel"
          style={{
            padding: '14px 20px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', fontWeight: 700 }}>
            SLIDE 02 OF 07
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            The Cause & Motive
          </div>
        </div>
      </div>

      {/* 3 Motive Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {motives.map((mot, idx) => {
          const Icon = mot.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{
                padding: '26px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `${mot.color}15`, border: `1px solid ${mot.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color={mot.color} />
                </div>
                <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: mot.color, fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: `${mot.color}12` }}>
                  {mot.num}
                </span>
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {mot.title}
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {mot.simpleNote}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: 'var(--text-dim)' }}>
          PRESENTER 2: EXPLAIN THE 3 CORE MOTIVES THAT DROVE OUR HARDWARE PRODUCT INNOVATION.
        </div>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', color: '#FF5500', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>NEXT: SLIDE 03 (3D LAYER ANATOMY)</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}
