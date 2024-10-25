'use client'
import React, { useEffect, useState } from 'react';

export const CookieModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si la cookie de aceptación existe
    const hasAcceptedCookies = document.cookie.split('; ').find(row => row.startsWith('acceptedCookies='));
    
    if (!hasAcceptedCookies) {
      setIsVisible(true); // Mostrar el modal si no hay cookie
    }
  }, []);

  const handleAcceptCookies = () => {
    // Establecer la cookie de aceptación por 30 días
    document.cookie = "acceptedCookies=true; max-age=2592000; path=/"; // 30 días
    setIsVisible(false); // Ocultar el modal
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-4 text-black">Aviso de Cookies</h2>
            <p className="mb-4 text-black">Usamos cookies para mejorar tu experiencia en el sitio. Al aceptar, nos ayudas a brindarte un mejor servicio.</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAcceptCookies}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
