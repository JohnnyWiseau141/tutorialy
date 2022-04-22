const sbeve = require('./sbeve.js')

var startingCount
var initialCount

console.log("Time to start counting upward from a whole interger, by that number, that you, THE USER, chooses! Ready or not here we go!")

initialCount = sbeve.inputNumber()

console.log("You chose", initialCount,"so we're starting from that number. Here we go!")


var newCountToGuess
newCountToGuess = initialCount
yourCount = sbeve.inputNumber()


if (yourCount === initialCount){

  startingCount = yourCount

  

  newCountToGuess = yourCount*2

  console.log("Good choice! Now keep the count going, incrementing by the number you chose!")

  yourCount = sbeve.inputNumber()

  while (yourCount === newCountToGuess) {
    newCountToGuess = yourCount+initialCount
    console.log("Good guess! Keep going!")
    yourCount = sbeve.inputNumber()
  }

}
console.log("You ruined it! Way to poop all over the party when you were supposed to type",newCountToGuess+"!")
    
