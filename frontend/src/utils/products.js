import dif from "../images/products/dif-product.jpg";
import clutch from "../images/products/clutch-product.jpg";
import comp from "../images/products/comp-product.jpg";
import turbo from "../images/products/turbo-product.jpg";
import cable from "../images/products/cable-product.jpg";
import dir from "../images/products/dir-product.jpg";
import pump from "../images/products/pump-product.jpg";
import wheel from "../images/products/wheel-product.jpg";
import rad from "../images/products/rad-product.jpg";
import misc from "../images/products/misc-product.jpg";
import gearbox from "../images/products/gearbox-product.jpg";
import engine from "../images/products/engine-product.jpg";
import samgong from "../images/brands/samgong.jpg";
import masiero from "../images/brands/masiero.jpg";
import hino from "../images/brands/hino.jpg";
import exedy from "../images/brands/exedy-big.jpg";
import npr from "../images/brands/npr1.jpg";
import garret from "../images/brands/garret.jpg";
import tsk from "../images/brands/tsk.jpg";
import tzk from "../images/brands/tzk.jpg";
import tbk from "../images/brands/tbk.jpg";
import koyo from "../images/brands/koyo.jpg";
import eaton from "../images/brands/eaton.jpg";
import daido from "../images/brands/daido.jpg";

const products = [
  {
    img: dif,
    brand: masiero,
    id: "dif",
    alt: "Diferencial",
    name: "Diferencial",
    title: "Diferencial y Transmisión",
    info: "¿Golpeteos o tirones en la transmisión?",
    items: [
      "Florero",
      "Cono y Corona",
      "Kit de satélites y planetarios",
      "Rodelas",
      "Retenedores",
      "Rulimanes",
    ],
  },
  {
    img: clutch,
    brand: exedy,
    id: "clutch",
    alt: "Embrague",
    name: "Embrague",
    title: "Embrague",
    info: "¿Revoluciones altas, pero baja potencia?",
    items: [
      "Disco",
      "Plato",
      "Rulimanes",
      "Volante",
      "Booster ",
      "Kit del booster ",
      "Bomba principal",
      "Kit principal",
    ],
  },
  {
    img: comp,
    brand: npr,
    id: "comp",
    alt: "Compresor",
    name: "Compresor",
    title: "Compresor",
    info: "¿Pérdida de presión en el sistema de frenos?",
    items: [
      "Pistones",
      "Rines",
      "Camisa",
      "Cabezote del compresor",
      "Empaques",
      "Tapa del compresor",
      "Retenedor",
      "Compresor armado",
    ],
  },
  {
    img: turbo,
    brand: garret,
    id: "turbo",
    alt: "Turbo",
    name: "Turbos",
    title: "Turbo y complementos",
    info: "¿Pérdida de potencia y aceleración lenta?",
    items: [
      "Turbo",
      "Empaque del codo y base",
      "Tuercas y espárragos del codo",
      "Tuercas y espárragos de la base ",
      "Empaques del retorno",
      "Caucho de la cañería",
    ],
  },
  {
    img: cable,
    brand: tsk,
    id: "cable",
    alt: "Cables",
    name: "Cables",
    title: "Cables",
    info: "¿Palanca de cambios atascada?",
    items: [
      "Cable de marchas",
      "Cable neutro",
      "Cable del velocímetro",
      "Cable acelerador",
      "Cable ahogador",
    ],
  },
  {
    img: dir,
    brand: tzk,
    id: "dir",
    alt: "Dirección",
    name: "Dirección",
    title: "Dirección",
    info: "¿Dificultad para maniobrar el volante?",
    items: [
      "Bombona de la dirección",
      "Kit de reparación de la bombona",
      "Barra principal y auxiliar",
      "Terminales",
      "Cajetín armado",
      "Kit del cajetín",
    ],
  },
  {
    img: pump,
    brand: tbk,
    id: "pump",
    alt: "Bomba",
    name: "Bombas de agua",
    title: "Bombas",
    info: "¿Sobrecalentamiento del motor?",
    items: ["Bomba de agua", "Carbón", "Eje bomba agua", "Ruliman bomba"],
  },
  {
    img: wheel,
    brand: koyo,
    id: "wheel",
    alt: "Rache",
    name: "Rueda",
    title: "Rueda",
    info: "¿Ruido metálico al aplicar el freno de mano?",
    items: ["Tambores", "Raches", "Rulimanes", "Retenedores"],
  },
  {
    img: rad,
    brand: hino,
    id: "rad",
    alt: "Radiador",
    name: "Radiadores",
    title: "Radiador y complementos",
    info: "¿Malfuncionamiento del termostato o ventilador?",
    items: ["Radiador", "Tapa del radiador", "Refrigerante"],
  },

  {
    img: gearbox,
    brand: eaton,
    id: "gearbox",
    alt: "Masa de la caja",
    name: "Caja",
    title: "Caja",
    info: "¿Marchas que se desenganchan solas?",
    items: [
      "Motriz",
      "Masa",
      "Corredizo",
      "Sincronizados",
      "Piñonería",
      "Rulimanes",
      "Retendores",
      "Bombas",
      "Empaques",
      "Canastillas",
    ],
  },
  {
    img: engine,
    brand: daido,
    id: "engine",
    alt: "Reparación de motor",
    name: "Motor",
    title: "Reparación del motor",
    info: "¿Fugas de aceite o humo en el escape?",
    items: [
      "Camisas",
      "Pistones",
      "Rines",
      "Chaquetas",
      "Jgo de empaques",
      "Válvulas de admisión y escape",
      "Guías de válvula",
      "Bomba de aceite",
      "Termosatos",
      "Bandas",
      "Bases",
      "Sensores",
    ],
  },
  {
    img: misc,
    brand: samgong,
    id: "misc",
    alt: "Bomba",
    name: "Mucho más",
    title: "Todo lo que necesitas y mucho más",
    info: "Todo lo que necesitas en un solo lugar",
    items: [
      "Bomba de transferencia y sus partes",
      "Ventiladores",
      "Kit de la válvula del bloqueo",
      "Kit del pedal del freno",
      "Kit de la válvula relay",
      "Termostatos",
      "Tapa de combustible",
      "Kit del selector de cambios",
      "Caucho tandem",
    ],
  },
];

export default products;
