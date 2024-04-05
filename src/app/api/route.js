import img1 from "@/../public/img/cafe-1.webp";
import img2 from "@/../public/img/cafe-2.webp";
import img3 from "@/../public/img/cafe-3.webp";
import img4 from "@/../public/img/cafe-4.webp";

export async function GET(resquest) {
  const imgsCoffeeEarth = [img1, img2, img3, img4];
  const data = [
    {
      id: 1,
      path:"CoffeEarth",
      name: "CoffeEarth",
      description:
        "Apresentamos CoffeEarth: uma experiência de café que captura os sabores distintos e a diversidade do nosso planeta Terra. Cada gole é uma viagem sensorial, com blends exclusivos que celebram as maravilhas naturais ao redor do mundo. Descubra o sabor da sustentabilidade em cada xícara.",
      lactose: false,
      cold: true,
      glutem: false,
      imgs: imgsCoffeeEarth,
      nutricionalTable: {
        valorEnergetico: ["Valor energético (Kcal)", 60],
        proteinas: ["Proteínas (g)", 2],
        carboidratos: ["Carboidratos (g)", 10],
        acucaresTotais: ["Açucares totais (g)", 6],
        acucaresAdicionais: ["Açucares adicionais (g)", 3],
        fibras: ["Fibras (g)", 0],
        sodio: ["Sódio (g)", 10],
        gordurasTotais: ["Gorduras totais (g)", 1],
        gordurasTrans: ["Gorduras trans (g)", 0],
        gordurasSaturadas: ["Gorduras saturadas (g)", 0.5],
      },
    },
    {
      id: 2,
      path:"Venusian-Velvet-Smoothie",
      name: "Venusian Velvet Smoothie",
      description:
        "Explore os mistérios do cosmos com nosso Venusian Velvet Smoothie. Uma fusão celestial de sabores exóticos, este smoothie transporta você para os encantos do planeta Venus. Com uma base cremosa de frutas tropicais, como manga e maracujá, combinada com um toque suave de coco, cada gole é uma jornada sensorial pelo cosmos.",
      lactose: false,
      cold: true,
      glutem: false,
      imgs: imgsCoffeeEarth,
      nutricionalTable: {
        valorEnergetico: ["Valor energético (Kcal)", 300],
        proteinas: ["Proteínas (g)", 4],
        carboidratos: ["Carboidratos (g)", 35],
        acucaresTotais: ["Açucares totais (g)", 25],
        acucaresAdicionais: ["Açucares adicionais (g)", 20],
        fibras: ["Fibras (g)", 6],
        sodio: ["Sódio (g)", 0.015],
        gordurasTotais: ["Gorduras totais (g)", 15],
        gordurasTrans: ["Gorduras trans (g)", 0],
        gordurasSaturadas: ["Gorduras saturadas (g)", 13],
      },
    },
    {
      id: 3,
      path:"Mercurial-Mist-Tea",
      name: "Mercurial Mist Tea",
      description:
        "Mergulhe nos mistérios do cosmos com o Mercurial Mist Tea. Esta infusão celestial transporta você para as paisagens enigmáticas do planeta Mercúrio. Com uma base de chá verde delicado, esta bebida é infundida com a essência revigorante de ervas exóticas e notas cítricas.",
      lactose: false,
      cold: false,
      glutem: true,
      imgs: imgsCoffeeEarth,
      nutricionalTable: {
        valorEnergetico: ["Valor energético (Kcal)", 30],
        proteinas: ["Proteínas (g)", 0.5],
        carboidratos: ["Carboidratos (g)", 7],
        acucaresTotais: ["Açucares totais (g)", 5],
        acucaresAdicionais: ["Açucares adicionais (g)", 2],
        fibras: ["Fibras (g)", 1],
        sodio: ["Sódio (g)", 0.005],
        gordurasTotais: ["Gorduras totais (g)", 0.1],
        gordurasTrans: ["Gorduras trans (g)", 0],
        gordurasSaturadas: ["Gorduras saturadas (g)", 0],
      },
    },
    {
      id: 4,
      path:"Saturnian-Spice-Latte",
      name: "Saturnian Spice Latte",
      description:
        "Transporte-se para os confins do sistema solar com o Saturnian Spice Latte. Esta criação celestial é uma homenagem à beleza imponente e enigmática do planeta dos anéis. Cada gole é uma jornada sensorial através de camadas de espresso encorpado, leite cremoso e uma mistura secreta de especiarias exóticas.",
      lactose: false,
      cold: false,
      glutem: true,
      imgs: imgsCoffeeEarth,
      nutricionalTable: {
        valorEnergetico: ["Valor energético (Kcal)", 250],
        proteinas: ["Proteínas (g)", 8],
        carboidratos: ["Carboidratos (g)", 35],
        acucaresTotais: ["Açucares totais (g)", 25],
        acucaresAdicionais: ["Açucares adicionais (g)", 20],
        fibras: ["Fibras (g)", 1],
        sodio: ["Sódio (g)", 0.15],
        gordurasTotais: ["Gorduras totais (g)", 10],
        gordurasTrans: ["Gorduras trans (g)", 0],
        gordurasSaturadas: ["Gorduras saturadas (g)", 6],
      },
    },
    {
      id: 5,
      path:"Marsian-Mocha-Bliss",
      name: "Marsian Mocha Bliss",
      description:
        "Deleite-se com o Marsian Mocha Bliss, uma experiência celestial que o transportará para os terrenos vermelhos e misteriosos do planeta Marte. Este chocolate quente exuberante é uma fusão divina de cacau rico e sedutor, combinado com espresso encorpado e uma pitada de especiarias exóticas.",
      lactose: false,
      cold: false,
      glutem: false,
      imgs: imgsCoffeeEarth,
      nutricionalTable: {
        valorEnergetico: ["Valor energético (Kcal)", 250],
        proteinas: ["Proteínas (g)", 8],
        carboidratos: ["Carboidratos (g)", 35],
        acucaresTotais: ["Açucares totais (g)", 25],
        acucaresAdicionais: ["Açucares adicionais (g)", 20],
        fibras: ["Fibras (g)", 1],
        sodio: ["Sódio (g)", 0.15],
        gordurasTotais: ["Gorduras totais (g)", 10],
        gordurasTrans: ["Gorduras trans (g)", 0],
        gordurasSaturadas: ["Gorduras saturadas (g)", 6],
      },
    },
  ];

  return Response.json(data);
}
