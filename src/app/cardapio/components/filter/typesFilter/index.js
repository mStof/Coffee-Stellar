"use client";
import { useContext } from "react";
import BtnList from "../BtnList";
import FilterContext from "../../filterContext";

export default function TypeFilter() {
  const { dispatch } = useContext(FilterContext);

  const coffeeTypes = [
    {
      name: "Smoothies",
      dispatchObj: {
        type: "sizeFilter",
        payload: "smoothies",
      }
    },
    {
      name: "Cafés",
      dispatchObj: {
        type: "sizeFilter",
        payload: "cafés",
      }
    },
    {
      name: "Chocolates",
      dispatchObj: {
        type: "sizeFilter",
        payload: "chocolates",
      }
    },
    {
      name: "Chás",
      dispatchObj: {
        type: "sizeFilter",
        payload: "chás",
      }
    },
    {
      name: "Favoritos",
      dispatchObj: {
        type: "sizeFilter",
        payload: "favoritos",
      }
    },
    {
      name: "Sucos",
      dispatchObj: {
        type: "sizeFilter",
        payload: "sucos",
      }
    },
  ];

  return (
    <div className="type_container">
      <h2>Tipos</h2>
      <BtnList content={coffeeTypes} />
    </div>
  );
}
