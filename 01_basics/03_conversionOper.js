let score = 33

console.log(typeof score)
console.log(typeof (score))

// but if the value comes i string and u have to do the operation in num so,

score = "33"
let valueInNum = Number(score)

console.log(typeof valueInNum)

//but what if there is not a pure number like->

let check = '33abc'

let finalCheck = Number(check) 

console.log(typeof finalCheck) //number 
console.log(finalCheck) //NaN

console.log(typeof NaN) //because of this


//What is we do with null and undefined

//null
 check = null

 finalCheck = Number(check) 

 console.log(typeof finalCheck) //number 
 console.log(finalCheck) //output will be 0


 //with undefined
 check = undefined

 finalCheck = Number(check) 

 console.log(typeof finalCheck) //number 
 console.log(finalCheck) //NaN


 //in case with boolean

 //if true 

 check = true

 finalCheck = Number(check) 

 console.log(typeof finalCheck) //number 
 console.log(finalCheck) //1

 //if false

 check = false

 finalCheck = Number(check) 

 console.log(typeof finalCheck) //number 
 console.log(finalCheck) //0

 //if there is pure string 

 check = "hello"

 finalCheck = Number(check) 

 console.log(typeof finalCheck) //number 
 console.log(finalCheck) //NaN

 //Conversion to BOOLEAN

 let num = 1
 let numCheck = Boolean(num)

 console.log(typeof numCheck)//boolean
 console.log(numCheck)//true

 /*
  if there was ->

  num = 0 then the output will be false
  else if there is negative or postivie integer the output will be true

  num = ""
  then the output will be false

  num = " " || num = "anything"
  then the output will be true

  */


 //Conversion to String

 let someNum = 33
 let changeToStr = String(someNum)

 console.log(typeof changeToStr)//String
 console.log( changeToStr)//33

  