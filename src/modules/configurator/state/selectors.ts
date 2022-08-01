import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
  key: "configurator.topping.totalPrice",
  get: ({ get }) => {
    // const discountCode = get(configuratorAtoms.discount);
    const toppingValue = Number(get(configuratorAtoms.toppings));
    const sizeValue = Number(get(configuratorAtoms.pizzaSize));
    let sum = 0;

    // if(toppingValue){
    //   sum + toppingValue;
    //   return sum
    // }else{
    //   sum - toppingValue;
    //   return sum;
    // }

    return sizeValue + toppingValue;
  },
});

export const configuratorSelectors = { totalPrice };
