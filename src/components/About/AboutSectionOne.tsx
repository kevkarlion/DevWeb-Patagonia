'use client'
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect } from "react";
import WOW from "wowjs";



const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);


const AboutSectionOne = () => {
  const List = ({ text, description, number }) => (
    <div className="mb-5 wow fadeInUp" data-wow-delay={`${number * 0.2}s`}>
      <p className="flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        <span className="mr-2 text-primary font-bold">{number}.</span> {text}
      </p>
      <p className="ml-[44px] text-sm text-body-color">{description}</p>
    </div>
  );



  //windows no corre del lado del servidor
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs'); // Utilizamos require dentro del efecto
      new WOW.WOW().init();
    }
  }, []);

  
  return (
    <section id="flujo" style={{scrollMarginTop:'90px'}} className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Nuestro Proceso de Trabajo"
                paragraph="Cada proyecto de diseño web es único, y hemos perfeccionado un proceso de trabajo que garantiza que entreguemos soluciones personalizadas y de alta calidad. A continuación, te explicamos cada paso clave en nuestro proceso de trabajo."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      text="Consulta y Estrategia"
                      description="Iniciamos con una consulta detallada para entender tus necesidades, objetivos y público objetivo. Definimos una estrategia que garantizará que tu sitio web no solo sea atractivo, sino también funcional y orientado a la conversión."
                      number={1}
                    />
                    <List
                      text="Diseño UX/UI"
                      description="Creamos un diseño intuitivo y centrado en el usuario, priorizando la experiencia de navegación (UX) y un interfaz visualmente atractiva (UI), con el objetivo de captar la atención de tus usuarios desde el primer clic."
                      number={2}
                    />
                    <List
                      text="Desarrollo y Optimización"
                      description="Desarrollamos tu sitio web utilizando las últimas tecnologías, asegurando que sea rápido, seguro y esté optimizado para motores de búsqueda (SEO). Nos enfocamos en la conversión y en que tu página cargue rápidamente."
                      number={3}
                    />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List
                      text="Pruebas y Lanzamiento"
                      description="Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores para garantizar que todo funcione a la perfección. Una vez que todo está listo, lanzamos tu sitio web de manera segura y eficiente."
                      number={4}
                    />
                    <List
                      text="Mantenimiento Continuo"
                      description="Ofrecemos mantenimiento continuo para asegurarnos de que tu sitio web siga funcionando de manera óptima. Esto incluye actualizaciones regulares, monitoreo de rendimiento y ajustes según sea necesario."
                      number={5}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 wow fadeInRight" data-wow-delay=".5s">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
