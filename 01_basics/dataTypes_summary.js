// primitive

// 7 types
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint

// non-primitive

// object   
// array
// function

const score = "100"
const scorevalue = "100.3"

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const heros = ["shaktiman", "naagraj", "doga"]
let myobject = {
    name: "Annu",
    age: 22,
    }

    const myfunction = function(){
        console.log("hello world");
    }
    console.log(typeof myfunction);
    