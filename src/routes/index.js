import CounterContainer from "../screens/counter";
import TodoContainer from "../screens/todos";
import Auth from "../screens/authentication";

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
];
