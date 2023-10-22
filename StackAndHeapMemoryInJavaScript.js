// stack memory --> for primitive data type

// heap memory --> for non primitive type

// example: 1
let firstName = "Kameshwar Maurya"
let anotherFirstName = firstName
console.log(anotherFirstName) // output -> Kameshwar Maurya

anotherFirstName = "Ashish Maurya"
console.log(anotherFirstName) // output -> Ashish maurya
console.log(firstName) // output -> Kameshwar Maurya

/**
 * here only copy of the firstName was assigned into the anotherFirstName
 * thats why value for firstName did not change which we changed the value of anotherFistName
 * here stack memory was assigned to the both variables(firstName, anotherFiestName)
 */


// example 2:

const userOne = {
    email : "kameshar@gmail.com",
    age : 26
}

const userTwo = userOne;
userTwo.email = "ashish@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

/**
 * here reference of the object userOne was assigned to the object userTwo
 * thats why value of email changed while we want to change the email for userTwo object
 * here heap memory assigned
 */