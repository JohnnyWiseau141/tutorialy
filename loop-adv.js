const { start } = require('repl')
const sbeve = require('./sbeve.js')

console.log("Choose a number to count to:")

var startingNumber = sbeve.inputNumber()

if (startingNumber === 0) {
    console.log("You chose zero! Many fictional characters are named zero!")
} else {

    if ( startingNumber < 0 ) {
        var negativeNumber
        negativeNumber = startingNumber

        negativeNumber = startingNumber - negativeNumber - 1

        while (negativeNumber >= startingNumber) {
            console.log(negativeNumber)
            negativeNumber = negativeNumber - 1
        }
    }

    
    var daChangingNumber

    daChangingNumber = startingNumber


    daChangingNumber = startingNumber - daChangingNumber +1

    while ( daChangingNumber <= startingNumber ) { 

        console.log(daChangingNumber)

        daChangingNumber = daChangingNumber + 1
}

}