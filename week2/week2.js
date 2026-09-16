// myMap

const doubled = [1, 2, 3].map(n => n * 2)  // [2, 4, 6]
// From scratch — your job is to fill this in
const myMap = (arr, callback) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        // what goes here?
      result.push(callback(arr[i]))
    }
    return result
}

// myFilter

const evens = [1, 2, 3, 4].filter(n => n % 2 === 0)  // [2, 4]
// From scratch
const myFilter = (arr, callback) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        // what goes here?
      if (callback(arr[i])) {
        result.push(arr[i])
      }
    }
    return result
}

// myReduce

const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)  // 10
// From scratch
const myReduce = (arr, callback, initialValue) => {
    let acc = initialValue
    for (let i = 0; i < arr.length; i++) {
        // what goes here?
      acc = callback(acc,arr[i])
    }
    return acc
}