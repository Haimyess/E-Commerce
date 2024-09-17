/** @format */
// Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
const {
  getAllProducts,
  getCategory,
  getProduct,
} = require("../modules/products.js");

//Get request to READ all of the pordcuts. Could be update, delete, etc (CRUD)
const _getAllProducts = (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// READ - GET one product
const _getProduct = (req, res) => {
  getProduct(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
// READ - GET category
const _getCategory = (req, res) => {
  // changed here
  getCategory(req.params.type)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
module.exports = {
  _getAllProducts,
  _getCategory,
  _getProduct,
};
