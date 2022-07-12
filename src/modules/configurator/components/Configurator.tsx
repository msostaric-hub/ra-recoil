import React from "react";
import { Discount } from "./Discount";
import { Price } from "./Price";
import { Size } from "./Size";
import { Toppings } from "./Toppings";

export const Configurator: React.FC = () => {
  return (
    <>
      <Toppings />
      <Size />
      <Discount />
      <Price />
    </>
  );
};
