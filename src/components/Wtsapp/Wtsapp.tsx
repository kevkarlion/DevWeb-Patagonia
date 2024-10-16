// components/WhatsAppButton.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Wtsapp = () => {
  return (
    <a
      href="https://wa.me/542984252859" // Reemplaza con tu número de WhatsApp
      className="fixed bottom-5 left-5 text-green-500 hover:text-green-600 transition-transform transform hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 md:w-10 md:h-10" />
    </a>
  );
};


