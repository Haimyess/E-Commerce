/** @format */

import React from "react";

const ProductCard = (props) => {
  function addToCart() {}
  return (
    <div className='card'>
      <img />
      <div>
        <h3>{props.product_name}</h3>
        <p>{props.product_description}</p>
        <p>{props.product_price}</p>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
