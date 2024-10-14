"use client"
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="precios" className="relative z-10 py-16 md:py-20 lg:py-28" style={{scrollMarginTop:'90px'}}>
      <div className="container">
        <SectionTitle
          title="Planes y Tarifas"
          paragraph="Elige el plan que mejor se adapte a tus necesidades."
          center
          width="665px"
        />

        <div className="w-full">
          
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Básico"
            price={"$200USD"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle=" Empresas y emprendedores que buscan establecer su presencia en línea de manera efectiva y asequible."
          >
            <OfferList text="One page" status="active" />
            <OfferList text="Optimización SEO básica" status="active" />
            <OfferList text="Soporte mensual" status="active" />
            <OfferList text="Diseño responsive" status="active" />
            <OfferList text="Integración con redes sociales" status="active" />
            
          </PricingBox>
          <PricingBox
            packageName="Profesional"
            price={"$400USD"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle="Empresas y emprendedores que desean fortalecer su presencia en el mundo digital de manera estratégica y efectiva."
          >
            <OfferList text="Landing Page / One page" status="active" />
            <OfferList text="Optimización SEO avanzada" status="active" />
            <OfferList text="Soporte mensual por 3 meses FREE" status="active" />
            <OfferList text="Diseño responsivo" status="active" />
            <OfferList text="Integración con redes sociales" status="active" />
            <OfferList text="Mantenimiento y actualizaciónes mensuales" status="active" />
            {/* <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={"$600USD"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle="Soluciones avanzadas para empresas que buscan destacar con una web a medida, optimizada para resultados y escalabilidad."
          >
            <OfferList text="Ecommerce/Langing/One Page" status="active" />
            <OfferList text="Diseño de marca" status="active" />
            <OfferList text="Diseño responsivo" status="active" />
            <OfferList text="Optimización SEO completa" status="active" />
            <OfferList text="Soporte por 6 meses Free" status="active" />
            <OfferList text="Prioridad en mantenimiento y actualizaciones" status="active" />
            <OfferList text="Análisis de rendimiento" status="active" />
            <OfferList text="Integración con redes sociales" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
