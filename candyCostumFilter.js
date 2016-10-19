(function(){
  'use strict';
angular.module('candyShop')
//costum made filter initialization
  .filter('checkmark', checkmark)


//costum made filter processing
function checkmark(){
  return function(input){
    return input ? '\u2713':'\u2718'
  }
}
})()
