import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
  key: "configurator.topping.totalPrice",
  get: ({ get }) => {
    const calculatedPrice = get(configuratorAtoms.discount);
    return calculatedPrice;
  },
});

export const configuratorSelectors = { totalPrice };
