const sbeve = require('./sbeve.js')

print("Type something and there will be no caps. No cap.")

var inputToLowerCase = input()

var counter = 0

var newString = ""

for (var counter = 0 ;counter < inputToLowerCase.length; counter += 1 ) {

    if (inputToLowerCase[counter] === "A") {
        newString += "a"
    } else if (inputToLowerCase[counter] === "B") {
        newString += "b"
    } else if (inputToLowerCase[counter] === "C") {
        newString += "c"
    } else if (inputToLowerCase[counter] === "D") {
        newString += "d"
    } else if (inputToLowerCase[counter] === "E") {
        newString += "e"
    } else if (inputToLowerCase[counter] === "F") {
        newString += "f"
    } else if (inputToLowerCase[counter] === "G") {
        newString += "g"
    } else if (inputToLowerCase[counter] === "H") {
        newString += "h"
    } else if (inputToLowerCase[counter] === "I") {
        newString += "i"
    } else if (inputToLowerCase[counter] === "J") {
        newString += "j"
    } else if (inputToLowerCase[counter] === "K") {
        newString += "k"
    } else if (inputToLowerCase[counter] === "L") {
        newString += "l"
    } else if (inputToLowerCase[counter] === "M") {
        newString += "m"
    } else if (inputToLowerCase[counter] === "N") {
        newString += "n"
    } else if (inputToLowerCase[counter] === "O") {
        newString += "o"
    } else if (inputToLowerCase[counter] === "P") {
        newString += "p"
    } else if (inputToLowerCase[counter] === "Q") {
        newString += "q"
    } else if (inputToLowerCase[counter] === "R") {
        newString += "r"
    } else if (inputToLowerCase[counter] === "S") {
        newString += "s"
    } else if (inputToLowerCase[counter] === "T") {
        newString += "t"
    } else if (inputToLowerCase[counter] === "U") {
        newString += "u"
    } else if (inputToLowerCase[counter] === "V") {
        newString += "v"
    } else if (inputToLowerCase[counter] === "W") {
        newString += "w"
    } else if (inputToLowerCase[counter] === "X") {
        newString += "x"
    } else if (inputToLowerCase[counter] === "Y") {
        newString += "y"
    } else if (inputToLowerCase[counter] === "Z") {
        newString += "z"
    } else {
        newString += inputToLowerCase[counter]
    }

    
}

print("Your swapped string is: "+newString)