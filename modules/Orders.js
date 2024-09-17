/** @format */

const database = require("../database.js");

const newPurchase = (purchase) => {
  console.log(purchase);
  return database("orders").insert(purchase).returning("*");
};

module.exports = {
  newPurchase,
};
