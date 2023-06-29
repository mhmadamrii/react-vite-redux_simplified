import React, { useState, useEffect, useRef, useCallback } from "react";
import { Navigate } from "react-router-dom";
import Playground from "./Playground";

export default function PlaygroundContainer() {
  const [inputList, setInputList] = useState("");
  const [counter, setCounter] = useState(0);
  const [dummiesData, setDummiesData] = useState([
    {
      id: 1,
      title: "fuck",
      des: "Lorem ipsum dolor",
      isDone: false,
    },
  ]);

  const handleChangeInput = (e) => {
    setInputList(e.target.value);
  };
  const handleAddList = useCallback(() => {
    const newDummies = [
      ...dummiesData,
      {
        id: dummiesData.length + 1,
        title: inputList,
        des: "Lorem",
        isDone: false,
      },
    ];
    setDummiesData(newDummies);
  }, [inputList]);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [dummiesData.length]);

  console.log("length dummies", dummiesData.length);
  return (
    <>
      <Playground
        onChange={handleChangeInput}
        onAddList={handleAddList}
        inputRef={inputRef}
        data={dummiesData}
        counter={counter}
        addCounter={() => setCounter((c) => c + 1)}
      />
    </>
  );
}
