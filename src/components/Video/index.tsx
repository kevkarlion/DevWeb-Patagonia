"use client"

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import "animate.css";
import { ContactCTA } from "../Cta";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs'); 
      new WOW.WOW().init();
    }
  }, []);

  return (
    <section className="relative dark:bg-darkTerciary z-10 py-16 md:py-20 lg:py-28" id="propuesta" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <SectionTitle
          title="Porque elegirnos"
          paragraph="Ofrecemos soluciones claras, personalizadas y alineadas con los objetivos de tu negocio. No solo diseñamos sitios web, construimos herramientas que maximizan tus resultados, con soporte continuo y una atención enfocada en generar impacto desde el primer día."
          center
          mb="80px"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white dark:bg-stroke-dark p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
              data-wow-delay=".15s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Plantillas o Diseños Personalizados
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Elige entre nuestras plantillas profesionales o trabaja en un diseño personalizado que refleje la identidad única de tu marca.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay=".3s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Diseño responsivo y optimizado
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Nuestros sitios funcionan perfectamente en cualquier dispositivo, garantizando una experiencia fluida.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay=".45s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Desarrollo en Next.js o WordPress
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Ofrecemos sitios personalizados con Next.js o la flexibilidad de WordPress. Te ayudamos a elegir la mejor opción para impulsar tu emprendimiento en el mundo digital.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay=".6s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Orientación a resultados
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Nos enfocamos en hacer crecer tu negocio con webs que generan impacto y resultados.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay=".75s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Soporte continuo
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Ofrecemos mantenimiento para que tu sitio esté siempre actualizado y en funcionamiento.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay=".9s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                Relación calidad-precio
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Precios justos y transparentes, con soluciones de alta calidad a un costo accesible.
              </p>
            </div>

            {/* Card 7 - SEO */}
            <div
              className="wow animate__animated animate__fadeInLeft flex h-full flex-col rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 dark:bg-stroke-dark"
              data-wow-delay="1.05s"
            >
              <h3 className="text-xl font-bold text-primary dark:text-white">
                SEO para atraer clientes de calidad
              </h3>
              <p className="mt-4 flex-grow text-gray-600 dark:text-gray-300">
                Un buen SEO mejora la visibilidad en motores de búsqueda y atrae clientes cualificados. Es clave para el éxito de cualquier emprendimiento online.
              </p>
            </div>
          </div>
        </div>
        < ContactCTA buttonText="Haz Crecer Tu Negocio con Nosotros" href="https://wa.me/542984252859"/>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
