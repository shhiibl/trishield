import React from 'react';
import { usePresentation } from '../../context/PresentationContext';
import { Layers } from 'lucide-react';

export default function Slide03ExplodedArchitecture() {
  const { hoveredLayer, setHoveredLayer } = usePresentation();

  const layerLabels = [
    { id: 0, title: '01. PC / TPU Outer Shell', desc: 'Aerospace-grade polycarbonate armor.' },
    { id: 1, title: '02. Transparent Liquid Core', desc: 'Stationary dielectric shock & heat buffer.' },
    { id: 2, title: '03. Elastomer Impact Matrix', desc: 'Honeycomb elastomeric force spreader.' },
    { id: 3, title: '04. Graphite Thermal Spreader', desc: 'Directional conduction plane.' },
    { id: 4, title: '05. Microfiber Inner Lining', desc: 'Scratch guard & fluid gasket seal.' }
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
      {/* Headline */}
      <div style={{ maxWidth: '540px' }}>
        <div className="mono-tag" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={14} />
          <span>EXPLODED ARCHITECTURE</span>
        </div>
        <h1 className="headline-large" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Layered precision.
        </h1>
      </div>

      {/* Layer Labels List */}
      <div
        style={{
          position: 'absolute',
          right: '60px',
          top: '25%',
          width: '340px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          pointerEvents: 'auto'
        }}
      >
        {layerLabels.map((layer) => {
          const isHovered = hoveredLayer === layer.id;
          return (
            <div
              key={layer.id}
              onMouseEnter={() => setHoveredLayer(layer.id)}
              onMouseLeave={() => setHoveredLayer(null)}
              className="glass-panel-interactive"
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderColor: isHovered ? '#FF5500' : 'var(--border-subtle)',
                backgroundColor: isHovered ? 'rgba(255, 85, 0, 0.1)' : 'var(--bg-card)'
              }}
            >
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: isHovered ? '#FF5500' : '#FFFFFF' }}>
                {layer.title}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {layer.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Axiom */}
      <div style={{ maxWidth: '560px' }}>
        <div className="glass-panel" style={{ padding: '10px 18px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: '#FF5500', fontWeight: 600 }}>Principle:</span> Resist external thermal exposure without trapping internally generated heat.
          </div>
        </div>
      </div>
    </div>
  );
}
