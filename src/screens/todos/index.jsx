import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoContainer = (props) => {
  const { addTodo } = props;
  const [inputTodo, setInputTodo] = useState("");
  console.log("input todo", inputTodo);

  const handleChangeInput = useCallback((e) => {
    setInputTodo(e.target.value);
  }, []);

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: inputTodo,
      isDone: false,
    };

    console.log("new todo", newTodo);

    addTodo(newTodo);
  };

  return (
    <Todo
      {...props}
      onChangeValue={handleChangeInput}
      onAddTodo={handleAddTodo}
    />
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => dispatch({ type: "ADD_TODO", payload: newTodo }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
