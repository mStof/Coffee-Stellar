"use client";
import { createContext, useState, useEffect, useReducer } from "react";

const FilterContext = createContext([]);
export default FilterContext;

const reducer = (state, action) => {
  console.log('Iniciei');
  switch (action.type) {
    case "initianData":
      return { list: action.payload, filterList: action.payload };

    case "filterSearch":
      return {
        ...state,
        filterList: state.list.filter((listIten) => {
          const inpName = action.payload.toLowerCase();
          const dataName = listIten.name.toLowerCase();
          console.log(inpName);
          return dataName.includes(inpName) && listIten;
        }),
      };
    
    case "tagFilter":
      return {
        ...state,
        filterList: state.list.filter((listIten) => {
          action.payload.invert ? !listIten[action.payload.tag] : listIten[action.payload.tag];
        }),
      };
    
    case 'sizeFilter':
      // return {
      //   ...state,
      //   filterList: state.list.filter((listIten) => {
      //     listIten.sizes.forEach(size => {
      //       size === payload && listIten
      //     });
      //   }),
      // }
    return { ...state }

    default:
      return state;
  }
};
export const FilterProvider = ({ children }) => {
  // Pega os dados da API para criar os cards, uma vez;
  const [newFilterList, dispatch] = useReducer(reducer, {
    list: [],
    filterList: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/`);
        const dataJSON = await data.json();

        dispatch({ type: "initianData", payload: dataJSON });
        return dataJSON;
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        dispatch,
        newFilterList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
