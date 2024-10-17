'use client';
import { LottieAnimation } from '@/components/LottieAnimation';

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gray-light dark:bg-dark py-32 md:py-33 lg:py-40 xl:py-28"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Animación Lottie en la parte superior en mobile */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <div className="max-w-xs md:max-w-md">
                <LottieAnimation />
              </div>
            </div>

            {/* Texto del lado derecho (debajo en mobile) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="font-extrabold text-3xl md:text-5xl text-gray-800 dark:text-white leading-tight">
                <span className="block text-[#d42629]">Diseño Web Profesional</span>
                para <span className="text-[#d42629]">Emprendedores</span>
              </h1>
              <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                Soluciones rápidas, económicas y optimizadas para tu negocio.
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-md md:text-lg">
                Nos adaptamos a tus necesidades para que tengas presencia online de manera efectiva. Te ofrecemos un diseño web personalizado para impulsar tu marca.
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <a 
                  href="https://wa.me/542984252859" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#d42629] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#b01f21] transition duration-300 ease-in-out text-center"
                >
                  Solicita tu Consultoría Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
