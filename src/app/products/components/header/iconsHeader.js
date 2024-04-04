import glutenIcon from "@/../public/svg/gluten-icon.svg";
import isCold from "@/../public/svg/cold-icon.svg";
import lactoseIcon from "@/../public/svg/lactose-icon.svg";
import Image from "next/image";

export default function IconsHeader({ lactose, cold, gluten }) {
  return (
    <div className="icons_container">
      <Image
        className="icon gluen"
        src={gluten ? glutenIcon : isCold}
        alt={
          gluten
            ? "Icone de não recomendado para seliacos"
            : "Icone de livre para seliacos"
        }
        title={gluten ? "Não recomendado para seliacos" : "Livre para seliacos"}
      />
      <Image
        className="icon cold"
        src={cold ? isCold : isCold}
        alt={cold ? "Icone de café frio" : "Icone de café quente"}
        title={cold ? "Café frio" : "Café quente"}
      />
      <Image
        className="icon lactose"
        src={lactose ? lactoseIcon : isCold}
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
