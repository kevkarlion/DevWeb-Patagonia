import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: "Empresa 1", logo: "/images/marcas/nguru-logo.webp" },
  { name: "Empresa 2", logo: "/images/marcas/lanegra-logo.webp" },
  { name: "Empresa 3", logo: "/images/marcas/cirulo-logo.webp" },
  { name: "Empresa 4", logo: "/images/marcas/drviandas-logo.webp" },
];

export const Marcas: React.FC = () => {
  return (
    <section className="py-24 bg-darkSep">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Emprendedores que confiaron en nosotros
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="relative w-40 h-20 md:w-48 md:h-24 flex justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
