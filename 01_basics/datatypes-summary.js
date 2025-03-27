/*
The data types has been divided into two parts-

first is primitive
second is non-primitive

the diff in both them that how the data is kepp in memory and how
we can access it

*/


/*
Primitve are of seven types->

Note-> Primtive data type are of call back type means jb bhi hum apko inko khi se khi copy krte hai
inka jo original data h wo refernce apko nhi diya jata inko copy krke diya jata h alag and whatever changes 
you do affect the copy one not the original

String 
Number 
Boolean
Null (means empty not zero)
Undefined
Symbol
BigInt


*/

const str = "abhinav"
let num = 123
num = 1.5
const check = true
let val = null
let val2 = undefined
let sym1 = Symbol("123")
let sym2 = Symbol("123")
let highNum = 1234983493849830302n


/*

Reference Type(Non primitive type)
Array 
Objects 
Functions


*/

let myArr = [1,2,3,4,5,"hello"]

let  myObj = {
    name : "Abhinav",
    age : 18,
    class : "btech"
}

let myfunc = function(){
    console.log("hello");
}

console.log(typeof myArr);
console.log(typeof myObj);
console.log(typeof myfunc);

