"use client";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

export default function ImgsContainer({ imgs }) {
  const [imgConfig, setImgConfig] = useState(undefined);
  const coffeeName = "Café";

  const handleClick = (e) => {
    const modalScreen = document.querySelector("#modalScreen");
    setImgConfig(e.target);
    modalScreen.showModal();
    document.documentElement.style.overflowY = "hidden";
    document.querySelector("button.close_dialog").focus();
  };

  return (
    <div className="container_picture">
      {imgs.map((img) => {
         return <Image
          key={imgs.indexOf(img)}
          className="coffee_img"
          width={img.width}
          height={img.height}
          src={img.src}
          alt={`Imagem do ${coffeeName}`}
          onClick={handleClick}
        />;
      })}
      <dialog id="modalScreen">
        <form method="dialog">
          <button
            className="close_dialog"
            onClick={() =>
              (document.documentElement.style.overflowY = "scroll")
            }
          >
            <IoClose />
          </button>
          <Image
            className="coffee_img_modal"
            src={imgConfig !== undefined ? imgConfig.attributes.src.value : imgs[0].src }
            width={imgConfig !== undefined ? imgConfig.naturalWidth : imgs[0].width } 
            height={imgConfig !== undefined ? imgConfig.naturalHeight : imgs[0].height }
            alt={`Imagem do ${coffeeName}`}
          />
        </form>
      </dialog>
    </div>
  );
}
