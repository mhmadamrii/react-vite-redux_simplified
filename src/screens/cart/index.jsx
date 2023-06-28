import React, { useState } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import axios from "axios";

const CartContainer = (props) => {
  const [dataProducts, setDataProducts] = useState([]);

  const getProducts = (url) => {
    try {
      axios.get(url).then((res) => {
        const data = res.data;
        setDataProducts(data);
      });
    } catch (error) {
      console.log({
        status: "failed",
        message: { error },
      });
    }
  };

  return (
    <Cart
      {...props}
      handleGetProducts={getProducts}
      dataProducts={dataProducts}
    />
  );
};

const addItemToCart = (item) => {
  console.log("item cart???", item);
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

/* kalo ngga butuh presentational component bisa langsung gini, tapi kalo butuh harus make <Comp /> */
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
