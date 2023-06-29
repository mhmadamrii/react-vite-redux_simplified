import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authentication = (props) => {
  const { handleChange, onLoginUser } = props;
  const stateStore = useSelector((state) => state);
  const { user } = stateStore;

  /* auto focus when component first mount */
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1>Please login!</h1>
      {user.isLoggedIn && <Navigate to="/" />}
      <form>
        <input ref={inputRef} placeholder="your name" onChange={handleChange} />
        <br />
        <button onClick={onLoginUser}>Login</button>
      </form>
    </>
  );
};

export default React.memo(Authentication);
