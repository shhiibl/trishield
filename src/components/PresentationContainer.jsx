import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';
import OpeningExperience from './OpeningExperience';
import NavigationControls from './NavigationControls';
import PhoneStage3D from './3d/PhoneStage3D';

import Slide01Problem from './slides/Slide01Problem';
import Slide02ProductReveal from './slides/Slide02ProductReveal';
import Slide03LayerAnatomy from './slides/Slide03LayerAnatomy';
import Slide04ThermalDynamics from './slides/Slide04ThermalDynamics';
import Slide05ImpactHydroSeal from './slides/Slide05ImpactHydroSeal';
import Slide06UseCases from './slides/Slide06UseCases';
import Slide07BusinessModel from './slides/Slide07BusinessModel';
import Slide08FinalHero from './slides/Slide08FinalHero';

export default function PresentationContainer() {
  const { currentSlide, openingDone } = usePresentation();

  const slideComponents = [
    <Slide01Problem key="slide-1" />,
    <Slide02ProductReveal key="slide-2" />,
    <Slide03LayerAnatomy key="slide-3" />,
    <Slide04ThermalDynamics key="slide-4" />,
    <Slide05ImpactHydroSeal key="slide-5" />,
    <Slide06UseCases key="slide-6" />,
    <Slide07BusinessModel key="slide-7" />,
    <Slide08FinalHero key="slide-8" />
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        overflow: 'hidden',
        backgroundColor: '#08080a'
      }}
    >
      <OpeningExperience />
      <NavigationControls />
      <PhoneStage3D />

      {openingDone && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            {slideComponents[currentSlide]}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
