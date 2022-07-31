import { atom } from "recoil";
import { ToppingsInfo } from "../types";

const toppings = atom<ToppingsInfo[]>({
  key: "configurator.toppings",
  default: [],
});

const discount = atom<number>({
  key: "configurator.discount",
  default: undefined,
});

export const configuratorAtoms = { toppings, discount };
