import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

/* screens */
import Playground from "./screens/vim-playground";
import Auth from "./screens/authentication";
import NotFoundPage from "./screens/not-found-page";
import Navbar from "./components/navbar";

export default function App() {
  const user = useSelector((state) => state.user);
  // console.log("user", user);
  // console.log("routes", routes);

  return (
    <Router>
      {user.isLoggedIn && <Navbar />}
      <Routes>
        {user.isLoggedIn ? (
          <>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
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
