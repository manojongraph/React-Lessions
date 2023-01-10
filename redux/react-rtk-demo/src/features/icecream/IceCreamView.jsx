import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ordered, restock } from "./iceCreamSlice";
export const IceCreamView = () => {
  const [value, setValue] = useState(1);

  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No Of IceCream : {numOfIceCream}</h3>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />

      <button onClick={() => dispatch(restock(value))}>Restock</button>
    </div>
  );
};
