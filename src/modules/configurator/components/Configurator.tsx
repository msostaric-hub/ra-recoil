import React from "react";
import { ToppingsList } from "./ToppingsList";
import { Size } from "./Size";
import { Discount } from "./Discount";
import { Price } from "./Price";

export const Configurator: React.FC = () => {
  return (
    <>
      <ToppingsList />
      <Size />
      <Discount />
      <Price />
    </>
  );
};
