"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('/images/bkg/bg-hero-mobile.webp')] bg-cover bg-[position:center_bottom_-25px] px-6 py-36  text-center text-white md:bg-[url('/images/bkg/bg-hero-tablet.webp')]
               md:px-12 lg:bg-[url('/images/bkg/bg-hero-nvo.webp')] lg:px-24"
      initial={{ filter: "blur(20px)", opacity: 0.2 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Overlay para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm md:backdrop-blur-sm"></div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          <span className="text-red-600">Diseño</span> y{" "}
          <span className="text-red-600">Desarrollo Web</span> Profesional
        </h1>

        <p className=" mx-auto mt-4 max-w-md rounded-lg bg-white  bg-opacity-10 p-4 text-lg text-white">
          Impulsa tu negocio con una presencia online poderosa
        </p>

        <div className="mt-8">
          <a
            href="https://wa.me/542984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-red-700"
          >
            Solicita tu Consultoría Gratis
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
