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
      values: [{
        name: val,
        optionName: optionName
      }],
      quantity: 0,
      sku: '',
      barcode: ''
    };
    this.active = true;
  }

  function createVariant (val, optionName) {
    return new variantSchema(val, optionName);
  };

  service.renderVariants = function (newVar, optionName, allVars, allOptions) {
    var variant  = angular.copy(newVar),
        variants = angular.copy(allVars),
        options  = angular.copy(allOptions);

    // If only one option, new variant is only pointing to one option
    if (options.length === 1) {
      variants.push(createVariant(newVar, optionName));
      return variants;
    }

    // This is where things get CRAAAZY!!
    if (options.length === 2) {
      // Add the new variant to the first option
      if (variants[0].attributes.values.length < 2) {
        variants = variants.map(function (v) {
          v.attributes.values.push({
            name: variant,
            optionName: optionName
          });
          return v;
        });
      } else {
        // create a new copy of the options in the first one
        // to itterate over the new option value
        var newVariantRound = [];
        allOptions.forEach(function (o) {
          if (o.name == optionName) return;
          
          o.values.forEach(function (optionValue) {
            var newVariant = createVariant(optionValue, o.name);
            newVariant.attributes.values.push({
              name: newVar,
              optionName: optionName
            })
            newVariantRound.push(newVariant);
          })
        })

        variants = variants.concat(newVariantRound);
      }

      console.warn(variants);
      return variants;
    }
  };

  return service;
}]);
