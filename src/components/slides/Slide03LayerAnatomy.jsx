import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { Cpu, Layers, ShieldCheck, Flame, Droplets } from 'lucide-react';

export default function Slide03LayerAnatomy() {
  const { hoveredLayer, setHoveredLayer } = usePresentation();

  const layersData = [
    {
      id: 0,
      code: 'LAYER 01',
      name: 'Outer Armor Shell',
      material: 'Clear Polycarbonate Shell',
      simpleNote: 'Scratches & impact shield. Protects the case surface from UV yellowing and sharp scratches.',
      icon: Layers
    },
    {
      id: 1,
      code: 'LAYER 02',
      name: 'Dielectric Liquid Core',
      material: '0.4mm Sealed Cooling Fluid',
      simpleNote: 'Thermal absorber. Absorbs sunlight and internal CPU heat, keeping phone temperature cool.',
      icon: Flame
    },
    {
      id: 2,
      code: 'LAYER 03',
      name: 'Elastomer Shock Matrix',
      material: '32-Cell Honeycomb Grid',
      simpleNote: 'Drop cushion. 32 rubber cells flex during drops to absorb heavy forces away from glass.',
      icon: ShieldCheck
    },
    {
      id: 3,
      code: 'LAYER 04',
      name: 'Synthetic Graphite Spreader',
      material: 'Pyrolytic Graphite Sheet',
      simpleNote: 'Heat spreader. Draws heat away from the hot processor and spreads it out to the edges.',
      icon: Cpu
    },
    {
      id: 4,
      code: 'LAYER 05',
      name: 'Microfiber & Hydro-Gasket',
      material: 'IP68 Rubber Seal Lip',
      simpleNote: 'Water & scratch seal. Soft interior lining prevents glass scratches while edge gasket blocks water.',
      icon: Droplets
    }
  ];

  const activeIndex = hoveredLayer ?? 0;
  const activeData = layersData[activeIndex];

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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '640px' }}>
          <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
            5-Layer Composite Architecture.
          </h1>
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
            SLIDE 03 OF 07
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
            3D Layer Details
          </div>
        </div>
      </div>

      {/* Main Anatomy Breakdown Layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'auto' }}>
        
        {/* Left Side: 5 Layer Selector Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '290px' }}>
          {layersData.map((layer) => {
            const isSelected = activeIndex === layer.id;
            return (
              <div
                key={layer.id}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onClick={() => setHoveredLayer(layer.id)}
                className="glass-panel-interactive"
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  borderColor: isSelected ? '#FF5500' : 'var(--border-subtle)',
                  backgroundColor: isSelected ? 'rgba(255, 85, 0, 0.18)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 20px rgba(255, 85, 0, 0.35)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease'
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: isSelected ? '#FF5500' : 'var(--text-dim)', fontWeight: 600 }}>
                    {layer.code}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginTop: '1px' }}>
                    {layer.name}
                  </div>
                </div>

                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isSelected ? '#FF5500' : 'rgba(255,255,255,0.15)' }} />
              </div>
            );
          })}
        </div>

        {/* Center: High-Resolution 3D Exploded Layer Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-panel"
          style={{
            flex: 1,
            margin: '0 20px',
            height: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.12) 0%, rgba(8, 10, 15, 0.9) 75%)',
            borderColor: 'rgba(255, 85, 0, 0.3)',
            boxShadow: '0 0 35px rgba(0, 0, 0, 0.7)'
          }}
        >
          <img
            src="/3d-layer-exploded.png"
            alt="TRI-SHIELD 3D Layer Exploded View"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '10px',
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))'
            }}
          />

          {/* Active Layer Tag Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '14px',
              right: '14px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(10, 12, 18, 0.9)',
              border: '1px solid rgba(255, 85, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500' }} />
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 700 }}>
                {activeData.code}: {activeData.name.toUpperCase()}
              </span>
            </div>
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.62rem', color: '#FF5500', fontWeight: 700 }}>
              3D CAD EXPLOSION
            </span>
          </div>
        </motion.div>

        {/* Right Side: Detailed Anatomy Callout Card */}
        <motion.div
          key={activeData.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel"
          style={{
            width: '360px',
            padding: '20px',
            borderColor: 'rgba(255, 85, 0, 0.4)',
            background: 'rgba(12, 14, 20, 0.92)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <activeData.icon size={18} color="#FF5500" />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500', letterSpacing: '0.08em' }}>
                {activeData.code} SPECS
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                {activeData.name}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '10px', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '2px' }}>
              MATERIAL USED
            </div>
            <div style={{ fontSize: '0.84rem', color: '#FFFFFF', fontWeight: 600 }}>
              {activeData.material}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '2px' }}>
              HOW IT WORKS (SIMPLE SUMMARY)
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
              {activeData.simpleNote}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        HOVER OR CLICK ON ANY LAYER BUTTON TO INSPECT COMPOSITE HARDWARE MATERIALS.
      </div>
    </div>
  );
}
