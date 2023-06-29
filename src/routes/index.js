import CounterContainer from "../screens/counter";
import TodoContainer from "../screens/todos";
import Auth from "../screens/authentication";
import Cart from "../screens/cart";
import PlaygroundContainer from "../screens/vim-playground";

export const routes = [
  {
    id: 1,
    path: "/",
    component: CounterContainer,
  },
  {
    id: 2,
    path: "/todo",
    component: TodoContainer,
  },
  {
    id: 3,
    path: "/login",
    component: Auth,
  },
  {
    id: 4,
    path: "/cart",
    component: Cart,
  },
  {
    id: 5,
    path: "/playground",
    component: PlaygroundContainer,
  },
];
