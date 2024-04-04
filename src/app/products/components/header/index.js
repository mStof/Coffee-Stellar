import "@/style/coffeePage/header/header.scss";
import CoffeeCupHeader from "./coffeeCupHeader";
import IconsHeader from "./iconsHeader";



export default function CoffeeHeader({ title, ...infos }) {
  return (
      <div className="header_container">
        <header className="coffee_header">
          <h1 className="coffee_name">{title}</h1>
          <CoffeeCupHeader />
        </header>
        <IconsHeader lactose={infos[0]} cold={infos[1]} gluten={infos[2]} />
      </div>
  );
}
