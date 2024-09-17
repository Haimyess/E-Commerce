/** @format */

const { newPurchase } = require("../modules/Orders.js");

const _newPurchase = (req, res) => {
  // changed here
  newPurchase(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

module.exports = {
  _newPurchase,
};
