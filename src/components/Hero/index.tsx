import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-4 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[140px] xl:pt-[140px] 2xl:pb-[100px] 2xl:pt-[180px]"
      >
        <div className="container flex justify-center">
          <div className="-mx-4 flex flex-col w-full md:flex-row justify-center md:justify-evenly ">
            <div className=" px-4 flex w-full	">
              <div className="mx-auto max-w-[800px] text-left flex flex-col mt-9 ">
              <h1 className="mb-6 text-center font-extrabold text-4xl md:text-5xl leading-snug text-gray-800 dark:text-white sm:text-4xl md:text-left">
                <span className="block text-[#d42629]">Diseño Web a Medida</span>
                para Emprendedores - 
                <span className="text-[#d42629]">Económico, Rápido </span> 
                y <span className="text-[#d42629]">Optimizado</span> para Tu Negocio
              </h1>
              <h2 className="mb-4 text-left font-bold text-2xl md:text-2xl leading-tight text-gray-700 dark:text-gray-300">
                Ofrecemos Soluciones de Diseño Web Profesionales que se Adaptan a Tu Presupuesto y Necesidades
              </h2>


                <div className="text-gray-700 space-y-4">
               
              </div>
              <a 
                href="https://wa.me/542984252859" target="_blank" rel="noopener noreferrer" // Cambia esta URL a la ruta correspondiente de tu aplicación
                className="bg-[#d42629] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#b01f21] transition duration-300 ease-in-out mb-16 inline-block text-center"
              >
                Solicita tu Consultoría Gratis
              </a>

              </div>
            </div>
            



            <div className="flex justify-center md:items-center "> 
              <div className="w-[32rem] h-[32rem] relative bottom-6 md:right-16 lg:right-0 lg:bottom-16" >
                <Image
                  src="/images/logo/devweb5.svg"
                  alt="logo"
                  style={{objectFit: 'contain'}}
                  className="w-full dark:block"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
