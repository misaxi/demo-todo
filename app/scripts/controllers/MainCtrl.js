const angular = require('angular')
angular
  .module('todo')
  .controller('MainCtrl', MainCtrl)

/* @ngInject */
function MainCtrl ($window, $timeout) {
  const store = $window.localStorage

  angular.extend(this, {
    items: [],
    create: create,
    remove: remove
  })

  // workaround for reading data from localStorage
  // it doesn't work within the same eval loop
  $timeout(() => this.items = load())

  function create () {
    this.items.unshift(this.model)
    save(this.items)
    this.model = {}
  }

  function remove (item) {
    this.items.splice(this.items.indexOf(item), 1)
    save(this.items)
  }

  const key = 'items'
  function load () {
    const json = store.getItem(key) || '[]'
    const items = JSON.parse(json)
    return items
  }

  function save (items) {
    const json = JSON.stringify(items)
    store.setItem(key, json)
  }
}
