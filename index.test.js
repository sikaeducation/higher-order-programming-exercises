const { forEach, map, filter, find, reduce } = require("./index")

describe("forEach", () => {
  it("calls console.log on each item in the array", () => {
    const numbers = [1, 2, 3]
    const fakeFunction = jest.fn()
    forEach(numbers, fakeFunction)

    expect(fakeFunction).toHaveBeenNthCalledWith(1, 1)
    expect(fakeFunction).toHaveBeenNthCalledWith(2, 2)
    expect(fakeFunction).toHaveBeenNthCalledWith(3, 3)
  })
})

describe("map", () => {
  it("doubles numbers", () => {
    const numbers = [1, 2, 3]
    const doubledNumbers = map(numbers, number => number * 2)

    expect(doubledNumbers).toEqual([2, 4, 6])
  })
  it("triples numbers", () => {
    const numbers = [1, 2, 3]
    const doubledNumbers = map(numbers, number => number * 3)

    expect(doubledNumbers).toEqual([3, 6, 9])
  })
  it("pulls a property out of an object", () => {
    const people = [{
      name: "Kyle",
    }, {
      name: "Matt",
    }, {
      name: "Sara",
    }]
    const names = map(people, person => person.name)

    expect(names).toEqual(["Kyle", "Matt", "Sara"])
  })
})

describe("filter", () => {
  it("removes even numbers", () => {
    const numbers = [1, 2, 3, 4]
    const filteredNumbers = filter(numbers, number => number % 2 !== 0)

    expect(filteredNumbers).toEqual([1, 3])
  })
  it("removes people under 18", () => {
    const people = [{
      name: "Kyle",
      age: 15,
    }, {
      name: "Matt",
      age: 8,
    }, {
      name: "Sara",
      age: 25,
    }]
    const filteredPeople = filter(people, person => person.age >= 18)

    expect(filteredPeople).toEqual([{ name: "Sara", age: 25 }])
  })
})

describe("find", () => {
  it("finds the first even number", () => {
    const numbers = [1, 2, 3]
    const foundNumber = find(numbers, number => number % 2 === 0)

    expect(foundNumber).toEqual(2)
  })
  it("finds the first person over 18", () => {
    const people = [{
      name: "Kyle",
      age: 15,
    }, {
      name: "Matt",
      age: 8,
    }, {
      name: "Sara",
      age: 25,
    }]
    const foundPerson = find(people, person => person.age >= 18)

    expect(foundPerson).toEqual({ name: "Sara", age: 25 })
  })
})

describe("reduce", () => {
  it("sums numbers", () => {
    const numbers = [1, 2, 3]
    const sum = reduce(numbers, (sum, number) => sum + number, 0)

    expect(sum).toEqual(6)
  })
  it("counts occurrences", () => {
    const items = ["spoon", "rake", "rake"]
    const object = reduce(items, (object, item) => {
      object[item] = object[item]
        ? object[item] + 1
        : 1
      return object
    }, {})

    expect(object).toEqual({ spoon: 1, rake: 2 })
  })
})
