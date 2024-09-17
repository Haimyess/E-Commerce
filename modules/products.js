/** @format */
// Rwquiring the database from heroku from the file database.js
const database = require("../database.js");

// Getting from database table products, all of the products in it
const getAllProducts = () => {
  return database("products").select("*").orderBy("product_name");
};

// Get the category

const getCategory = (product_category) => {
  return database("products")
    .select(
      "*"
      // "product_id",
      // "product_name",
      // "product_price",
      // "product_image",
      // "product_brand",
      // "product_description",
      // "product_category",
      // "product_subcategories"
    )
    .where({ product_category: product_category });
};

// Getting a product
const getProduct = (product_id) => {
  return database("products")
    .select(
      "product_id",
      "product_name",
      "product_price",
      "product_image",
      "product_description"
    )
    .where({ product_id: product_id });
};

// Exporting the function getAllPRoduct that gets the products of our ecommerce website
module.exports = {
  getAllProducts,
  getCategory,
  getProduct,
};
