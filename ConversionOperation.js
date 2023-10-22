
// Conversion in number

/**
 * "33" -> 33
 * "33abc" -> NaN
 * null -> 0
 * undefined -> NaN
 * true -> 1
 * false -> 0
 */

let val1 = "33"
let val2 = "33abc"
let val3 = null
let val4
let val5 = true
let val6 = false
console.table([Number(val1),Number(val2),Number(val3),Number(val4),Number(val5),Number(val6)])


// Conversion into Boolean:

let isLoggedIn = 1;
let booleanInLoggedIn = Boolean(isLoggedIn);
console.log(booleanInLoggedIn);

/**
 * "" -> false
 * 0 -> false
 * "abc" -> true
 */


// Conversion in String

