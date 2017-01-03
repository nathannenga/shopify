var mongoose = require('mongoose'),
    shortid  = require('shortid');

var VariantSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  product       : { type: String, ref: 'Product' },
  option        : { type: String, ref: 'Option'},
  price         : Number,
  sku           : String,
  barcode       : String,
  quantity      : Number
});

module.exports = mongoose.model('Variant', VariantSchema);
