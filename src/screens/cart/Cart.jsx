import React from "react";
import CartModalContainer from "../../components/modals/cart";
import { Button } from "@react-md/button";

const Cart = (props) => {
  const { handleGetProducts, dataProducts } = props;
  return (
    <>
      <h1>This should be cart!</h1>
      <button
        onClick={() => handleGetProducts("https://fakestoreapi.com/products")}
      >
        get the products
      </button>

      {dataProducts?.map((item) => {
        console.log(item);
        return (
          <div
            key={item.key}
            style={{ border: "1px solid", height: 100 }}
            onClick={() => console.log("item", item)}
          >
            <img src={item.image} alt="images" width={40} />
            <h4>{item.title}</h4>
            <Button theme="primary" themeType="outlined">
              Add to cart
            </Button>
          </div>
        );
      })}

      <CartModalContainer />
    </>
  );
};

export default Cart;
