
// object by constructor -> Singleton

// object literals

const obj = {} // empty object
const mySymbl = Symbol("key1")
const obj2 = {
    name: "Ashish",
    age: 26,
    email:"ashish@gmail.com",
    "full name":"ashish maurya",
    [mySymbl] : "value1"
}
//console.log(typeof obj2[mySymbl])

//console.log(obj2)
//console.log(obj2["full name"])

// freeze th object value
//Object.freeze(obj2)

//add function into object

obj2.greeting = function(){
    console.log("hello user from greeting")
}
//console.log(obj2.greeting())

obj2.greetingTwo = function(){
    console.log(`hello user my name is ${this["full name"]}`)
}
//console.log(obj2.greetingTwo())


// *************************************************************************************

const userOne = new Object() // singleton

const userTwo = {
    email:"kameshwar@gmaul.com",
    fullname: {
        userfullname:{
            firstname:"kameshwar",
            lastname:"maurya"
        }
    }
}

console.log(userTwo.fullname.userfullname.firstname)

const source = {1:"a",2:"b"}
const target1 = {3:"a",4:"b"}
//const obj3 = Object.assign({},source,target1)
const obj3  = {...source,...target1}
//console.log(obj3)

//console.log(userTwo.hasOwnProperty('fullname'))



// Destructuring of object

const userThree = {
    userfullname:"user name",
    email:"email@gmail.com"
}

const {userfullname : name,email} = userThree
console.log(name)
console.log(email)


