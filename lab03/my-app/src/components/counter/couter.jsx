import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export function Counter() {
  const coutNumber = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{coutNumber}</span>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
