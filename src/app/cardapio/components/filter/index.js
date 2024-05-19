import SearchBarFilter from "./SearchBarFilter";
import TypeFilter from "./typesFilter";
import TagsFilter from "./TagsFilter";
import SizesFilter from "./SizesFilter";
import PriceFilter from "./PriceFilter";
import "@/style/menu/filter.scss";

export default function FilterToten({ filter, setFilter }) {
  
  return (
    <div className="filter_container">
      <h2 className="filter_title">Filtros</h2>
      <div className="filter_options">
        <SearchBarFilter />
        <span></span>
        <TypeFilter />
        <span></span>
        <TagsFilter />
        <span></span>
        <SizesFilter />
        <span></span>
        <PriceFilter />
      </div>
    </div>
  );
}
