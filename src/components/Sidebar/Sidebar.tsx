'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const SidebarRedes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef(null); // Para manejar el timeout

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Ajustar el valor según el tamaño deseado
    };

    checkIfMobile(); // Inicializa la verificación
    window.addEventListener('resize', checkIfMobile); // Actualiza en caso de cambio de tamaño

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Función para manejar el clic
  const toggleSidebar = () => {
    clearTimeout(closeTimeoutRef.current); // Limpiar cualquier timeout en caso de clic
    setIsOpen(!isOpen);
  };

  // Función para manejar el cierre retardado
  const delayedClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 500); // Retardo de 500ms
  };

  return (
    <div className="fixed bottom-56 -right-7 mb-8 mr-8 z-20">
      {/* Solapa */}
      <div
        className={`relative transition-width duration-300 ease-in-out ${isOpen ? 'w-20' : 'w-10'}`}
        onClick={toggleSidebar} // Click tanto en mobile como en desktop
        onMouseEnter={!isMobile ? () => { clearTimeout(closeTimeoutRef.current); setIsOpen(true); } : null} // Hover en desktop
        onMouseLeave={!isMobile ? delayedClose : null} // Retardo para el cierre
      >
        {/* Botón de la solapa */}
        <div
          className="flex items-center justify-center h-10 bg-primary text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out"
        >
          {/* Flecha */}
          {isOpen ? (
            <AiOutlineArrowLeft className="text-xl" />
          ) : (
            <AiOutlineArrowRight className="text-xl" />
          )}
        </div>

        {/* Enlaces de redes sociales */}
        <div
          className={`absolute right-0 bottom-11 w-32 bg-primary text-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onMouseEnter={() => clearTimeout(closeTimeoutRef.current)} // Mantener abierto al estar sobre los enlaces
          onMouseLeave={delayedClose} // Retardo al dejar el área de enlaces
        >
          <a
            href="https://www.instagram.com/devweb.patagonia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 hover:bg-red-700 rounded-md"
          >
            <FaInstagram className="text-xl" />
            <span className="ml-2">Instagram</span>
          </a>
          <a
            href="https://wa.me/542984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 hover:bg-red-700 rounded-md"
          >
            <FaWhatsapp className="text-xl" />
            <span className="ml-2">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
