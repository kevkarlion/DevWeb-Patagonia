'use client';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useEffect } from 'react';
import WOW from 'wowjs';
import { ContactCTA } from '../Cta';
import { Banner } from '../Banner';

// Icono del check con color primario
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current text-[#d42629]">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, description, number }) => (
    <div className="mb-6 p-6 bg-white dark:bg-darkCards shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg wow fadeInUp" data-wow-delay={`${number * 0.2}s`}>
      <p className="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-2">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-[#d42629] bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        <span className="mr-2 text-[#d42629] font-bold">{number}.</span> {text}
      </p>
      <p className="ml-[44px] text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );

  // Init WOW.js en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs');
      new WOW.WOW().init();
    }
  }, []);

  return (
    <section id="flujo" style={{ scrollMarginTop: '90px' }} className="pt-16 md:pt-20 lg:pt-28 dark:bg-darkSext">
      <div className="container">
        <div className="border-b border-gray-300 dark:border-gray-600 pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Nuestro Proceso de Trabajo"
                paragraph="Cada proyecto es único, y hemos perfeccionado un proceso que garantiza soluciones de alta calidad. A continuación, te explicamos cada paso clave en nuestro flujo de trabajo."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      text="Consulta y Estrategia"
                      description="Iniciamos con una consulta detallada para entender tus necesidades y definir una estrategia eficaz."
                      number={1}
                    />
                    <List
                      text="Diseño UX/UI"
                      description="Creamos un diseño centrado en la experiencia del usuario (UX) y una interfaz atractiva (UI)."
                      number={2}
                    />
                    <List
                      text="Desarrollo y Optimización"
                      description="Desarrollamos tu sitio con las últimas tecnologías, optimizado para SEO y la conversión."
                      number={3}
                    />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      text="Pruebas y Lanzamiento"
                      description="Probamos en diferentes dispositivos y navegadores, asegurando que todo funcione perfecto."
                      number={4}
                    />
                    <List
                      text="Mantenimiento Continuo"
                      description="Ofrecemos mantenimiento continuo para garantizar el rendimiento óptimo de tu sitio web."
                      number={5}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Banner />
          </div>
          <ContactCTA buttonText='Comienza tu proyecto con nosotros' href='https://wa.me/542984252859'/>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
