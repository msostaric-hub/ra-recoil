import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
  key: "configurator.topping.totalPrice",
  get: ({ get }) => {
    const discountCode = get(configuratorAtoms.discount);
    const toppingValue = Number(get(configuratorAtoms.toppings));

    let sum = toppingValue;

    return discountCode ? sum - sum / 4 : sum;
  },
});

export const configuratorSelectors = { totalPrice };
