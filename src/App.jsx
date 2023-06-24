import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* screens */
import CounterContainer from "./screens/counter";
import TodoContainer from "./screens/todos";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">Increment & decrement</Link> <br />
        <Link to="todo">Fucking todo app</Link>
        <Routes>
          <Route path="/" element={<CounterContainer />} />
          <Route path="/todo" element={<TodoContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

/* url tutorial */
/* 
  https://programmingfields.com/how-to-create-react-todo-app-using-redux-for-beginners/
*/
