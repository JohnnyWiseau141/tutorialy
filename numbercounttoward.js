const sbeve = require('./sbeve.js')

console.log("Choose a number to count to:")

var startingNumber = sbeve.inputNumber()

var daChangingNumber

daChangingNumber = startingNumber


daChangingNumber = startingNumber - daChangingNumber +1

while ( daChangingNumber <= startingNumber ) { 

    console.log(daChangingNumber)

    daChangingNumber = daChangingNumber + 1
}
