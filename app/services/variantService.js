angular.module('Shopify')

.factory('variantService', ['$http', function ($http) {
  var service = {};

  // var variantSchema = {
  //   _id           : null,
  //   product       : null,
  //   option        : { type: String, ref: 'Option'},
  //   attributes    : { optionName: '', value: '' },
  //   price         : Number,
  //   sku           : String,
  //   barcode       : String,
  //   quantity      : Number,
  //   active        : true
  // }

  function variantSchema (val, optionName) {
    this.attributes = {
      optionName : optionName || '',
      value: val,
      quantity: 0,
      sku: '',
      barcode: ''
    };
    this.active = true;
  }

  service.newVariant = function (val, optionName) {
    return new variantSchema(val, optionName);
  };

  return service;
}]);
