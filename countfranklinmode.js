const sbeve = require('./sbeve.js')

var startingCount = 2
var yourCount

console.log("Franklin the turtle can count by twos so can you!")

yourCount = sbeve.inputNumber()

if (yourCount !== startingCount ) {
  console.log("Even Franklin knew you shoulda started at",startingCount+"! But you blew it!")
} else {
  var newCountToGuess = yourCount + 2

  console.log("Keep counting! After you're done counting by twos we can tie some shoes!")
  yourCount = sbeve.inputNumber()

  while (yourCount === newCountToGuess) {
    newCountToGuess = yourCount + 2
    console.log("Good job! One step closing to tying those shoes!")
    yourCount = sbeve.inputNumber()
  }

  console.log("You should have guessed what Franklin would have said which is",newCountToGuess+"!")
}