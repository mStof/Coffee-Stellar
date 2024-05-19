import glutenIcon from "@/../public/svg/gluten-icon.svg";
import coldIcon from "@/../public/svg/cold-icon.svg";
import lactoseIcon from "@/../public/svg/lactose-icon.svg";
import hasLactoseIcon from "@/../public/svg/has-lactose-icon.svg";
import hasGlutenIcon from "@/../public/svg/has-gluten-icon.svg";
import fireIcon from "@/../public/svg/fire-icon.svg";
import Image from "next/image";

// Adicionar a parte de src, alt e o title no banco de dados, para só dps implementar aqui.

export default function IconsHeader({ lactose, cold, gluten }) {
  return (
    <div className="icons_container">
      <Image
        className="icon gluen"
        src={gluten ? glutenIcon : hasGlutenIcon}
        alt={
          gluten
            ? "Icone de não recomendado para seliacos"
            : "Icone de livre para seliacos"
        }
        title={gluten ? "Não recomendado para seliacos" : "Livre para seliacos"}
      />
      <Image
        className="icon cold"
        src={cold ? coldIcon : fireIcon}
        alt={cold ? "Icone de café frio" : "Icone de café quente"}
        title={cold ? "Produto frio" : "Produto quente"}
      />
      <Image
        className="icon lactose"
        src={lactose ? lactoseIcon : hasLactoseIcon}
        alt={
          lactose
            ? "Icone de não recomendado para intolerantes a lactose"
            : "Icone de livre para intolerantes a lactose"
        }
        title={
          lactose
            ? "Não recomendado para intolerantes a lactose"
            : "Livre para tolerantes a lactose"
        }
      />
    </div>
  );
}
