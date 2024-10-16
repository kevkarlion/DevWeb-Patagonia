"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24" id="contacto" style={{scrollMarginTop:'125px'}}>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-evenly ">
            <div className="w-full flex justify-center text-center px-4 md:w-1/2 lg:w-4/12 xl:w-5/12 ">

              <div className="mb-12 max-w-[360px] lg:mb-16 relative ">
                <Link href="/" className="mb-8 inline-block w-18 h-20">
                <div className="w-36 h-40" style={{ position:'relative', top: '-55px'}}>
                    <Image
                      src="/images/logo/devweb5.svg"
                      alt="logo"
                      style={{objectFit: 'contain'}}
                      className="w-full dark:block"
                      fill
                    />
                  </div>

                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Nos especializamos en crear soluciones digitales
                  personalizadas que impulsan tu presencia en línea y convierten
                  visitantes en clientes. ¡Contáctanos hoy y comencemos a
                  construir el futuro de tu negocio juntos!
                </p>
                <div className="flex items-center"></div>
              </div>
            </div>


            <div className="flex w-full justify-center  px-4 md:w-1/2 lg:w-4/12 xl:w-5/12 ">
              <div className="mb-12 max-w-[360px] text-right lg:mb-16">
                <h4 className="mb-9 text-center text-2xl font-semibold text-body-color dark:text-body-color-dark">
                  Contacto
                </h4>
                {/* Espacios para SVG adicionales */}
                <div className="flex flex-col items-center ml-5">
                  <div className="mr-4 flex mb-9">
                    <a
                      href="https://wa.me/542984252859"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary flex gap-3"
                    >
                      {/* Whatsapp */}
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Whatsapp</span>
                    </a>
                  </div>
                  <div className="mr-4 flex mb-9">
                    <a
                      href="https://www.instagram.com/devweb.patagonia/"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary flex gap-4"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Instagram */}
                        <svg
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          stroke="currentColor"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>instagram [#167]</title>{" "}
                            <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="currentColor"
                              fillRule="evenodd"
                            >
                              {" "}
                              <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-340.000000, -7439.000000)"
                                fill="currentColor"
                              >
                                {" "}
                                <g
                                  id="icons"
                                  transform="translate(56.000000, 160.000000)"
                                >
                                  {" "}
                                  <path
                                    d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                                    id="instagram-[#167]"
                                  >
                                    {" "}
                                  </path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </svg>
                    <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              DevWeb Patagonia © 2024. Todos los derechos reservados. Creando soluciones
              digitales.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
