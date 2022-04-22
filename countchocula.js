const sbeve = require('./sbeve.js')

var startingCount = 1
var yourCount

console.log("Time to start counting from uno, one by one. Ready or not here we go!")

yourCount = sbeve.inputNumber()

if (yourCount !== startingCount ) {
  console.log("You started incorrectly! Now the game's been ruined!")
} else {
  var newCountToGuess = yourCount + 1
  
    console.log("Good answer! Now keep the count going, one by one!")
    yourCount = sbeve.inputNumber()
    
    while (yourCount === newCountToGuess) {
      newCountToGuess = yourCount + 1
      console.log("Good guess! Keep going!")
      yourCount = sbeve.inputNumber()
    }

    console.log("You ruined it! Way to poop all over the party!")
    
}