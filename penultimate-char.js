const sbeve = require('./sbeve.js')

print("Type something and I will tell you nine times! Jk Jk I'll just tell you what the second to last character is.")

var inputFace = input()

if (inputFace.length < 2) {
    print("That is too short, you'll-be-dead-guy!")
} else {
    print("The penultimate character is... " + inputFace[inputFace.length - 2 ])
}