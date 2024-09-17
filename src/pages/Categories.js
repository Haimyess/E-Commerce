/** @format */

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./categories.css";

function Categories() {
  const params = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/products/all");
        const data = await res.json();
        // const unique = data.filter(
        //   (productType, index) =>
        //     data.findIndex((object) => object.value === productType.value) !==
        //     index
        // );
        // console.log(unique);
        setCategories(data);

        // setImage(data.product_image);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      <h2>Grid of categories</h2>
      {/* <div className=‘main-wrapper’>
        <aside className=‘categories-filter’> */}
      {/* <ul>
        <li>Hola</li>
        <li>Priviet</li>
        <li>Shalom</li>
      </ul> */}
      {/* </aside> */}
      <div className='categories-wrapper'>
        {/* {products.map((product) => {
          return (
            <div key={product.product_id} className=“category-card”>
              <Link to=“/category/:id”>
                <li>{product.product_type}</li>
                <img
                  className=“category-img”
                  src={categoriesArr.map((category) => category.imageUrl)}
                />
              </Link>
            </div>
          );
        })}
          */}
        {categories.map((category) => {
          return (
            <div key={category.product_id} className='category-card'>
              <Link to={`/${category.product_category}`}>
                <h3>{category.product_category}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Categories;
