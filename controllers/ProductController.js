var Exports = module.exports = {},
    Product = require('../models/ProductModel'),
    Image   = require('../models/ImageModel');

Exports.save = function (req, res) {
  // TODO: UNCOMMENT AND REPLACE THE FOLLOWING 2 LINES
  // if (!req.user || !req.user._id) return res.status(401).send('Please log in');

  var newProduct = new Product(req.body);
  // newProduct.owner = req.user._id;
  newProduct.owner = 'ryNrKHENe';
  newProduct.save(function (err, result) {
    if (err) return res.status(500).send(err);
    return res.json(result);
  })
};

Exports.edit = function (req, res) {
  // TODO: UNCOMMENT AND REPLACE THE FOLLOWING LINE
  // if (!req.user || !req.user._id) return res.status(401).send('Please log in');

  Product.findById(req.params.productId, function (err, product) {
    if (err) return res.status(404).send(err);

    for (key in req.body) {
      if (key == '_id') continue;
      product[key] = req.body[key];
    }

    product.save(function (err, result) {
      if (err) return res.status(500).send(err);
      return res.json(result);
    })
  })
};

Exports.getUserProducts = function (req, res) {
  // TODO: UNCOMMENT AND REPLACE THE FOLLOWING 2 LINES
  // if (!req.user || !req.user._id) return res.status(401).send('Please log in');

  // Product.find({'owner': req.user._id}, function (err, result) {
  Product.find({'owner': 'ryNrKHENe'}, function (err, result) {
    if (err) return res.status(500).send(err);
    return res.json(result);
  });
};

Exports.getProduct = function (req, res) {
  Product.find({'_id': req.params.productId})
  .populate({ path: 'images' })
  .exec(function (err, result) {
    if (err) return res.status(404).send(err);
    return res.json(result);
  });
};
