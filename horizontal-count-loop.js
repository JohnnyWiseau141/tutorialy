const sbeve = require('./sbeve.js')

console.log("Enter a number to count to:")


const daChosenNumero = sbeve.inputNumber()



let evolvingNo = ""

for (let counter = 1; counter <= daChosenNumero; counter++) {
    evolvingNo = evolvingNo + counter+" "
}

console.log(evolvingNo)