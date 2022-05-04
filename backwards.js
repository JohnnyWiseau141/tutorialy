const sbeve = require('./sbeve.js')

print("Type something and it will be printed backwards! Ya foo!")

var backInput = input()

var zeroCounter = backInput.length

backwardGrowth = ""

while (zeroCounter > 0) {
    backwardGrowth = backwardGrowth + backInput[zeroCounter - 1]
    zeroCounter -= 1
}

print("Your backbutt string: "+backwardGrowth)