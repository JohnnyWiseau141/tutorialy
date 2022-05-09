const sbeve = require('./sbeve.js')

print("Welcome to Index of a Johnny. Way better than system of a down oooohhh")
print("Type something and the indices of the character \"a\" shall be revealed:")

var daInput = input()

var isThereA = false

for (var index = 0; index < daInput.length; index += 1 ) {
    
    if (daInput[index] === "a") {
        isThereA = true
        print("Found 'a' at index: "+index)
    }

}

