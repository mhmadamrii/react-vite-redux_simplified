import React, { useState } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

const CounterContainer = (props) => {
  const [state, setState] = useState(0);

  return (
    <>
      <Counter {...props} />
      <button onClick={() => setState((prevState) => prevState + 1)}>
        {state}
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment: () => ({ type: "INCREMENT" }),
  decrement: () => ({ type: "DECREMENT" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
