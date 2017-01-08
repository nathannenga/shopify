var Exports = module.exports = {},
    Product = require('../models/ProductModel'),
    Image   = require('../models/ImageModel'),
    Option  = require('../models/OptionModel');

Exports.saveOptions = function (productId, product) {
  if (product.removedOptions && product.removedOptions.length)
    removeOptions(productId, product.removedOptions);

  product.options.forEach(function (option) {
    if (option._id) return overrideOption(product, option);

    var newOption = new Option(option);
    newOption.product = productId;

    // SAVE OPTION
    newOption.save(function (err, savedOption) {
      if (err) return console.log('Error saving option: ', err);

      // SAVE OPTION ID TO PRODUCT
      Product.findById(productId, function(err, product) {
        if (err || !product) return console.log('Error finding product for options: ', err, product);
        if (!product.options) product.options = [];
        product.options.push(savedOption._id);
        product.save();
      })
    });
  })
};

function overrideOption (product, option) {
  // overreide this saved option
  Option.findById(option._id, function (err, foundOption) {
    if (err) return console.log('Error overriding option: ', err);
    foundOption.name = option.name;
    foundOption.values = option.values;
    foundOption.save();
  })
};

function removeOptions (productId, removedOptions) {
  removedOptions.forEach(function (optionId) {
    // REMOVE OPTION FROM PRODUCT
    Product.findById(productId, function (err, result) {
      result.options = result.options.filter(function (o) {
        if (o == optionId) return false;
        return true;
      })

      result.save();
    })

    // REMOVE OPTION
    Option.find({ _id: optionId }).remove().exec();
  })
};
