const sbeve = require('./sbeve.js')

print("Type something in and I'll swap out the pONDAS (letter p) with the bUTTS (letter b) and visa-verse!")

var inputPutinsButt = input()

var dumCountyButt = 0

var replaceyStringo = ""

for (var dumCountyButt = 0 ;dumCountyButt < inputPutinsButt.length; dumCountyButt += 1 ) {

    if (inputPutinsButt[dumCountyButt] === "A") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "E") {
       //nothing
    } else if (inputPutinsButt[dumCountyButt] === "I") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "O") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "U") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "a") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "e") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "i") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "o") {
        //nothing
    } else if (inputPutinsButt[dumCountyButt] === "u") {
        //nothing
    } else {
        replaceyStringo += inputPutinsButt[dumCountyButt]
    }

    
}

print("Your swapped string is: "+replaceyStringo)