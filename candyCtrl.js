angular.module('candyShop')
//startoff with candycontroller
    .controller('CandyController', CandyController)

    function CandyController($http) {
    var vm = this;
    $http({
      ethod: 'GET',
      url: 'data.json'
    }).success(function(data){
      console.log(data);
      return vm.candies = data;
    })

}
