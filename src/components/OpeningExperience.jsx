import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';

export default function OpeningExperience() {
  const { openingDone, setOpeningDone } = usePresentation();

  useEffect(() => {
    if (openingDone) return;

    // Quick 1.2s minimal intro sequence
    const timer = setTimeout(() => {
      setOpeningDone(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [openingDone, setOpeningDone]);

  if (openingDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#08080a',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5500' }} />
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#FFFFFF',
              textTransform: 'uppercase'
            }}
          >
            TRI—SHIELD
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
