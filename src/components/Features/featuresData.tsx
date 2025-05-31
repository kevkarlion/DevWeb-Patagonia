import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
   
      <div className="h-[70px] w-[70px]" style={{ position:'relative', top:'0px'}}>
        <Image
          src="/images/logo/web-design.png"
          alt="logo"
          style={{objectFit: 'contain'}}
          className="w-full"
          fill
        />
      </div>
    ),
    title: "Diseño y Desarrollo web",
    paragraph:
      "Nos encargamos de crear sitios web modernos y atractivos, asegurándonos de que cada detalle refleje la identidad de tu marca. Trabajamos de la mano contigo desde el concepto inicial hasta la implementación final.",
  },
  {
    id: 1,
    icon: (
     
      <div className="h-[70px] w-[70px]" style={{ position:'relative', top:'0px'}}>
      <Image
        src="/images/logo/one.png"
        alt="logo"
        style={{objectFit: 'contain'}}
        className="w-full"
        fill
      />
    </div>
    ),
    title: "One Page",
    paragraph:
      "Soluciones minimalistas y eficientes. Las one page son ideales para quienes buscan una presentación simple, pero impactante. Todo el contenido clave en una sola página que ofrece una experiencia directa y rápida.",
  },
  {
    id: 1,
    icon: (

      <div className="h-[70px] w-[70px]" style={{ position:'relative', top:'0px'}}>
      <Image
        src="/images/logo/landing.png"
        alt="logo"
        style={{objectFit: 'contain'}}
        className="w-full"
        fill
      />
    </div>
    ),
    title: "Landing Pages",
    paragraph:
      "Diseñamos páginas de aterrizaje optimizadas para convertir visitantes en clientes. Perfectas para campañas específicas, productos o servicios.",
  },
  {
    id: 1,
    icon: (
   
      <div className="h-[70px] w-[70px]" style={{ position:'relative', top:'0px'}}>
      <Image
        src="/images/logo/ecommerce.png"
        alt="logo"
        style={{objectFit: 'contain'}}
        className="w-full"
        fill
      />
    </div>
    ),
    title: "E-commerce",
    paragraph:
      "Te ayudamos a lanzar tu tienda online con una plataforma fácil de usar y completamente personalizable. Te entregamos una solución completa para vender en línea",
  },
  
];
export default featuresData;
