"use client";
import PropTypes from "prop-types";
import Stars from "./stars";
import "../../../style/index/cafes/cafes.scss";

export default function Coffee({ id, coffeeName, ...coffeeCharacteristc }) {
  const coffeeCharacteristcArray = Object.keys(coffeeCharacteristc);

  const handleClick = (e) => {
    const thisCoffee = e.target;
    const thisOrbit = thisCoffee.parentNode;
    const orbitContainer = document.querySelector('.coffee_container');

    orbitContainer.childNodes.forEach((orbits) => {
      if (orbits.firstChild !== null) {
        orbits.firstChild.classList.remove("disable", "active");
        orbits.classList.remove("disable", "active");

        const state = orbits !== thisOrbit ? "disable" : "active";
        orbits.firstChild.classList.toggle(state);
        orbits.classList.toggle(state);
      }
    });
  };

  return (
    <div className="coffee_cup" onClick={handleClick}>
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
