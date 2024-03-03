import Image from "next/image";
import assets from "../assets";
import PropTypes from "prop-types";

export default function Stars({rating}) {
  const [ starEmpty, starFull ] = assets.starsJs
  const starImages = [];
  for (let i = 1; i < 6; i++) {
    starImages.push(
      <Image
        key={crypto.randomUUID()}
        src={i <= rating ? starFull : starEmpty}
        alt="full star"
      />
    );
}

  return starImages;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};
