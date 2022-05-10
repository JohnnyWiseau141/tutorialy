const sbeve = require('./sbeve.js')

print("Type something and only every other character will be printed.")

var inputty = input()

var newStringey = ""


for (var index = 0; index < inputty.length; index += 1) {
    if (index % 2 !== 0 ) {
        //nothing
    } else {
        newStringey += inputty[index]
    }
}

print(newStringey)