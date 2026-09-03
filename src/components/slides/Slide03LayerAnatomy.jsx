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
      material: 'Aerospace-Grade Polycarbonate (PC) + TPU Outer Lip',
      properties: 'Tensile Strength: 70 MPa | Impact Resistance: High | Oleophobic Coated',
      uses: 'Primary structural shield that deflects sharp abrasive forces and resists UV yellowing.',
      icon: Layers
    },
    {
      id: 1,
      code: 'LAYER 02',
      name: 'Dielectric Liquid Core',
      material: 'High-Purity Fluorinert Dielectric Fluid (0.4mm Sealed Chamber)',
      properties: 'Viscosity: 0.8 cSt | Thermal Cap: High | Non-Conductive / Stationary',
      uses: 'Provides hydrostatic pressure distribution for drop impacts and acts as a thermal buffer.',
      icon: Flame
    },
    {
      id: 2,
      code: 'LAYER 03',
      name: 'Elastomer Shock Matrix',
      material: 'Thermoplastic Elastomer (TPE) Honeycomb Grid',
      properties: 'Durometer: 70A | Elongation: 450% | Honeycomb Cell Lattice',
      uses: 'Absorbs kinetic shock waves and distributes drop energy across 32 perimeter cells.',
      icon: ShieldCheck
    },
    {
      id: 3,
      code: 'LAYER 04',
      name: 'Synthetic Graphite Spreader',
      material: 'Pyrolytic Synthetic Graphite Sheet (99.9% Carbon)',
      properties: 'Thermal Cond: 1500 W/m·K (in-plane) | Thickness: 0.05mm',
      uses: 'Spreads concentrated CPU/battery heat laterally away from phone body to perimeter edges.',
      icon: Cpu
    },
    {
      id: 4,
      code: 'LAYER 05',
      name: 'Microfiber Lining & Gasket',
      material: 'High-Density Microfiber + Fluorosilicone Perimeter Gasket',
      properties: 'Thread Count: Ultra-fine | Water Resistance: IP68 Edge Barrier',
      uses: 'Cushions phone rear glass against micro-abrasions and seals edges against dust and moisture.',
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
      <div style={{ maxWidth: '560px' }}>
        <div className="mono-tag" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500' }} />
          <span>TECHNICAL ANATOMY DIAGRAM</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Material Composition & Uses.
        </h1>
      </div>

      {/* Main Anatomy Breakdown Layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pointerEvents: 'auto' }}>
        
        {/* Left Side: 5 Layer Selector Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '340px' }}>
          {layersData.map((layer) => {
            const isSelected = activeIndex === layer.id;
            return (
              <div
                key={layer.id}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onClick={() => setHoveredLayer(layer.id)}
                className="glass-panel-interactive"
                style={{
                  padding: '14px 18px',
                  cursor: 'pointer',
                  borderColor: isSelected ? '#FF5500' : 'var(--border-subtle)',
                  backgroundColor: isSelected ? 'rgba(255, 85, 0, 0.18)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 0 20px rgba(255, 85, 0, 0.35)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 250ms ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: isSelected ? '#FF5500' : 'var(--text-dim)', fontWeight: 600 }}>
                      {layer.code}
                    </span>
                    {isSelected && (
                      <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', background: '#FF5500', color: '#FFF', fontWeight: 700 }}>
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>
                    {layer.name}
                  </div>
                </div>

                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isSelected ? '#FF5500' : 'rgba(255,255,255,0.15)' }} />
              </div>
            );
          })}
        </div>

        {/* Right Side: Detailed Anatomy Callout Card */}
        <motion.div
          key={activeData.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel"
          style={{
            width: '430px',
            padding: '24px',
            borderColor: 'rgba(255, 85, 0, 0.4)',
            background: 'rgba(12, 14, 20, 0.92)',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <activeData.icon size={20} color="#FF5500" />
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: '#FF5500', letterSpacing: '0.1em' }}>
                  {activeData.code} ANATOMY SPECS
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {activeData.name}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.3)' }}>
              <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.65rem', color: '#FF5500', fontWeight: 700 }}>
                CONNECTED LAYER
              </span>
            </div>
          </div>

          <div style={{ marginBottom: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '4px' }}>
              MATERIAL COMPOSITION
            </div>
            <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 500, lineHeight: 1.4 }}>
              {activeData.material}
            </div>
          </div>

          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '4px' }}>
              PHYSICAL PROPERTIES
            </div>
            <div style={{ fontSize: '0.8rem', color: '#FF5500', fontFamily: "'Space Grotesk', monospace", fontWeight: 600 }}>
              {activeData.properties}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '4px' }}>
              ENGINEERING USES & FUNCTION
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
              {activeData.uses}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        SELECT OR HOVER OVER ANY MATERIAL LAYER ON THE LEFT TO INSPECT ANATOMY SPECS
      </div>
    </div>
  );
}
