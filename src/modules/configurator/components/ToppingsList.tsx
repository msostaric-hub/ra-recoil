import React from "react";
import { TOPPINGS } from "../const";
import { Topping } from "./Topping";

export const ToppingsList: React.FC = () => {
  return (
    <section>
      <ul>
        {TOPPINGS.map(({ name, price }) => (
          <Topping key={name} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};
