'use client'
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const SidebarRedes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar este valor según lo necesites
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Función para manejar el clic y el hover (en desktop)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-56 -right-7 mb-8 mr-8 z-20">
      {/* Solapa */}
      <div 
        className={`relative transition-width duration-300 ease-in-out ${isOpen ? 'w-20' : 'w-10'}`} 
        onClick={isMobile ? toggleSidebar : null} // Click en móviles
        onMouseEnter={!isMobile ? () => setIsOpen(true) : null} // Hover en desktop
        onMouseLeave={!isMobile ? () => setIsOpen(false) : null} // Hover en desktop
      >
        {/* Solapa */}
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
          className={`absolute right-0 bottom-10 w-32 bg-primary text-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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
