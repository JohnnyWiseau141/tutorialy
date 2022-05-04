const sbeve = require('./sbeve.js')

print("Type something and I will remove the spaces CAUSE HE GOOD!")
print("But if you don't include spaces you will not be good.")

var inPutBag = input()

var strNoSpaced = ""

var spaceChecker = 0

var loopBreak = spaceChecker

while (loopBreak <= inPutBag.length) {
    if (inPutBag[spaceChecker] !== " ") {
        spaceChecker += 1
        loopBreak += 1
    } else {
        loopBreak = inPutBag.length + 1
    }
}

if (spaceChecker > inPutBag.length) {
    print("You shoulda typed in some space ya fool!")
} else {

    for (var dumCounter = 0; dumCounter < inPutBag.length; dumCounter +=1) {
        if (inPutBag[dumCounter] === " ") {
            //this side left blank intentially
        } else {
            strNoSpaced += inPutBag[dumCounter]
        }
    }
    print("Your DUM poop string without spaces: "+strNoSpaced)
}