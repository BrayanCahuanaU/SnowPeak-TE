import esquis from "../assets/images/esquis.jpg";
import casco from "../assets/images/casco.jpg";
import botas from "../assets/images/botas.jpg";
import gafas from "../assets/images/gafas.jpg";
import chaqueta from "../assets/images/chaqueta.jpg";
import pantalon from "../assets/images/pantalon.jpg";
import bastones from "../assets/images/bastones.jpg";
import guantes from "../assets/images/guantes.jpg";

const PRODUCTS = [
  { id: 1, name: "Esquís Alpinos Pro X9", category: "esquís", price: 1299, image: esquis, description: "Esquís de carrera de alta performance de acero endurecido. Radio de giro de 14m, longitudes disponibles de 155 a 185cm.", rating: 4.8, stock: 12 },
  { id: 2, name: "Casco Freeride Carbon", category: "cascos", price: 389, image: casco, description: "Casco de carcasa de carbono con ventilación activa de 12 canales. Certificación CE EN 1077. Compatible con viseras magnéticas. Peso: 380g.", rating: 4.9, stock: 25 },
  { id: 3, name: "Botas Ski Flex 110", category: "botas", price: 549, image: botas, description: "Botas de ski con flex índice 110, ideal para esquiadores intermedios-avanzados. Sistema de calzado BOA, calentamiento interno por resistencia. Talla 35 a 42.", rating: 4.6, stock: 8 },
  { id: 4, name: "Gafas Glacier UV500", category: "gafas", price: 179, image: gafas, description: "Gafas de ski con lente esférica de doble capa anti-vaho. Protección UV400 y filtro de luz azul. Marco de silicona suave compatible con casco.", rating: 4.7, stock: 30 },
  { id: 5, name: "Chaqueta Térmica StormShield", category: "ropa", price: 459, image: chaqueta, description: "Chaqueta impermeable 20k/20k con relleno PrimaLoft 80g. Cremalleras YKK impermeables, bolsillos internos y ventilación axilar con mesh. Talla XS a XXL.", rating: 4.5, stock: 18 },
  { id: 6, name: "Pantalón Ski Membrane 15k", category: "ropa", price: 289, image: pantalon, description: "Pantalón ski con membrana 15k waterproof. Refuerzos en rodillas y culata con Cordura, cierre interno de botas. Talla 28 a 38.", rating: 4.4, stock: 22 },
  { id: 7, name: "Bastones Carbono Race", category: "bastones", price: 149, image: bastones, description: "Bastones de fibra de carbono 100%, peso ultraligero de 165g cada uno, empuñadura de corcho ergonómica. Largo 105 a 130cm.", rating: 4.7, stock: 40 },
  { id: 8, name: "Guantes Touring Waterproof", category: "guantes", price: 129, image: guantes, description: "Guantes de ski impermeables con membrana GORE-TEX. Relleno 120g PrimaLoft, palma de cuero de cabra reforzada. Compatibles con pantallas táctiles.", rating: 4.6, stock: 35 },
];

export const CATEGORIES = ["todos", "esquís", "botas", "cascos", "gafas", "ropa", "bastones", "guantes"];

export default PRODUCTS;