import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authentication = (props) => {
  const { handleChange, onLoginUser } = props;
  const stateStore = useSelector((state) => state);
  const { user } = stateStore;
  return (
    <>
      <h1>Please login!</h1>
      {user.isLoggedIn && <Navigate to="/" />}
      <input placeholder="your name" onChange={handleChange} /> <br />
      <button onClick={onLoginUser}>Login</button>
    </>
  );
};

export default React.memo(Authentication);
