import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { configuratorAtoms, configuratorSelectors } from "../state";

export const Discount: React.FC = () => {
  const [discountValue, setDiscountValue] = useState<number>(0);
  const setRecoilValue = useSetRecoilState(configuratorAtoms.discount);
  const discountCode = useRecoilValue(configuratorSelectors.totalPrice);

  useEffect(() => {
    console.log(discountCode);
  }, [discountCode]);

  return (
    <section>
      <label htmlFor="disccount">Disscount</label>
      <input
        value={discountValue}
        onChange={(e) => setDiscountValue(Number(e.currentTarget.value))}
        type="string"
        name="disscount"
        id="disscount"
      />
      <button onClick={() => setRecoilValue(discountValue)}>
        Add disscount
      </button>
    </section>
  );
};
