import { useEffect } from 'react';


export const Banner = () => {
  useEffect(() => {
    // Este bloque de código solo se ejecuta en el cliente
    const WOW = require('wowjs'); // Mueve esta línea aquí
    new WOW.WOW().init();
  }, []);

  return (
    <div className="bg-primary text-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
      <h2 className="text-2xl font-bold mb-4">Transformamos ideas en resultados reales</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Diseño personalizado</h3>
        <p>Cada proyecto es único. Te ayudamos a crear una web que hable por tu marca, no importa si buscas algo simple o exclusivo.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Tecnología de vanguardia</h3>
        <p>Construimos tu web con las herramientas más avanzadas, asegurando rendimiento y flexibilidad para crecer contigo.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Resultados comprobados</h3>
        <p>Nuestros sitios no solo se ven bien; están diseñados para generar impacto, atraer clientes y potenciar tu negocio.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Sin complicaciones</h3>
        <p>Nos encargamos de todo el proceso: desde el diseño hasta la implementación. Tú solo te enfocas en lo que importa, tu negocio.</p>
      </div>
      <h3 className="text-lg font-semibold mt-6">Elige crecer. Elige con confianza.</h3>
    </div>
  );
};


