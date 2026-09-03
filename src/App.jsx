import React from 'react';
import { PresentationProvider } from './context/PresentationContext';
import PresentationContainer from './components/PresentationContainer';

export default function App() {
  return (
    <PresentationProvider>
      <PresentationContainer />
    </PresentationProvider>
  );
}
