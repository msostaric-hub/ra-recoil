import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
  key: "configurator.topping.totalPrice",
  get: ({ get }) => {
    // const discountCode = get(configuratorAtoms.discount);
    const toppingValue = Number(get(configuratorAtoms.toppings));
    let sum = 0;

    return toppingValue ? sum + toppingValue : sum - toppingValue;
  },
});

export const configuratorSelectors = { totalPrice };
