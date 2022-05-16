const sbeve = require('./sbeve.js')

// Write a function called addOne that takes a single number as an argument and returns that number plus 1.

// Examples:

// addOne(1) //=> 2
// addOne(-5) //=> -4

function addOne(num) {
    print(num + 1)
    return num + 1
}

print("Type a single number to be entered as an argument into the function:")
num = inputNumber()

addOne(num)


// Challenge: 02-addTwoNumbers

// Difficulty: Basic

// Prompt:

// - Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
// - If either argument is not a number, return the value of NaN.

// Examples:

// addTwoNumbers(5, 10) //=> 15
// addTwoNumbers(10, -2) //=> 8
// addTwoNumbers(0, 0) //=> 0
// addTwoNumbers('Hello', 5) //=> NaN




function addTwoNumbers(num1, num2) {

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    print(num1 + num2)
    return num1 + num2    
}

print("Enter the first numeric argument for addTwoNumbers():")

numeroUno = input()

print("Now enter the second argument:")
numeroDos = input()

addTwoNumbers(numeroUno, numeroDos)

// Challenge: 03-sumNumbers

// Difficulty: Basic

// Prompt:

// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).

// Examples:

// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0

//solutions:

function sumNumbers(arr) {

  var daNewVariableYo = 0

  for (var index = 0; index < arr.length; index+=1) {
    
    if (arr.length === 0) {
      return 0
    } else {
      daNewVariableYo = daNewVariableYo + arr[index]
    }
  }
    return daNewVariableYo
}

// Challenge: 04-addList

// Difficulty: Basic

// Prompt:

// - Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
// - Assume all parameters will be numbers.
// - If called with no arguments, return 0 (zero).

// Examples:

// add(1) //=> 1
// add(1,50,1.23) //=> 52.23
// add(7,-12) //=> -5

// my awesome code that is super undefined so i had to learn the code challenge program wanted me to use arguments variable and then docs time
// function addList() {

//   goneToTheLake = 0
//   for (var counter = 0; counter < argathum.length; index+=1) {
    
//     if (argathum.length === 0) {
//       return 0
//     } else {
//       goneToTheLake = goneToTheLake + argathum[index]
//     }
//   }
//     return goneToTheLake
// }

// the code i had to modify and cheat for that gets a perfect score because the arguments object is a thing
function addList() {

  let daSum = 0
  for (let counter = 0; counter < arguments.length; counter+=1) {
     
    daSum += arguments[counter]
    
  }
    return daSum
}


// // johnny trying to test out arguments and return a little

// function urBad(str, str2) {
//     return str+" "+str2
// }

  
// function girGuesses(str1, str2, str3) {
    
//     str1.toLowerCase()
//     str2.toLowerCase()
//     str3.toLowerCase()
  
//     if (str1 !== "victory" || str2 !== "for" || str3 !== "zim") {
//       return("MY TALLEST! MY TALLEST! MY TALLEST! MY TALLESSSSST!")
//     } else {
//       return str1+" "+str2+" "+str3+"!"
//     }
  
// }