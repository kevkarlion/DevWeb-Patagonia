export type Menu = {
  id: number;
  title: string;
  path?: string; // Esta propiedad es opcional
  newTab: boolean;
  submenu?: Menu[]; // Esta propiedad es opcional y puede contener un arreglo de objetos Menu
};
