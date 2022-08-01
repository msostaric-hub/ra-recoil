import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state";

export const Discount: React.FC = () => {
  const [discountValue, setDiscountValue] = useState<number>(0);
  const setRecoilValue = useSetRecoilState(configuratorAtoms.discount);

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
