import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TableContainer, Table, TableHeader, TableBody, TableRow, TableCell } from "@react-md/table";

import { Button } from "@react-md/button";

const Playground = (props) => {
  const { inputRef, data, onChange, onAddList, counter, addCounter } = props;
  const storeState = useSelector((state) => state);
  const { user } = storeState;

  return (
    <>
      {user.isLoggedIn === false ? <Navigate to="/login" replace={true} /> : null}

      <center>
        <h1>{counter}</h1>
        <button onClick={addCounter}>add count</button>
      </center>

      {data.map((item) => {
        return (
          <>
            <form onSubmit={onAddList} key={item.id} style={{ border: "1px solid red", marginBottom: 30 }}>
              <TableContainer>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell>Qty</TableCell>
                      <TableCell>Product code</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <input onChange={onChange} ref={inputRef} />
                      </TableCell>
                      <TableCell>
                        <h1>{item.title}</h1>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </form>
          </>
        );
      })}
    </>
  );
};

export default React.memo(Playground);
