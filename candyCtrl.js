(function(){
  'use strict';

angular.module('candyShop')
//startoff with candycontroller
    .controller('CandyController', CandyController)

    function CandyController($http) {
    var vm = this;
    $http({
      method: 'GET',
      url: 'data.json'
    }).success(function(data){
      console.log(data);
      return vm.candies = data;
    })

}
})()

// angular.module('candyShop')
// //startoff with candycontroller
//     .controller('CandyController', CandyController)
//
//     function CandyController() {
//     var vm = this;
//
//     vm.candies=[{name: 'Snickers', color: 'Brown', fruity: false, price: 1.5}, {name: 'Fruit Roll Ups', color: 'Red', fruity: true, price: 3}, {name: 'White Chocolate Hershey Bars', color: 'White', fruity: false, price: .85}, {name: 'Lime Jelly Beans', color: 'Green', fruity: true, price: .05}, {name: 'Red Hots', color: 'Red', fruity: false, price: 1.25}, {name: 'Whoppers', color: 'Brown', fruity: false, price: 1.75}]
// }
