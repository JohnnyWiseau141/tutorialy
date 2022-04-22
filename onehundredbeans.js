const sbeve = require('./sbeve.js')

// useful functions:
// sbeve.input()
// sbeve.inputNumber()

console.log("Enter a special number and type of food:")
console.log("But first enter the number:")

var foodNo = sbeve.inputNumber()

console.log("Now enter the desired food:")

var foodType = sbeve.input()

if (foodNo === 100 && foodType === "beans") {
  console.log("You have", foodNo, foodType+"!")
} else {
  console.log('Well you got your desired amount of', foodNo, foodType, "but you didn't unlock the secret message so congrats I  GUESS, ya foo!")
}