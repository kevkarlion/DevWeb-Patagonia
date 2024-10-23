import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "#home",
    newTab: false,
  },
  {
    id: 2,
    title: "Servicios",
    path: "#servicios",
    newTab: false,
  },
  {
    id: 3,
    title: "Nuestra Propuesta",
    path: "#propuesta",
    newTab: false,
  },
  {
    id: 4,
    title: "FAQ",
    path: "#faq",
    newTab: false,
  },
  {
    id: 5,
    title: "Flujo de trabajo",
    path: "#flujo",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Galería de proyectos",
        path: "#galeria", // Ruta a la galería de proyectos
        newTab: false,
      },
      {
        id: 52,
        title: "Testimonios",
        path: "#testimonios",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Precios",
    path: "#precios",
    newTab: false,
  },
  {
    id: 7,
    title: "Redes",
    path: "#redes",
    newTab: false,
  },
];

export default menuData;
