const sbeve = require('./sbeve.js')

print("Welcome to Index of a J. Way better than system of a down oooohhh")
print("Type something and the indices of the character \"a\" shall be revealed:")

var daInput = input()
var daOuthousePutty = ""

for (var index = 0; index < daInput.length; index += 1 ) {
    
    if (daInput[index] === "a") {
        print("Found 'a' at index: "+index)
    }

}