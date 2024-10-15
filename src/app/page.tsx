import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Accordion } from "@/components/Accordion";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web Profesional | DevWeb Patagonia",
  description: "Ofrecemos servicios de desarrollo web a medida, diseño responsivo y soluciones digitales que se adaptan a las necesidades de tu negocio.",
  keywords: "desarrollo web, diseño web, Next.js, WordPress, SEO, marketing digital, ecommerce",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function Home() {
  
  return (
    <div>
      <ScrollUp />
      <Hero />
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
