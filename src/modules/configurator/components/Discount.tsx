import React from "react";

export const Discount: React.FC = () => {
  return (
    <section>
      <label htmlFor="disccount">Disscount</label>
      <input type="number" name="disscount" id="disscount" />
      <button>Add disscount</button>
    </section>
  );
};
