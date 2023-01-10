import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restock } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>No Of Cakes : {numOfCakes}</h3>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restock(5))}>Restock</button>
    </div>
  );
};
