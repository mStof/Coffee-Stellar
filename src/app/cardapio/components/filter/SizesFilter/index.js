"use client"
import { useContext } from "react";
import FilterContext from "../../filterContext";
import BtnList from "../BtnList";

export default function SizesFilter() {

  const { dispatch } = useContext(FilterContext);

    const coffeeSizes = [
      {
        name: '250ml',
        dispatchObj: {
          type: "sizeFilter",
          payload: "250ml" ,
        }
      },
      {
        name: '500ml',
        dispatchObj: {
          type: "sizeFilter",
          payload: "500ml" ,
        }
      },
      { 
        name: '750ml',
        dispatchObj: {
          type: "sizeFilter",
          payload: "750ml" ,
        }
      },
      {
        name: '1000ml',
        dispatchObj: {
          type: "sizeFilter",
          payload: '1000ml',
        }
      },
    ];

  return (
    <div className="tags_container">
      <h2>Tamanhos</h2>
      <BtnList content={coffeeSizes}/>
    </div>
  );
}
