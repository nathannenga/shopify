angular.module('Shopify', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('products', {
        url: '/products',
        template: '<h1>PRODUCTS!!!</h1>'
        // templateUrl: 'products.html'
      })
      .state('orders', {
        url: '/orders',
        template: '<h1>ORDERS!!!</h1>'
        // templateUrl: 'orders.html'
      })
});
