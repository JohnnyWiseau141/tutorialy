const sbeve = require('./sbeve.js')

print("Welcome to the FIRST Index of a J. Way better than first system of a down concert.")
print("Type something and the first index of the character \"a\" shall be revealed and only that index:")

var daInput = input()

var isThereA = false

for (var index = 0; index < daInput.length; index += 1 ) {
    
    if (daInput[index] === "a") {
        isThereA = true
        print("Found 'a' at index: "+index)
        break
        // the next line is what i'd do if i can't use break
        // --> index = daInput.length + 1
    }

}

if (!isThereA) {
    print("You didn't type 'a' ya fool!")
}