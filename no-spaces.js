const sbeve = require('./sbeve.js')

print("Type something and I will remove the spaces CAUSE HE GOOD!")

var inPutBag = input()

strNoSpaced = ""

var dumCounter = 0

while (dumCounter < inPutBag.length ) {

    if (inPutBag[dumCounter] === " ") {
        strNoSpaced = strNoSpaced
    } else {
        strNoSpaced += inPutBag[dumCounter]
    }

    dumCounter +=  1
}

print("Your DUM poop string without spaces: "+strNoSpaced)