import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
  key: "configurator.topping.totalPrice",
  get: ({ get }) => {
    const discountCode = get(configuratorAtoms.discount);
    const calculatedPrice = 20;
    return discountCode
      ? calculatedPrice - calculatedPrice / 4
      : calculatedPrice;
  },
});

export const configuratorSelectors = { totalPrice };
