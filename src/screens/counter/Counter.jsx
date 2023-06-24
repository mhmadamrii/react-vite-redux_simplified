import React, { useRef } from "react";

const Counter = (props) => {
  const { count, increment, decrement } = props;
  const renders = useRef(0);
  console.log("component renders", renders.current++);

  /* after memoization */
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>Hello world</h1>
    </center>
  );
};

export default React.memo(Counter);
