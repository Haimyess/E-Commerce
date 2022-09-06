/** @format */

import { useState, useEffect, createContext } from "react";
import { Link, useParams } from "react-router-dom";

import React from "react";
import App from "../App";

// Importing styles
import "./styles/Category.css";

import Filter from "../components/Filter";

export const CatgContext = createContext();

export const Category = ({ onAdd }) => {
  /////////////////////////////////////////////////
  const [catgProducts, setCatgProducts] = useState([]);

  const [checkBoxBrand, setCheckBoxBrand] = useState([]);

  const [updatedCheckboxes, setUpdatedCheckboxes] = useState([]);

  const [checkBoxType, setCheckBoxType] = useState([]);

  const [searchArray, setSearchArray] = useState([]);

  const params = useParams();

  const getProducts = async () => {
    try {
      const res = await fetch(`/api/products/${params.type}`);
      const data = await res.json();
      ////////////////////////////////////////////

      const brands = data.map((brand) => {
        return {
          brand: brand.product_brand,
          id: brand.product_id,
        };
      });

      const types = data.map((type) => {
        return {
          type: type.product_type,
          id: type.product_id,
        };
      });

      setCatgProducts(data);
      setSearchArray(data);
      setUpdatedCheckboxes(data);
      setCheckBoxBrand(brands);
      setCheckBoxType(types);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>{params.type}</h1>
      <div className='category-container'>
        <aside className='category-aside '>
          <CatgContext.Provider
            value={{
              setCatgProducts,
              catgProducts,
              checkBoxBrand,
              setCheckBoxBrand,
              updatedCheckboxes,
              setUpdatedCheckboxes,
              checkBoxType,
              setCheckBoxType,
            }}>
            <Filter />
          </CatgContext.Provider>
        </aside>

        <div className='category-wrapper'>
          {catgProducts.map((product) => {
            return (
              <div
                className='product-card'
                key={product.product_id}
                id={product.product_id}>
                <Link to={`/product/${product.product_id}`}>
                  <img className='img-card' src={product.product_image} />
                  <h3 className='title-card'>{product.product_name}</h3>
                </Link>
                <p>{product.product_brand}</p>
                <p>{product.product_name}</p>
                <p>{product.product_description}</p>
                <p>${product.product_price}</p>

                <button onClick={() => onAdd(product)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
