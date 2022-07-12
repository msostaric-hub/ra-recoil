import React from "react";
import { Topping, TOPPINGS } from "modules/configurator";

export const Toppings: React.FC = () => {
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
