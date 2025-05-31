

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Wtsapp } from '@/components/Wtsapp'
import { SidebarRedes } from "@/components/Sidebar";
import { ContactForm } from "@/components/Form";
import { CookieModal } from '@/components/CookieConsent'

import { SEOHead } from '@/components/shared/SEOHead'
import "node_modules/react-modal-video/css/modal-video.css";
import './globals.css';
import Head from 'next/head';
import "../styles/index.css";


const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Asegura que las fuentes se carguen de manera optimizada
});

export const metadata = {
  title: 'Diseño y Desarrollo Web | Tu Agencia Digital',
  description: 'Especialistas en diseño y desarrollo web, creamos soluciones digitales a medida para tu negocio.',
  keywords: 'diseño web, desarrollo web, marketing digital, SEO, diseño responsivo',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <SEOHead />
    

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          
          <SidebarRedes />
          <Wtsapp />
          {children}
          {/* <GaleriaTrabajos /> */}
          <ContactForm />
          <CookieModal />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
