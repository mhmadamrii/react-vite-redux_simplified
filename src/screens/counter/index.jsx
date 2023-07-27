import React, { useState, useTransition } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

const CounterContainer = (props) => {
  const [state, setState] = useState(0);
  const [isPending, startTransition] = useTransition()

  const [toggleLoad, setToggleLoad] = useState(false)

  const handleSomething = () => {
    console.log('something')
    startTransition(() => {
      setToggleLoad(prev => !prev)
    })
  }

  return (
    <>
      <Counter {...props} />
      <button onClick={() => setState((prevState) => prevState + 1)}>
        {state}
      </button>

      <div>
        <button onClick={handleSomething}>toggle load</button>
        {isPending && <h1>Loading a sec...</h1>}

        {toggleLoad &&<h1>Content to show with transition</h1>}
      </div>
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
