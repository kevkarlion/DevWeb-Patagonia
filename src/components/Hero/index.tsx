"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('/images/bkg/bg-hero-nvo.webp')] bg-cover bg-center bg-no-repeat px-6 py-36 text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Overlay con gradiente moderno */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Subtítulo animado */}
        <motion.p 
          className="mb-4 text-lg font-semibold text-red-400 md:text-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transformamos ideas en experiencias digitales
        </motion.p>

        {/* Título principal con animación escalonada */}
        <motion.h1
          className="text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Diseño
            </span>{" "}
            que inspira,
          </span>
          <span className="block">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Desarrollo
            </span>{" "}
            que transforma
          </span>
        </motion.h1>

        {/* Texto animado con efecto máquina de escribir */}
        <div className="mt-6 h-20 md:h-24 lg:mt-8">
          <TypeAnimation
            sequence={[
              'Sitios web a medida para tu negocio',
              1500,
              'Experiencias digitales memorables',
              1500,
              'Soluciones tecnológicas innovadoras',
              1500,
              'Presencia online que genera resultados',
              1500
            ]}
            wrapper="span"
            speed={50}
            className="text-xl font-medium text-gray-300 md:text-2xl"
            repeat={Infinity}
          />
        </div>

        {/* CTA con animación */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="https://wa.me/542984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-900/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Comienza tu proyecto ahora
          </a>
          
          <a
            href="#servicios"
            className="transform rounded-lg border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            Conoce nuestros servicios
          </a>
        </motion.div>

        {/* Elemento decorativo animado */}
        <motion.div
          className="absolute -bottom-10 left-1/2 h-1 w-20 -translate-x-1/2 transform bg-red-500"
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;