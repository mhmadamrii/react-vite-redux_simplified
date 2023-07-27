import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/* screens */
import Playground from "./screens/vim-playground";
import Auth from "./screens/authentication";
import NotFoundPage from "./screens/not-found-page";
import Navbar from "./components/navbar";

// const myURL = "https://express-creation.vercel.app/api/v1";

export default function App() {
  const user = useSelector((state) => state.user);
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Router>
        {user.isLoggedIn && <Navbar />}
        <Routes>
          {user.isLoggedIn ? (
            <>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </>
          ) : (
            <>
              <Route path="/login" element={<Auth />} />
              <Route path="/" element={<Playground />} />
              <Route path="/*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

/* url tutorial */
/* 
  https://programmingfields.com/how-to-create-react-todo-app-using-redux-for-beginners/
*/
