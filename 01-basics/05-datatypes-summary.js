//*************Primitive****************

// 7 types : String , Boolean , Number , null , undefined, symbol, bigint


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outSideTemp = null//completely empty
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

let bigNumber = 3837498379287398472n //bigInt
// console.log(typeof bigNumber);





//****** Reference(not primitive):Array, Object ,Functions******

const heros = ["Ram", "Krishna", "Shiv"]// array
let myObj =
{
   name = "Ranu",
   age = 23
} // Object

let myFunction = function () {
    console.log("Hello World");
}//Function

