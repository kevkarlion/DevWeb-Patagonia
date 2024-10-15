import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { ContactCTA } from "../Cta";

const Features = () => {
  return (
    <div>
      <section id="servicios" className="py-16 md:py-20 lg:py-28" style={{scrollMarginTop:'90px'}}>
        <div className="container">
          <SectionTitle
            title="Soluciones web diseñadas para impulsar tu negocio"
            paragraph="Ofrecemos servicios de desarrollo web adaptados a tu emprendimiento, desde sitios responsivos hasta tiendas online con pasarelas de pago. Nos enfocamos en crear webs rápidas, seguras y escalables, que mejoran la experiencia de usuario y posicionan tu marca. ¿Listo para llevar tu negocio al siguiente nivel?"
            width="800px"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        <ContactCTA buttonText="Descubre la Web Ideal para Ti" href="/https://wa.me/542984252859"/>
      </section>
    </div>
  );
};

export default Features;
