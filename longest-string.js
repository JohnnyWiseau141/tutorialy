const sbeve = require('./sbeve.js')

print("Continue typing in different lines again and again and FOREVER until you type \"done\"")
print("I will tell you which string is the longest cause he good (not including \"done\")")

var moreInput
var biggestLength = ""

var done = "nop"

while (done === "nop") {
    moreInput = input()
    if (moreInput === 'done') {
        done = "yes"
    } else if (biggestLength.length < moreInput.length) {
        biggestLength = moreInput
    }
}

console.log("You longest string was "+biggestLength)