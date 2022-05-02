const sbeve = require('./sbeve.js')

print("Type something and I will tell you what the first character is!")


var pundaBubuInput = input()

if (pundaBubuInput === "") {
    print("You're a ponda that won't work!")
} else {
    print("The first character is "+pundaBubuInput[0])
}