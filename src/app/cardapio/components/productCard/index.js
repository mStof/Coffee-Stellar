'use client'
import { useContext } from "react";
import { Card } from "./card";
import FilterContext from "../filterContext";
import "@/style/menu/card.scss";
export default function ProductsCard() {
  const { newFilterList } = useContext(FilterContext);
  console.log(newFilterList)

  return (
    <div className="product_cards_container">
      {newFilterList.filterList.map((coffeeObj) => {
        const {
          id,
          path,
          name,
          price,
          description,
          lactose,
          cold,
          glutem,
          imgs,
          nutricionalTable,
        } = coffeeObj;

        return (
          <Card.Root key={id}>
            <Card.Image image={imgs[0]} alt={`Imagem do ${name}`} />
            <Card.Info title={name} description={description} />
            <Card.Tags lactose={lactose} gluten={glutem} isCold={cold} />
            <span></span>
            <div className="card_actions">
              <Card.Price price={`R$${price}`} />
              <Card.ActionsRoot>
                <Card.ShareBtn
                  path={`${process.env.NEXT_PUBLIC_URL}/products/${path}`}
                />
                <Card.LikeBtn />
              </Card.ActionsRoot>
            </div>
          </Card.Root>
        );
      })}
    </div>
  );
}
