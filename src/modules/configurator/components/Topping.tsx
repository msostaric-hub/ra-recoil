import React from "react";
import { ToppingsInfo } from "modules/configurator";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input type="checkbox" name={name} id={name} />
    </li>
  );
};
