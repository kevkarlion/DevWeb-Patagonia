'use client';

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
    id="home"
    className="relative flex items-center justify-center text-center text-white py-36 px-6 md:px-12 lg:px-24 bg-cover  bg-center min-h-screen 
               bg-[url('/images/bkg/bg-hero-mobile.webp')] md:bg-[url('/images/bkg/bg-hero-tablet.webp')] lg:bg-[url('/images/bkg/bg-hero-nvo.webp')]"
    initial={{ filter: "blur(20px)", opacity: 0.2 }}
    animate={{ filter: "blur(0px)", opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
      {/* Overlay para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-none md:backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl leading-tight">
          <span className="text-red-600">Diseño</span> y <span className="text-red-600">Desarrollo Web</span> Profesional
        </h1>

        <p className=" mt-4 text-lg text-white bg-white bg-opacity-10  p-4 rounded-lg mx-auto max-w-md">
        Impulsa tu negocio con una presencia online poderosa
        </p>

        <div className="mt-8">
          <a 
            href="https://wa.me/542984252859" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Solicita tu Consultoría Gratis
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
