'use client'
import "@/style/coffeePage/header/header.scss";
import CoffeeCupHeader from "./coffeeCupHeader";
import IconsHeader from "./iconsHeader";

// Injetar o pattern de estrelas do "background-image" direto pelo JS

export default function CoffeeHeader({ title, ...infos }) {
  console.log(infos)
  return (
      <div className="header_container">
        <header className="coffee_header">
          <h1 className="coffee_name">{title}</h1>
          <CoffeeCupHeader />
        </header>
        <IconsHeader lactose={infos.lactose} cold={infos.cold} gluten={infos.gluten} />
      </div>
  );
}
