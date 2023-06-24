import React, { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* screens */
import CounterContainer from "./screens/counter";
import TodoContainer from "./screens/todos";
import Playground from "./screens/vim-playground";
import Auth from "./screens/authentication";
import NotFoundPage from "./screens/not-found-page";
import Navbar from "./components/navbar";

export default function App() {
  const stateStore = useSelector((state) => state);
  const { user } = stateStore;

  return (
    <Router>
      {user.isLoggedIn && <Navbar />}
      <Routes>
        {user.isLoggedIn ? (
          <>
            <Route path="/" element={<CounterContainer />} />
            <Route path="/todo" element={<TodoContainer />} />
            <Route path="/playground" element={<Playground />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Playground />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/*" element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

/* url tutorial */
/* 
  https://programmingfields.com/how-to-create-react-todo-app-using-redux-for-beginners/
*/
