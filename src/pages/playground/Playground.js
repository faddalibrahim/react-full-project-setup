//libraries
import React from "react";

// styles
import playgroundStyles from "./playground.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/slices/counterSlice";

// utils

const Playground = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={playgroundStyles.playground}>
      <p>Ready to Redux</p>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Playground;
