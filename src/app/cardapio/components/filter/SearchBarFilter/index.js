"use client";
import { useContext } from "react";
import FilterContext from "../../filterContext";

export default function SearchBarFilter() {
  const { dispatch } = useContext(FilterContext);


  return (
    <div className="search_bar_container">
      <h2>Pesquisar</h2>
      <input
        type="text"
        placeholder="Seu café"
        onChange={(e) => {
          dispatch({ type:'filterSearch', payload: e.target.value })
        }}
      />
    </div>
  );
}
