const sbeve = require('./sbeve.js')

print("Type a string, any string, and I will chop off it's first and final characters like a madman!")

var inputToBeSplit = input()

var replaceyStringo = ""

if (inputToBeSplit.length < 2) {
    print("That's not enough characters, ya fool!")
} else if (inputToBeSplit.length === 2) {
    print("That's exactly enough to make an empty string!")
} else {

for (var dumCountyButt = 0 ; dumCountyButt < inputToBeSplit.length; dumCountyButt += 1 ) {

    if (dumCountyButt === 0) {
        // NOTHING
    } else if (dumCountyButt === inputToBeSplit.length - 1) {
        //NOTHING
    } else {
        replaceyStringo += inputToBeSplit[dumCountyButt]
    }

}

print("Your chopped up string is: "+replaceyStringo)
}