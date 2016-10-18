angular.module('candyShop', [])
  .filter('checkmark', checkmark)

function checkmark(){
  return function(input){
    return input ? '\u2713':'\u2718'
  }
}
