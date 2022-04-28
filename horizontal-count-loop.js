const { count } = require('console')
const sbeve = require('./sbeve.js')

console.log("Enter a number to count to:")

var daChosenNumero
daChosenNumero = sbeve.inputNumber()

var counter
counter = 1

var 
tester = counter

while (counter < daChosenNumero) {
    
    counter = counter + 1

    tester = tester.toString()+ counter.toString()
    
}

console.log(tester)