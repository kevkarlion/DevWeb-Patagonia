import {
  CheckCircleIcon,
  LightningBoltIcon,
  ChatBubbleIcon,
  RocketIcon,
  CollaborationIcon,
} from "@/components/Icons";
import Image from "next/image";
import { ContactCTA } from "../Cta";
import SectionTitle from "../Common/SectionTitle";


export default function WhyChooseUs() {
  return (
    <section
      className="bg-dark py-16 "
      id="propuesta"
      style={{ scrollMarginTop: "125px" }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <SectionTitle
            title="¿Por qué elegirnos?"
            paragraph="En DevWeb, creamos One Pages, Landing Pages y E-commerce modernos,
            optimizados y listos para vender."
            width="800px"
            center
            mb="2rem"
          />
        </div>
        {/* Contenido principal */}
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Columna izquierda - Texto */}
          <div className="md:w-1/2">
            <p className="mb-8 text-lg text-white">
              Con atención 100% personalizada, trabajamos contigo en cada etapa
              del proyecto, asegurando un diseño único, funcional y alineado con
              tus objetivos.
            </p>

            <h3 className="mb-6 text-2xl font-semibold text-white">
              ¿Qué nos hace diferentes?
            </h3>

            <ul className="space-y-5">
              <FeatureItem
                icon={<CheckCircleIcon className="text-emerald-500" />}
                text="Diseño claro y enfocado en resultados"
              />
              <FeatureItem
                icon={<LightningBoltIcon className="text-amber-500" />}
                text="Webs rápidas, optimizadas para SEO y dispositivos móviles"
              />
              <FeatureItem
                icon={<ChatBubbleIcon className="text-blue-500" />}
                text="Trato directo: sin intermediarios, ni procesos complicados"
              />
              <FeatureItem
                icon={<RocketIcon className="text-purple-500" />}
                text="Soporte y acompañamiento después de la entrega"
              />
              <FeatureItem
                icon={<CollaborationIcon className="text-indigo-500" />}
                text="Colaboraciones externas para sumar valor cuando es necesario"
              />
            </ul>
          </div>

          {/* Columna derecha - Imagen decorativa */}
          <div className="flex items-center justify-center md:w-1/2">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Dispositivos */}
                <div className="relative h-full w-full max-w-md">
                  {/* Monitor */}
                  <div className="absolute left-0 top-0 w-3/4 rounded-lg border-8 border-gray-800 bg-white shadow-xl">
                    <div className="flex h-6 items-center justify-start rounded-t-sm bg-gray-800 px-2">
                      <div className="mr-1 h-2 w-2 rounded-full bg-gray-600"></div>
                      <div className="mr-1 h-2 w-2 rounded-full bg-gray-600"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    </div>
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                      <span className="font-medium text-gray-600">
                        <Image
                          src="/images/logo/devweb2.svg"
                          alt="Monitor con diseño web"
                          width={150}
                          height={70}
                          className="max-h-full max-w-full object-contain"
                        />
                      </span>
                    </div>
                    <div className="h-4 bg-gray-200"></div>
                    <div className="mx-auto h-8 w-1/3 rounded-b-md bg-gray-300"></div>
                  </div>

                  {/* Móvil */}
                  <div className="absolute bottom-0 right-0 w-1/3 rounded-2xl border-4 border-gray-800 bg-white shadow-xl">
                    <div className="flex h-8 items-center justify-center rounded-t-lg bg-gray-800">
                      <div className="h-1 w-12 rounded bg-gray-600"></div>
                    </div>
                    <div className="flex aspect-[9/16] items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50">
                      <span className="text-xs font-medium text-gray-600">
                        <Image
                          src="/images/logo/devweb5.svg"
                          alt="Monitor con diseño web"
                          width={150}
                          height={70}
                          className="max-h-full max-w-full object-contain"
                        />
                      </span>
                    </div>
                    <div className="h-2 rounded-b-lg bg-gray-800"></div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-purple-200 opacity-30"></div>
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-200 opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactCTA 
        buttonText="Contáctanos"
        href="https://wa.me/542984252859"
      />
    </section>
  );
}

// Componente para cada ítem de característica
function FeatureItem({ icon, text }) {
  return (
    <li className="flex items-start">
      <span className="mr-3 mt-1 flex-shrink-0">{icon}</span>
      <span className="text-white">{text}</span>
    </li>
  );
}
