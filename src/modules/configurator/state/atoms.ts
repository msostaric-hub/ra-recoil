import { atom } from "recoil";
import { ToppingsInfo } from "../types";

const topping = atom<ToppingsInfo[]>({
  key: "configurator.toppings",
  default: [],
});

const discount = atom<number>({
  key: "configurator.discount",
  default: undefined,
});

export const configuratorAtoms = { topping, discount };
