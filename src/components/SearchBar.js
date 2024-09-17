/** @format */

import React, { useEffect, useState, useContext, useRef } from "react";
import { Form, FormControl } from "react-bootstrap/";
import { Link } from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";

import "../components/Styles/searchbar.css";

const SearchBar = ({ searchDivRef, isOpen }) => {
  const [searchState, setSearchState] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    try {
      const getAllProducts = async () => {
        const res = await fetch("/api/products/all");
        const data = await res.json();
        setAllProducts(data);

        // setFilterAllProducts(data); //copy of the allProducts
      };

      getAllProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  ////Here we are using values from user and we are going to fetch DB based on these values
  const handleSearch = (e) => {
    setSearchState(e.target.value);
  };

  //////Getting
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const displayProducts = () => {
    ////////trying to display a div - Results not found

    // if (!allProducts.includes(searchState)) {
    //   return <div className="no-results-search">Results not found!</div>;

    //   ///////This works without if() (56)
    // } else if (allProducts.includes(searchState)) {

    return (
      <div className='show-search-products'>
        {allProducts
          .filter((nameProduct) => {
            return nameProduct.product_name
              .toLowerCase()
              .includes(searchState.toLowerCase());
            // }
          })
          .map((product) => {
            return (
              <div key={product.product_id}>
                <Link to={`/product/${product.product_id}`}>
                  {product.product_name}

                  <img
                    className='img-search-product'
                    src={product.product_image}></img>
                </Link>

                <div>{product.product_price}</div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit} className='form'>
          <FormControl
            type='search'
            placeholder='Search'
            aria-label='Search'
            onChange={handleSearch}
          />
        </Form>

        <div
          style={{ display: !isOpen ? "none" : "block" }}
          className='search-list'
          ref={searchDivRef}>
          {searchState !== "" ? displayProducts() : ""}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
