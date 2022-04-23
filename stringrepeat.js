const sbeve = require('./sbeve.js')

console.log("Type a string to be repeated")

var chosenString = sbeve.input()

console.log("How many times would you like to repeat da Chosen String?")

var repeater = sbeve.inputNumber()

while (repeater > 0) {

console.log(chosenString)

repeater = repeater - 1

}