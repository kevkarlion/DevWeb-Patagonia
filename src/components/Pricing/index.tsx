'use client'
import { useEffect } from 'react';
import { ContactCTA } from '@/components/Cta'
import WOW from 'wowjs';

const PricingSection = () => {
 
 
  useEffect(() => {
    // Este bloque de código solo se ejecuta en el cliente
    const WOW = require('wowjs'); // Mueve esta línea aquí
    new WOW.WOW().init();
  }, []);

  return (
    <div className="py-28 bg-gray-50 dark:bg-darkQuint"  id='precios'  style={{scrollMarginTop:'90px'}}>
      <div className="max-w-5xl mx-auto text-center ">
        <h2 className="mb-6 dark text-center font-extrabold text-4xl md:text-5xl leading-snug text-gray-800 dark:text-white sm:text-4xl  ">
          Tarifas y Opciones de Servicio
        </h2>
        <p className="mb-10 text-gray-600 wow fadeIn text-lg dark:text-white">
          Puedes tener tu web desde <span className="font-bold text-[#d42629]">$200USD</span>. 
          Ofrecemos soluciones a medida para emprendedores, y aquí te damos una idea de nuestros servicios:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {/* Diseño Web */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">Diseño Web Personalizado</h3>
          <p className="text-gray-700 dark:text-white">
            Creamos páginas web adaptadas a tus necesidades específicas.
          </p>
        </div>

        {/* One Page */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">One Page</h3>
          <p className="text-gray-700 dark:text-white">
            Ideal para proyectos sencillos y directos.
          </p>
        </div>

        {/* Landing Page */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">Landing Page</h3>
          <p className="text-gray-700 dark:text-white">
            Captura leads de manera efectiva con un diseño atractivo.
          </p>
        </div>

        {/* E-commerce */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">E-commerce</h3>
          <p className="text-gray-700 dark:text-white">
            Potencia tus ventas con una tienda online a medida.
          </p>
        </div>

        {/* SEO y Mantenimiento */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">SEO y Mantenimiento</h3>
          <p className="text-gray-700 dark:text-white">
            Aseguramos que tu web se mantenga optimizada y actualizada.
          </p>
        </div>
        
      </div>
      <p className="text-lg md:text-2xl font-medium text-gray-800 dark:text-white text-center mb-2 mt-14">
        ¿Listo para comenzar tu proyecto?
      </p>
      <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 text-center mb-4">
        ¡Hablemos sobre tu idea!
      </p>
      <ContactCTA buttonText='Contactanos' href="https://wa.me/542984252859" />
    </div>
  );
};

export default PricingSection;
