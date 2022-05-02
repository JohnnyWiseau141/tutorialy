const sbeve = require('./sbeve.js')

print("Keep typing in lines. When yousa donesa, type \"done\", or else you a fool")
print("Your total amount of characters typed will be shown, excluding when you type \"done\"")

var moreInput = ""
var firstInput = input()

accumulatingCount = firstInput.length


while (moreInput !== 'done') {
    accumulatingCount += moreInput.length
    moreInput = input()
}

print("You typed "+accumulatingCount+" characters in total!")
