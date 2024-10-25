'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { ContactCTA } from '@/components/Cta'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

export const GaleriaTrabajos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33); // Para mostrar 3 cards
  const [carouselKey, setCarouselKey] = useState(0); // Estado para forzar el renderizado
  const carouselRef = useRef(null);

  const proyectos = [
    {
      titulo: "Luciana Cirulo Maquillaje Profesional",
      logo: "/images/galeria/cirulo/logo-cirulo.webp",
      trabajos: [
        { src: "/images/galeria/cirulo/lucianacirulo.jpg", alt: "Página Web 1" },
        { src: "/images/galeria/cirulo/hero.png", alt: "Página Web 2" },
        { src: "/images/galeria/cirulo/lucianacirulo2.jpg", alt: "Página Web 3" },
      ],
    },
    {
      titulo: "Proyecto Empresa XYZ",
      
      trabajos: [
        { src: "/images/galeria/cirulo/lucianacirulo.jpg", alt: "Página Web 4" },
        { src: "/images/galeria/cirulo/hero.png", alt: "Página Web 5" },
        { src: "/images/galeria/cirulo/lucianacirulo2.jpg", alt: "Página Web 6" },
      ],
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  // Ajustar el porcentaje dinámicamente según el tamaño de la pantalla
useEffect(() => {
    const updateSlidePercentage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setCenterSlidePercentage(100); // Para móviles
      } else if (screenWidth < 1024) {
        setCenterSlidePercentage(100); // Para tablets (1 card visible)
      } else if (screenWidth < 1280) {
        setCenterSlidePercentage(50); // Para pantallas medianas (2 cards visibles)
      } else {
        setCenterSlidePercentage(33); // Para pantallas grandes (3 cards visibles)
      }

      // Forzar el renderizado del carrusel
      setCarouselKey((prevKey) => prevKey + 1);
    };

    updateSlidePercentage();
    window.addEventListener("resize", updateSlidePercentage);

    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []);


  return (
    <div className="container mx-auto px-4 py-12" id="galeria">
      <h2 className="mb-6 mt-14 text-center text-4xl font-extrabold leading-snug text-gray-800 dark:text-white md:text-5xl "> 
        Galería de Proyectos
      </h2>
      <h3 className="text-body-color text-center px-7 mb-6 text-xl">
        Explora nuestras soluciones creativas en desarrollo web
      </h3>
      <div className="text-center mb-14">
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
          ¿Listo para llevar tu negocio al siguiente nivel? 
        </p>
       <ContactCTA buttonText="Contactanos para crear tu web" href='https://wa.me/542984252859'/>
      </div>
      {proyectos.map((proyecto, index) => (
        <div key={index} className="mb-12">
          <div className="mb-4 flex items-center justify-center  w-full flex-1">
            <div className="relative  w-44 h-11 md:w-96 md:h-24 ">

              <Image
                src={proyecto.logo}
                alt={proyecto.titulo}
                fill
                className="mr-4 object-contain"
              />
            </div>
            {/* <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {proyecto.titulo}
            </h3> */}
          </div>

          {/* Carrusel de imágenes */}
          <div className="flex justify-center overflow-hidden">
            <Carousel
              key={carouselKey} // Usar el estado para forzar el renderizado
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              showArrows
              showStatus={false}
              swipeable={true}
              emulateTouch={true}
              className="carousel-container w-full"
              centerMode={true}
              centerSlidePercentage={centerSlidePercentage}
              ref={carouselRef}
            >
              {proyecto.trabajos.map((trabajo, idx) => (
                <div
                  key={idx}
                  className="relative mx-2 cursor-pointer"
                  onClick={() => openModal(trabajo.src)}
                >
                  <Image
                    src={trabajo.src}
                    alt={trabajo.alt}
                    className="rounded-lg shadow-lg transition-transform duration-300"
                    width={900} // Ajusta el ancho de la imagen
                    height={600} // Ajusta la altura de la imagen
                    style={{ objectFit: "contain" }} // Asegúrate de que la imagen no se recorte
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      ))}

      {/* Modal de imagen */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative mt-20">
            <button
              className="absolute right-0 top-0 p-2 text-3xl text-white"
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
