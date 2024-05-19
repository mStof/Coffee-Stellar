import glutenIcon from "@/../public/svg/gluten-icon.svg";
import coldIcon from "@/../public/svg/cold-icon.svg";
import lactoseIcon from "@/../public/svg/lactose-icon.svg";
import hasLactoseIcon from "@/../public/svg/has-lactose-icon.svg";
import hasGlutenIcon from "@/../public/svg/has-gluten-icon.svg";
import fireIcon from "@/../public/svg/fire-icon.svg";
import Image from "next/image";

export default function CardTags({ lactose, gluten, isCold }) {
  return (
    <div className="tags_container">
      <Image
        width={24}
        height={24}
        src={lactose ? hasLactoseIcon : lactoseIcon}
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
      <Image
        width={24}
        height={24}
        src={gluten ? hasGlutenIcon : glutenIcon}
        alt={
          gluten
            ? "Icone de não recomendado para seliacos"
            : "Icone de livre para seliacos"
        }
        title={gluten ? "Não recomendado para seliacos" : "Livre para seliacos"}
      />
      <Image
        width={24}
        height={24}
        src={isCold ? coldIcon : fireIcon}
        alt={isCold ? "Icone de café frio" : "Icone de café quente"}
        title={isCold? "Produto frio" : "Produto quente"}
      />
    </div>
  );
}
