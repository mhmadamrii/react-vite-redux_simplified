import { createStore } from "redux";

const initialTodo = [
  {
    id: 1,
    title: "washing hands",
    isDone: false,
  },
  {
    id: 2,
    title: "learning something new",
    isDone: true,
  },
];

const initialState = {
  count: 0,
  todos: initialTodo,
};

const reducer = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
