const sbeve = require('./sbeve.js')

console.log("Type a string to be repeated")

var chosenString
chosenString = sbeve.input()
var evolvingString
evolvingString = chosenString

console.log("How many times would you like to repeat da chosen string?")

var xTimes
xTimes = sbeve.inputNumber()

var counter
counter = 1

while (counter < xTimes) {

    counter = counter + 1

    evolvingString = evolvingString + chosenString
    
}

console.log(evolvingString)
