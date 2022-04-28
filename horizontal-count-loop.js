const sbeve = require('./sbeve.js')

console.log("Enter a number to count to:")

var daChosenNumero
daChosenNumero = sbeve.inputNumber()

var counter
counter = 1

var 
evolvingNo = ""

while (counter <= daChosenNumero) {
    
    evolvingNo = evolvingNo + counter+" "

    counter = counter + 1

}

console.log(evolvingNo)