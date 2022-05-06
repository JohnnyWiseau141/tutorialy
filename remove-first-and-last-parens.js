const sbeve = require('./sbeve.js')

print("Type a string, any string, and I will chop off it's first and final characters like a madman ONLY if they are BOTH parenthesis!")

var daInput = input()

var replacedString = ""

if (daInput.length < 2) {
    print("That's not enough characters, ya fool!")
} else if (daInput[0] === "(" && daInput[daInput.length -1] === "(") { 
    for (var daCounter = 1 ; daCounter < daInput.length - 1 ; daCounter += 1 ) {
        replacedString += daInput[daCounter]
    }
} else if (daInput[0] === ")" && daInput[daInput.length -1] === ")") {
    for (var daCounter = 1 ; daCounter < daInput.length - 1 ; daCounter += 1 ) {
        replacedString += daInput[daCounter]
    }
} else if (daInput[0] === "(" && daInput[daInput.length -1] === ")") {
    for (var daCounter = 1 ; daCounter < daInput.length - 1 ; daCounter += 1 ) {
        replacedString += daInput[daCounter]
    }
} else if (daInput[0] === ")" && daInput[daInput.length -1] === "(") {
    for (var daCounter = 1 ; daCounter < daInput.length - 1 ; daCounter += 1 ) {
        replacedString += daInput[daCounter]
    }
} else {
    for (var daCounter = 0 ; daCounter < daInput.length ; daCounter += 1 ) {
        replacedString += daInput[daCounter]
    }
}

print("Your chopped up string is: "+replacedString)
