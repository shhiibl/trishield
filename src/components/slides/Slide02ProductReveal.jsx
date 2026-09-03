import React from 'react';
import { motion } from 'framer-motion';
import { User, Flame, ShieldAlert, Droplets, ArrowRight } from 'lucide-react';

export default function Slide02ProductReveal() {
  const problems = [
    {
      icon: Flame,
      color: '#FF5500',
      title: 'Problem 1: Phone Overheating',
      simpleNote: 'Heavy gaming, direct sunlight, and charging trap heat inside traditional plastic cases. This slows down the processor and damages battery life long-term.'
    },
    {
      icon: ShieldAlert,
      color: '#FFAA00',
      title: 'Problem 2: Fragile Rear Glass',
      simpleNote: 'Modern smartphones have glass backs. Standard slim cases fail to absorb drop energy, causing the back glass to crack easily on hard concrete.'
    },
    {
      icon: Droplets,
      color: '#0088FF',
      title: 'Problem 3: Moisture & Dust Wear',
      simpleNote: 'Dust and liquid fine droplets get trapped around case edges, slowly corroding internal ports and destroying rubber phone seals.'
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
        <div style={{ maxWidth: '640px' }}>
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
              PRESENTER 02 — THE PROBLEM & MARKET CHALLENGE
            </span>
          </div>

          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            Why standard phone cases fail.
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Thank you Presenter 1. Professor, everyday phone users face three major hardware risks that standard plastic covers cannot fix.
          </p>
        </div>

        {/* Presenter Card */}
        <div
          className="glass-panel"
          style={{
            padding: '16px 20px',
            textAlign: 'right',
            background: 'rgba(12, 14, 20, 0.9)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FF5500', fontWeight: 700 }}>
            SLIDE 02 OF 08
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            The Problem
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>
            Heat, Drops & Moisture Risks
          </div>
        </div>
      </div>

      {/* 3 Problem Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0',
          pointerEvents: 'auto'
        }}
      >
        {problems.map((prob, idx) => {
          const Icon = prob.icon;
          return (
            <div
              key={idx}
              className="glass-panel-interactive"
              style={{
                padding: '24px',
                background: 'rgba(12, 14, 20, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${prob.color}15`, border: `1px solid ${prob.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Icon size={20} color={prob.color} />
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {prob.title}
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {prob.simpleNote}
              </p>
            </div>
          );
        })}
      </div>

      {/* Speaker Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.72rem', color: 'var(--text-dim)' }}>
          KEY TAKEAWAY: TRADITIONAL CASES INSULATE HEAT & LACK HYDRAULIC DROP DEFLECTION.
        </div>
        <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', color: '#FF5500', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>NEXT: PRESENTER 03 (3D LAYER ANATOMY)</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}
