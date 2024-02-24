"use client";
import sun from "../../../../public/svg/sun.svg";
import Image from "next/image";
import Coffee from "./coffee";

export default function CoffeeMenu() {
  const coffees = [
    { id: 1, coffeeName: "Astroffee1", forca: 1, acidez: 3, amargor: 4 },
    { id: 2, coffeeName: "Astroffee2", forca: 2, acidez: 2, amargor: 1 },
    { id: 3, coffeeName: "Astroffee3", forca: 4, acidez: 3, amargor: 5 },
    { id: 4, coffeeName: "Astroffee4", forca: 3, acidez: 3, amargor: 1 },
    { id: 5, coffeeName: "Astroffee5", forca: 2, acidez: 1, amargor: 4 },
    { id: 6, coffeeName: "Astroffee6", forca: 1, acidez: 4, amargor: 1 },
    { id: 7, coffeeName: "Astroffee7", forca: 5, acidez: 4, amargor: 3 },
    { id: 8, coffeeName: "Astroffee8", forca: 2, acidez: 3, amargor: 5 },
  ];

  const test = (e) => {
    const [orbitActive, coffeeActive] = document.querySelectorAll(".active");
    if (e.target === coffeeActive) return;

    const orbits = document.querySelectorAll(".orbit");
    const coffees = document.querySelectorAll(".coffee_cup");
    orbits.forEach((orbit) => orbit.classList.remove("disable", "active"));
    coffees.forEach((coffee) => coffee.classList.remove("disable", "active"));
  };

  return (
    <div className="coffee_container" onClick={test}>
      {coffees.map(({ id, coffeeName, forca, acidez, amargor }) => {
        return (
          <div className="orbit" key={coffeeName}>
            <Coffee
              coffeeName={coffeeName}
              forca={forca}
              acidez={acidez}
              amargor={amargor}
              id={id}
            />
          </div>
        );
      })}
      <Image className="sun_svg" src={sun} alt="Sun image"></Image>
    </div>
  );
}
