var Exports = module.exports = {},
    User    = require('../models/UserModel'),
    Product = require('../models/ProductModel');

Exports.getProducts = function (req, res) {
  Product.find({})
  .populate({ path: 'images' })
  .exec(function (err, result) {
    if (err) return res.status(404).send(err);
    return res.json(result);
  });
};
