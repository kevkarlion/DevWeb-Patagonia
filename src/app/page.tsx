import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Accordion } from "@/components/Accordion";
import { Marcas } from "@/components/Marcas";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";


export const metadata = {
  metadataBase: new URL("https://localhost:3000"), // Cambia esto por tu dominio real
  title: "Desarrollo Web Profesional | Páginas Web para Emprendedores",
  description: "Ofrecemos desarrollo de páginas web profesionales para emprendedores y negocios locales en General Roca, Río Negro. Optimización SEO, diseño a medida, ecommerce y soporte continuo para impulsar tu presencia online.",
  keywords: "desarrollo web, diseño web, páginas web, SEO local, ecommerce, General Roca, Río Negro, emprendedores, soporte técnico, presencia digital",
  openGraph: {
    title: "Desarrollo Web para Emprendedores",
    description: "¿Buscas una página web profesional y optimizada para SEO? Ayudamos a emprendedores y negocios locales a crecer con soluciones digitales personalizadas.",
    url: "https://localhost:3000",
    siteName: "Tu Web Profesional",
    images: [
      {
        url: "https://tusitioweb.com/imagen-og.jpg",
        width: 800,
        height: 600,
        alt: "Desarrollo Web en General Roca",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web Profesional | Páginas Web para Emprendedores",
    description: "Desarrollo web a medida con SEO local, diseño profesional y soporte continuo para tu negocio.",
    images: "https://tusitioweb.com/imagen-twitter.jpg",
  },
  alternates: {
    canonical: "https://tusitioweb.com",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "codigo-verificacion-google",
  }
};



export default function Home() {
  
  return (
    <div>
      <ScrollUp />
      
      <Hero />
      <Marcas />
      <Features />
      <Video />
      <Accordion />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </div>
  );
}
