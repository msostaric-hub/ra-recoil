import React from "react";
import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state";

export const Size: React.FC = () => {
  const setRecoilValue = useSetRecoilState(configuratorAtoms.pizzaSize);
  const handleCheck = (event: React.BaseSyntheticEvent) => {
    if (event.target.id) {
      setRecoilValue(event.target.value);
    }
  };
  return (
    <section>
      <label htmlFor="s">S</label>
      <input type="radio" value={7} id="s" name="size" onChange={handleCheck} />
      <label htmlFor="m">M</label>
      <input
        type="radio"
        value={10}
        id="m"
        name="size"
        onChange={handleCheck}
      />
      <label htmlFor="l">L</label>
      <input
        type="radio"
        value={13}
        id="l"
        name="size"
        onChange={handleCheck}
      />
    </section>
  );
};
