'use client'
import React, { useState } from 'react';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Por qué debería invertir en un sitio web para mi negocio?',
      answer: 'Un sitio web profesional es fundamental para atraer y retener clientes. Hoy en día, la mayoría de los consumidores buscan información en línea antes de realizar una compra. Un buen diseño web no solo mejora tu visibilidad, sino que también establece credibilidad y confianza en tu marca.',
    },
    {
      question: '¿Cómo sé si puedo pagar un diseño web personalizado?',
      answer: 'Ofrecemos una variedad de paquetes y precios adaptados a diferentes presupuestos. Creemos en la transparencia, así que trabajaremos contigo para encontrar una solución que se ajuste a tus necesidades financieras sin comprometer la calidad.',
    },
    {
      question: '¿Cuánto tiempo llevará desarrollar mi sitio web?',
      answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Para un sitio web básico, como una One Page, el proceso puede tomar de 1 a 3 semanas. Durante la consulta inicial, te proporcionaremos un cronograma detallado basado en tus requisitos específicos.',
    },
    {
      question: '¿Qué sucede si no sé qué tipo de sitio web necesito?',
      answer: 'Estamos aquí para ayudarte a determinar la mejor opción para tu negocio. Te ofreceremos una consulta gratuita en la que evaluaremos tus necesidades y objetivos, y juntos crearemos un plan que se alinee con tus metas.',
    },
    {
      question: '¿Ofrecen soporte técnico después de lanzar el sitio?',
      answer: 'Sí, ofrecemos mantenimiento mensual y soporte técnico. Esto incluye actualizaciones, mejoras, y solución de problemas para asegurarnos de que tu sitio web funcione sin inconvenientes y esté siempre optimizado.',
    },
    {
      question: '¿Qué es el SEO y cómo puede beneficiarme?',
      answer: 'El SEO (optimización para motores de búsqueda) es el proceso de mejorar la visibilidad de tu sitio web en Google y otros motores de búsqueda. Un buen posicionamiento puede atraer tráfico orgánico a tu sitio, lo que se traduce en más clientes potenciales sin necesidad de pagar por publicidad.',
    },
    {
      question: '¿Puedo hacer cambios en mi sitio web una vez que esté en línea?',
      answer: 'Absolutamente. Te proporcionaremos acceso y capacitación para que puedas realizar cambios y actualizaciones en tu sitio. También ofrecemos servicios de mantenimiento para aquellos que prefieren que nos encarguemos de las modificaciones.',
    },
    {
      question: '¿Cómo garantizan la calidad de su trabajo?',
      answer: 'Contamos con un proceso de diseño y desarrollo estructurado, revisiones periódicas y pruebas exhaustivas para asegurar que cada proyecto cumpla con nuestros estándares de calidad. Además, estamos abiertos a recibir tus comentarios en cada etapa del proceso.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="flex justify-between w-full p-4 text-left text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-[#d42629]"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


