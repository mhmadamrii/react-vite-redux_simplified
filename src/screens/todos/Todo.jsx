import React, { useRef } from "react";

const Todo = (props) => {
  const { todos, onChangeValue, onAddTodo } = props;
  console.log(todos);
  return (
    <>
      <h1>Todo UI</h1>
      <input onChange={onChangeValue} />
      <button onClick={onAddTodo}>add new todo</button>
      {todos?.map((todo) => (
        <ol key={todo?.id}>
          <li>{todo?.title}</li>
        </ol>
      ))}
    </>
  );
};

export default React.memo(Todo);
