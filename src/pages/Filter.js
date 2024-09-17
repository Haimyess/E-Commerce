/** @format */

import React from "react";

function Filter({ product }) {
  return (
    <>
      <h3>Filter</h3>

      <h2>Brand</h2>
      <form>
        <label>{product.product_brand}</label>
        <input type='checkbox' />
      </form>
    </>
  );
}

export default Filter;
