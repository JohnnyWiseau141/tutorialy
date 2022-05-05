// only double the vowels:

const sbeve = require('./sbeve.js')

print("Type something in and I'll double each vowel!")

var inputInHell = input()

var countey = 0

var replaceDaStringyDingy = ""

for (var countey = 0 ;countey < inputInHell.length; countey += 1 ) {


    if (inputInHell[countey] === "A") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "E") {
       replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "I") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "O") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "U") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "a") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "e") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "i") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "o") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else if (inputInHell[countey] === "u") {
        replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    } else {
        replaceDaStringyDingy += inputInHell[countey]
    }

    
}

print("Your doubled vowel string is: "+replaceDaStringyDingy)