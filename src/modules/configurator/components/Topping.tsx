import React, { useEffect, useState } from "react";
import { ToppingsInfo } from "modules/configurator";
import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const [checked, setChecked] = useState<ToppingsInfo[]>([]);
  const setRecoilValue = useSetRecoilState(configuratorAtoms.toppings);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const handleCheck = (event: React.BaseSyntheticEvent) => {
    let updatedList = [...checked];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      setRecoilValue(updatedList);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={price}
        onChange={handleCheck}
      />
    </li>
  );
};
