import { useContext } from "react";
import FilterContext from "../../filterContext";

export default function PriceFilter() {
  // const { handleOnChange } = useContext(FilterContext);

  return (
    <div className="price_container">
      <h2>Preços</h2>
      <div className="prices_input">
        <input type="text" placeholder="R$00"></input>
        até
        <input type="text" placeholder="R$99"></input>
      </div>
    </div>
  );
}
