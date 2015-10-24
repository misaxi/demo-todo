const angular = require('angular')
const subseq = require('../../../algo/subseq')

angular
  .module('todo')
  .controller('AppCtrl', AppCtrl)

/* @ngInject */
function AppCtrl ($http, $window, $timeout) {
  const store = $window.localStorage

  angular.extend(this, {
    items: [],
    create: create,
    remove: remove,
    done: done,
    showSeq: showSeq
  })

  // workaround for reading data from localStorage
  // it doesn't work within the same eval loop
  $timeout(() => this.items = load())

  function create () {
    this.model.done = false
    this.items.unshift(this.model)
    save(this.items)
    this.model = {}
  }

  function done (item) {
    save(this.items)
  }

  function remove (item) {
    this.items.splice(this.items.indexOf(item), 1)
    save(this.items)
  }

  function showSeq () {
    $http.get('assets/pi.txt')
      .then(res => {
        const PI = res.data
        const count = subseq(PI, '123')
        this.subseqCount = `There are ${count} subsequence of '123'
          within the first 100,000 digits of PI...`
      })
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
