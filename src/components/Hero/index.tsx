'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center text-white py-36 px-6 md:px-12 lg:px-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bkg/bg-hero-nvo.webp')" }}
    >
      {/* Overlay para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
          <span className="text-red-600">Diseño</span> y <span className="text-red-600">Desarrollo Web</span> Profesional
        </h1>
        
        <p className="mt-4 text-lg text-gray-300">
          Nos adaptamos a tus necesidades para que tengas presencia online de manera efectiva. Diseño y desarrollo web personalizado para impulsar tu marca.
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
    </section>
  );
};

export default Hero;
