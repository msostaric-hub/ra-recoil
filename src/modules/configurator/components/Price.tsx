import React from "react";
import { useRecoilValue } from "recoil";
import { configuratorSelectors } from "../state";

export const Price: React.FC = () => {
  const finalPrice = useRecoilValue(configuratorSelectors.totalPrice);
  return (
    <section>
      <p>Total price: {finalPrice}</p>
    </section>
  );
};
