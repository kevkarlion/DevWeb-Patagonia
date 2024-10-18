'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/animation-working-cofee.json'; // Asegúrate de que la ruta sea correcta

export const LottieAnimation = () => {
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

  useEffect(() => {
    setIsLottieLoaded(true);
  }, []);

  return (
    <div className='flex justify-center items-center'> {/* Centra el contenedor */}
      {/* Renderiza el Lottie solo cuando el componente esté montado */}
      {isLottieLoaded && (
        <Lottie
          animationData={animationData}
          loop={true} // Habilita el loop para que la animación siga repitiéndose
          autoplay={true} // Activa autoplay para que la animación comience automáticamente
          className="w-auto h-auto" // Permite que el Lottie mantenga su tamaño original
        />
      )}
    </div>
  );
};
