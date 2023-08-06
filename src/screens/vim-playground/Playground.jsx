import React, { useState } from "react";
import Stripped from "../../components/Stripped";

export default function Playground(props) {
  const { dataQuery } = props;
  console.log("data queryyyyy", dataQuery);
  return (
    <main>
      <center>Hello world!</center>
      {dataQuery?.map((product) => {
        const { image, name, price, qty } = product;
        return (
          <div key={product?.id} style={{ border: "1px solid red", width: 400 }}>
            <center>
              <h1>{name}</h1>
            </center>
          </div>
        );
      })}

      <Stripped />
    </main>
  );
}
