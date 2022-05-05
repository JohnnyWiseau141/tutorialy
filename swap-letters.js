const sbeve = require('./sbeve.js')

print("Type something in and I'll swap out the pONDAS (letter p) with the bUTTS (letter b) and visa-verse!")

var inputPutinsButt = input()

var dumCountyButt = 0

var replaceyStringo = ""

for (var dumCountyButt = 0 ;dumCountyButt < inputPutinsButt.length; dumCountyButt += 1 ) {

    if (inputPutinsButt[dumCountyButt] === "p") {
        replaceyStringo += "b"
    } else if (inputPutinsButt[dumCountyButt] === "b") {
        replaceyStringo += "p"
    } else if (inputPutinsButt[dumCountyButt] === "P") {
        replaceyStringo += "B"
    } else if (inputPutinsButt[dumCountyButt] === "B") {
        replaceyStringo += "P"
    } else {
        replaceyStringo += inputPutinsButt[dumCountyButt]
    }

    
}

print("Your swapped string is: "+replaceyStringo)