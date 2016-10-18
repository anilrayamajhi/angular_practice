//entry point, setup angular module

angular.module('candyShop', [])
//costum made filter initialization
  .filter('checkmark', checkmark)
  .directive('candyList', candyList)


//costum made filter processing
function checkmark(){
  return function(input){
    return input ? '\u2713':'\u2718'
  }
}

function candyList(){
  var directive = {
    // 'E': Accessable HTML Elements; 'A': Accessable Element's Attribute, 'C': Accessable Element's Class
    restrict: 'E',
    templateURL: 'templates/candyList.html'
  }
  return directive
}
