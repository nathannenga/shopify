angular.module('Shopify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: '/templates/products.placeholder.html'
      })
      .state('new-products', {
        url: '/products/new',
        templateUrl: '/templates/products.new.html'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: '/templates/orders.html'
      })
});
