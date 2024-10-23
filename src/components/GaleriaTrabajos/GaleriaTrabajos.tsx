import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

export const GaleriaTrabajos = () => {
  const proyectos = [
    {
      titulo: 'Proyecto Luciana Cirulo',
      logo: '/images/logos/luciana-logo.png',
      trabajos: [
        { src: '/images/galeria/lucianacirulo.jpg', alt: 'Página Web 1' },
        { src: '/images/galeria/lucianacirulo2.jpg', alt: 'Página Web 2' },
        { src: '/images/galeria/lucianacirulo3.png', alt: 'Página Web 3' },
      ],
    },
    {
      titulo: 'Proyecto Empresa XYZ',
      logo: '/images/logos/xyz-logo.png',
      trabajos: [
        { src: '/images/galeria/lucianacirulo.jpg', alt: 'Página Web 4' },
        { src: '/images/galeria/lucianacirulo2.jpg', alt: 'Página Web 5' },
        { src: '/images/galeria/lucianacirulo3.png', alt: 'Página Web 6' },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="container mx-auto px-4 py-12" id='galeria'>
      <h2 className="mb-6 text-center font-extrabold text-4xl md:text-5xl leading-snug text-gray-800 dark:text-white">
        Galería de Proyectos
      </h2>

      {proyectos.map((proyecto, index) => (
        <div key={index} className="mb-12">
          {/* Título o logo del proyecto */}
          <div className="flex items-center justify-center mb-4">
            <Image src={proyecto.logo} alt={proyecto.titulo} width={100} height={100} className="mr-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{proyecto.titulo}</h3>
          </div>

          {/* Carrusel de imágenes */}
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            showArrows
            showStatus={false}
            centerMode={true}
            swipeable={true}
            emulateTouch={true}
            className="carousel-container"
          >
            {proyecto.trabajos.map((trabajo, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer mx-2" // Espacio entre cada imagen
                onClick={() => openModal(trabajo.src)} // Abrir modal al hacer clic
              >
                <Image
                  src={trabajo.src}
                  alt={trabajo.alt}
                  className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  width={500} // Mantenemos el tamaño de Image intacto
                  height={300} // Mantenemos el tamaño de Image intacto
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      ))}

      {/* Modal para imagen ampliada */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative mt-20"> {/* Añade mt-20 para espacio en la parte superior */}
            <button
              className="absolute top-0 right-0 text-white text-3xl p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Trabajo ampliado"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaTrabajos;
