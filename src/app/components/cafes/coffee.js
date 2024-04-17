"use client";
import PropTypes from "prop-types";
import Stars from "./stars";
import "../../../style/index/cafes/cafes.scss";

export default function Coffee({ id, coffeeName, ...coffeeCharacteristc }) {
  const coffeeCharacteristcArray = Object.keys(coffeeCharacteristc);

  const handleHover = (e, getOut) => {
    const thisCoffee = e.target;
    const thisOrbit = thisCoffee.parentNode.parentNode;
    const orbitContainer = document.querySelector(".coffee_container");

    orbitContainer.childNodes.forEach((orbits) => {
      if (orbits.firstChild !== null) {
        orbits.classList.remove("disable");

        if (getOut) return;

        if (orbits === thisOrbit) return;
        orbits.classList.add("disable");
      }
    });
  };

  return (
    <div
      className="coffee_cup_orbit"
      onMouseEnter={(e) => handleHover(e, false)}
      onMouseLeave={(e) => handleHover(e, true)}
    >
      <div className="coffee_info_container">
        <h2>{coffeeName}</h2>
        {coffeeCharacteristcArray.map((key) => {
          return (
            <div className="coffee_info" key={`${key}-${id}`}>
              <h3>{key}:</h3>
              <div className={`coffee_info_stars`} key={`info-${key}-${id}`}>
                <Stars rating={coffeeCharacteristc[key]} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Coffee.propTypes = {
  coffeeName: PropTypes.string.isRequired,
  coffeeCharacteristc: PropTypes.func,
};
