'use client'
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import WOW from "wowjs";
import { useEffect } from "react";

const Brands = () => {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs'); // Utilizamos require dentro del efecto
      new WOW.WOW().init();
    }
  }, []);

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <div className="importance-web-section wow animate__animated animate__fadeInUp">
                <h3 className="mb-4 text-center text-3xl font-bold">
                  ¿Por qué es importante tener una web profesional?
                </h3>
                <p className="mb-6 text-center text-lg">
                  En el mundo digital actual, una web es mucho más que un
                  escaparate. Es una herramienta clave para{" "}
                  <span className="font-bold">
                    convertir visitas en clientes
                  </span>
                  , mejorar tu{" "}
                  <span className="font-bold">
                    visibilidad en buscadores (SEO)
                  </span>{" "}
                  y generar confianza en tus productos o servicios.
                </p>

                <p className="text-md mb-4 text-center">
                  Nuestra experiencia se centra en crear sitios optimizados para
                  lograr <span className="font-bold">conversión efectiva</span>,
                  ayudando a que los usuarios tomen acciones que impulsen tu
                  negocio. Además, trabajamos con clientes de{" "}
                  <span className="font-bold">alta calidad</span>, adaptándonos
                  a las necesidades de cada proyecto para garantizar los mejores
                  resultados.
                </p>

                <p className="text-md mb-4 text-center">
                  <span className="font-bold">Un buen SEO</span> no solo te
                  coloca en las primeras posiciones de Google, sino que también
                  asegura que los clientes correctos encuentren tu marca. Con
                  nuestra ayuda, podrás potenciar tu presencia en línea y
                  alcanzar un público mayor.
                </p>

                <p className="text-center text-lg font-bold">
                  ¡Tu web es tu mejor vendedor 24/7!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
