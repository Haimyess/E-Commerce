/** @format */

const express = require("express");
const router = express.Router();
const {
  _getAllProducts,
  _getCategory,
  _getProduct,
} = require("../controlers/products.js");

// To All products
router.get("/all", _getAllProducts);

// To the categories
router.get("/:type", _getCategory);
router.get("/product/:id", _getProduct);

module.exports = router;
