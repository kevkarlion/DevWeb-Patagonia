'use client';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/Animation - 1729134217597.json'; // Asegúrate de tener la ruta correcta

export const LottieAnimation = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // Comienza la animación en un segmento distinto
      lottieRef.current.playSegments([30, 210], true); // Ejemplo: del frame 30 al 120
    }
  }, []);

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true} // Mantener loop
      />
    </div>
  );
};






