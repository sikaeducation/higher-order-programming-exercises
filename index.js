function forEach(array, action){
  for (let item of array) {
    action(item)
  }
}

function map(array, transform) {
  const transformedArray = []

  for (let item of array) {
    transformedArray.push(transform(item))
  }

  return transformedArray
}

function filter(array, predicate) {
  const filteredArray = []

  for (let item of array) {
    if (predicate(item)) {
      filteredArray.push(item)
    }
  }

  return filteredArray
}

function find(array, predicate) {
  for (let item of array) {
    if (predicate(item)) {
      return item
    }
  }
}

function reduce(array, reducer, initialState) {
  let currentState = initialState
  for (let item of array) {
    currentState = reducer(currentState, item)
  }
  return currentState
}

module.exports = {
  forEach,
  map,
  filter,
  find,
  reduce,
}
