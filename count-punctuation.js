const sbeve = require('./sbeve.js')

print("Type something and punctuation shall be counted up! Tally da ho")

var inputImp = input()

var countCommaEula = 0


for (var index = 0; index < inputImp.length; index += 1) {
    if ( inputImp[index] === "." 
    || inputImp[index] === ","
    || inputImp[index] === "!"
    || inputImp[index] === "?"
    || inputImp[index] === ":"
    || inputImp[index] === ";"
     ) {
        countCommaEula += 1
    }
}

print("You used a punctuation: "+countCommaEula+" times")