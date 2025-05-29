'use client'
import { useEffect } from 'react';
import { ContactCTA } from '@/components/Cta'
import WOW from 'wowjs';

const PricingSection = () => {
  useEffect(() => {
    const WOW = require('wowjs');
    new WOW.WOW().init();
  }, []);

  return (
    <div className="py-28 bg-gray-50 dark:bg-darkQuint" id='precios' style={{scrollMarginTop:'90px'}}>
      <div className="text-center">
        <h2 className="mb-6 dark text-center font-extrabold text-4xl md:text-5xl leading-snug text-gray-800 dark:text-white sm:text-4xl">
          Soluciones a Medida
        </h2>
        <p className="mb-10 text-gray-600 wow fadeIn text-lg dark:text-white">
          Cada proyecto web es único y requiere una solución personalizada. 
          Analizamos tus necesidades para ofrecerte la mejor opción.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Diseño Web */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">Diseño Web Personalizado</h3>
          <p className="text-gray-700 dark:text-white">
            Soluciones creativas adaptadas a tu marca y objetivos.
          </p>
        </div>

        {/* One Page */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">One Page</h3>
          <p className="text-gray-700 dark:text-white">
            Presentación efectiva de tu proyecto en una sola página.
          </p>
        </div>

        {/* Landing Page */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">Landing Page</h3>
          <p className="text-gray-700 dark:text-white">
            Diseños optimizados para conversiones y captación de leads.
          </p>
        </div>

        {/* E-commerce */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">E-commerce</h3>
          <p className="text-gray-700 dark:text-white">
            Plataformas de venta online escalables y seguras.
          </p>
        </div>

        {/* SEO y Mantenimiento */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">SEO y Mantenimiento</h3>
          <p className="text-gray-700 dark:text-white">
            Optimización continua y actualizaciones para tu web.
          </p>
        </div>
        
        {/* Consultoría Personalizada */}
        <div className="p-6 bg-white shadow-lg rounded-lg wow fadeIn dark:bg-darkCardsTwo">
          <h3 className="text-xl font-semibold text-[#d42629]">Consultoría Personalizada</h3>
          <p className="text-gray-700 dark:text-white">
            Analizamos tu proyecto y te asesoramos sin compromiso.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600 dark:text-gray-300 wow fadeIn">
          ¿No encuentras lo que buscas? <br className="md:hidden"/> 
          <span className="font-medium">Cada proyecto tiene sus particularidades</span> - 
          hablemos para crear una solución a tu medida.
        </p>
      </div>
      
      <p className="text-lg md:text-2xl font-medium text-gray-800 dark:text-white text-center mb-2 mt-14">
        ¿Listo para comenzar tu proyecto?
      </p>
      <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 text-center mb-4">
        ¡Agendemos una consulta sin costo!
      </p>
      <ContactCTA buttonText='Contactanos' href="https://wa.me/542984252859" />
    </div>
  );
};

export default PricingSection;