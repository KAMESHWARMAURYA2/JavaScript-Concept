/**
 * Array is resizable in javascript
 * in javascript array copy operation creates the shallow copy (reference of the object)
 */
let arr = [1,2,3,4]


// let arr2 = new Array(1,2,3)
// console.log(arr2)

// let arr3 = [1,2,3,"userName", 5.4]
// console.log(arr3)



// array methods:
arr.push(6)// add element in last
arr.pop() // delete element from last

arr.unshift(9) // add element in start
arr.shift()  // delete element from start

let newArr = arr.join() // convert array to string and bind with , separated values

//console.log(arr)
//console.log(newArr)

// slice, splice

/**
 * slice does not include the last range while spice does
 * slice does not manipulate the original array but splice does
 * 
 */

// const a1 = arr.slice(1,3)
// console.log(arr);
// console.log(a1)
// const a2 = arr.splice(1,3)
// console.log(arr)
// console.log(a2)


// concat : merge two array and return new array
// spread operator : spread the value of array in indiviual element

const anotherArray = [1,2,3,[4,5],6,[3,5,[6,7]]]
const usableArray = anotherArray.flat(Infinity)
console.log(usableArray)


/**
 * 
 * at()
 * concat()
 * Array()
 * copyWithin()
 * entries()
 * every()
 * fill()
 * filter()
 * find()
 * findIndex()
 * findLast()
 * findLastIndex()
 * flat()
 * flatMap()
 * forEach()
 * includes()
 * indexOf()
 * join()
 * keys()
 * lastIndexOf()
 * map()
 * pop()
 * push()
 * reduce()
 * reduceRight()
 * reverse()
 * shift()
 * slice()
 * some()
 * sort()
 * splice()
 * toLocalString()
 * toReversed()
 * toSorted()
 * toSpliced()
 * toString()
 * unshift()
 * values()
 * with()
 * 
 * Array.from()
 * Array.name()
 * Array.of()
 * Array.apply()
 * Array.bind()
 * Array.call()
 * 
 */