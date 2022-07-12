import React from "react";
import { ToppingsInfo } from "modules/configurator";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  return (
    <li>
      <label htmlFor={name}>{name}</label>
      <input type="checkbox" name={name} id={name} value={price} />
    </li>
  );
};
