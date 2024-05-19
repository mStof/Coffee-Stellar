"use client";
import { useContext, useState } from "react";
import FilterContext from "../filterContext";

export default function BtnList({ content }) {
  const [active, setActive] = useState(false);
  const { dispatch } = useContext(FilterContext);
  
  // (e, obj.dispatchFunc) => { handleClick(e, obj.dispatchFunc);}

  return (
    <ul className="type_list">
      {content.map((obj) => {
        const {name, dispatchObj} = obj
        return (
          <li
            key={content.indexOf(obj) + 1}
            className="type_iten"
            onClick={(e) => {
              setActive(!active);
              e.target.classList.toggle("active");
              active && dispatch(dispatchObj);
            }}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
}
