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

const initialUser = {
  username: "",
  isLoggedIn: true,
};

const initialCart = {
  items: [],
};

const initialState = {
  count: 0,
  todos: initialTodo,
  user: initialUser,
  cart: initialCart,
};

const reducer = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action.payload);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "LOGIN":
      return { ...state, user: { isLoggedIn: true, username: action.payload } };
    case "LOGOUT":
      return { ...state, user: { isLoggedIn: false, username: "" } };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: { items: [...state.cart.items, action.payload] },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
