import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@react-md/table";

import { Button } from "@react-md/button";

const Playground = (props) => {
  const { inputRef, data, onChange, onAddList, counter, addCounter } = props;
  console.log("input ref", inputRef);
  const storeState = useSelector((state) => state);
  const { user } = storeState;

  return (
    <>
      {user.isLoggedIn === false ? (
        <Navigate to="/login" replace={true} />
      ) : null}

      <center>
        <h1>{counter}</h1>
        <button onClick={addCounter}>add count</button>
      </center>

      <TableContainer>
        <Table>
          {data?.map((item) => {
            return (
              <div>
                <TableHeader>
                  <TableRow style={{ border: "1px solid red" }}>
                    <TableCell>qty</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>price</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <input onChange={onChange} ref={inputRef} />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      <Button
                        theme="primary"
                        themeType="outline"
                        onClick={onAddList}
                      >
                        add list
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </div>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
};

export default React.memo(Playground);
