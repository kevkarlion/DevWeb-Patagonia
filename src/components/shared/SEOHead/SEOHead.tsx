import Head from 'next/head';

export default function SEOHead() {
  return (
    <Head>
      {/* Título del sitio */}
      <title>Diseño Web Profesional | Creación de Páginas Web y Soluciones a Medida</title>

      {/* Metadescripción */}
      <meta name="description" content="Ofrecemos soluciones de diseño web profesional para emprendedores y empresas. Desarrollamos páginas web optimizadas, tiendas online, y sitios personalizados para hacer crecer tu negocio." />

      {/* Palabras clave */}
      <meta name="keywords" content="diseño web, páginas web, desarrollo web, crear página web, ecommerce, soluciones web, diseño de sitios, optimización SEO, tiendas online, freelance desarrollo web, servicios de diseño web" />

      {/* Vista mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph para redes sociales */}
      <meta property="og:title" content="Diseño Web Profesional | Soluciones de Páginas Web a Medida" />
      <meta property="og:description" content="Expertos en diseño y desarrollo de páginas web. Creamos sitios web optimizados para SEO, funcionales y atractivos para potenciar tu negocio online." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tu-sitio-web.com" />
      <meta property="og:image" content="https://www.tu-sitio-web.com/img/preview.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Diseño Web Profesional | Soluciones de Páginas Web a Medida" />
      <meta name="twitter:description" content="Ofrecemos soluciones de diseño web profesional y optimización SEO para emprendedores y empresas." />
      <meta name="twitter:image" content="https://www.tu-sitio-web.com/img/preview.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}
