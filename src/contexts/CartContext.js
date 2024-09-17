/** @format */

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Local storage

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem("product"));
  //   if (products) {
  //     setCart(products);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(cart));
  // }, [cart]);

  const shipping = 20;

  const taxInterest = 0.17;

  const subTotalPrice = cart.reduce(
    (a, c) => a + c.product_price * c.quantity,
    0
  );

  const taxes = taxInterest * subTotalPrice;

  const totalPrice = subTotalPrice + shipping + subTotalPrice * taxInterest;

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        shipping,
        taxInterest,
        subTotalPrice,
        taxes,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
