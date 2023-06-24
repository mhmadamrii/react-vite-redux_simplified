import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect, Navigate } from "react-router-dom";

export default function Playground() {
  const storeState = useSelector((state) => state);
  const { user } = storeState;
  console.log("store state", storeState);

  return (
    <>
      <h1>Playground</h1>
      {user.isLoggedIn === false ? (
        <Navigate to="/login" replace={true} />
      ) : null}
    </>
  );
}
