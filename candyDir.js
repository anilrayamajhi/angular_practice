(function(){
  'use strict';
angular.module('candyShop')
  .directive('candyList', candyList)
  .directive('candyFilters', candyFilters)


function candyList(){
  var directive = {
    // 'E': Accessable HTML Elements; 'A': Accessable Element's Attribute, 'C': Accessable Element's Class
    restrict: 'E',
    templateUrl: 'templates/candyList.html'
  }
  return directive
}

function candyFilters(){
  var directive = {
  restrict: 'E',
  templateUrl: 'templates/candyFilters.html'
}
return directive
}
})()
