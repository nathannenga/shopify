var mongoose = require('mongoose'),
    shortid  = require('shortid');

var VariantSchema = new mongoose.Schema({
  _id           : { type: String, 'default': shortid.generate },
  product       : { type: String, ref: 'Product' },
  // option        : { type: String, ref: 'Option'},
  // attributes    : { optionName: String, value: String },
  values        : [String],
  price         : Number,
  sku           : String,
  barcode       : String,
  quantity      : Number,
  active        : Boolean
});

module.exports = mongoose.model('Variant', VariantSchema);
