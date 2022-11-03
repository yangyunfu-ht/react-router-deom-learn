import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./countSlice.js";

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{ count }</div>
      <div>
        <button aria-label="Increment value" onClick={ () => dispatch(increment()) }>Increment</button>
      </div>
      <div>
      <button aria-label="Dncrement value" onClick={ () =>dispatch(decrement()) }>Dncrement</button>
      </div>
    </div>
  );
};

export default Counter;
