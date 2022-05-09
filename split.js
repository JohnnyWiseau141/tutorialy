const sbeve = require('./sbeve.js')

print("Type stuff with commas in it, and then it'll get split into different lines!")

var daInput = input()

var growyStrings = ""

for (var index = 0; index < daInput.length; index += 1) {

    if (daInput[index] === ",") {
        print(growyStrings)
        growyStrings = ""
    } else {
        growyStrings += daInput[index]
    }    

    if (index === daInput.length - 1) {
        print(growyStrings)
    }
}