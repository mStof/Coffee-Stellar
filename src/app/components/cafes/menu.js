"use client";
import Image from "next/image";
import Link from "next/link";
import assets from "../assets";
import Coffee from "./coffee";

export default function CoffeeMenu() {
  const coffees = [
    {
      id: 1,
      coffeeName: "Astroffee1",
      path: "nothing",
      forca: 1,
      acidez: 3,
      amargor: 4,
    },
    {
      id: 2,
      coffeeName: "Astroffee2",
      path: "nothing",
      forca: 2,
      acidez: 2,
      amargor: 1,
    },
    {
      id: 3,
      coffeeName: "Saturnian Spice Latte",
      path: "Saturnian-Spice-Latte",
      forca: 4,
      acidez: 3,
      amargor: 5,
    },
    {
      id: 4,
      coffeeName: "Astroffee4",
      path: "nothing",
      forca: 3,
      acidez: 3,
      amargor: 1,
    },
    {
      id: 5,
      coffeeName: "Marsian Mocha Bliss",
      path: "Marsian-Mocha-Bliss",
      forca: 2,
      acidez: 1,
      amargor: 4,
    },
    {
      id: 6,
      coffeeName: "CoffeEarth",
      path: "CoffeEarth",
      forca: 1,
      acidez: 4,
      amargor: 1,
    },
    {
      id: 7,
      coffeeName: "Venusian Velvet Smoothie",
      path: "Venusian-Velvet-Smoothie",
      forca: 5,
      acidez: 4,
      amargor: 3,
    },
    {
      id: 8,
      coffeeName: "Mercurial Mist Tea",
      path: "Mercurial-Mist-Tea",
      forca: 2,
      acidez: 3,
      amargor: 5,
    },
  ];

  return (
    <div className="coffee_container">
      {coffees.map(({ id, coffeeName, path, ...characteristecs }) => {
        return (
          <div className="orbit" key={id}>
            <Link href={`/products/${path}`}>
              <Coffee
                coffeeName={coffeeName}
                forca={characteristecs.forca}
                acidez={characteristecs.acidez}
                amargor={characteristecs.amargor}
                id={id}
              />
            </Link>
          </div>
        );
      })}
      <Image className="sun_svg" src={assets.menuJs} alt="Sun image"></Image>
    </div>
  );
}
