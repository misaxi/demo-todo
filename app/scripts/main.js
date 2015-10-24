require('angular')
  .module('todo', [require('angular-material')])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('brown')
  })

require('./controllers')
