'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/Animation - 1729134217597.json'; // Asegúrate de que la ruta sea correcta

export const LottieAnimation = () => {
  const lottieRef = useRef(null);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

  useEffect(() => {
    setIsLottieLoaded(true);

    if (lottieRef.current) {
      // Especifica el cuadro de inicio y fin de la animación
      lottieRef.current.playSegments([30, 210], true); // Empieza en el frame 30 y termina en el 210
    }
  }, []);

  return (
    <div>
      {/* Renderiza el Lottie solo cuando el componente esté montado */}
      {isLottieLoaded && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={false} // Desactiva autoplay porque usamos playSegments manualmente
          style={{ width: '100%', height: '100%' }} // Ajusta según el tamaño necesario
        />
      )}
    </div>
  );
};
