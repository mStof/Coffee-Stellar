export async function GET(resquest) {
  const data = [
    {
      id: 1,
      path:"CoffeEarth",
      name: "CoffeEarth",
    },
    {
      id: 2,
      path:"Venusian-Velvet-Smoothie",
      name: "Venusian Velvet Smoothie",
    },
    {
      id: 3,
      path:"Mercurial-Mist-Tea",
      name: "Mercurial Mist Tea",
    },
    {
      id: 4,
      path:"Saturnian-Spice-Latte",
      name: "Saturnian Spice Latte",
    },
    {
      id: 5,
      path:"Marsian-Mocha-Bliss",
      name: "Marsian Mocha Bliss",
    },
  ];

  return Response.json(data);
}
