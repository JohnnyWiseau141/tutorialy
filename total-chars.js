const sbeve = require('./sbeve.js')

print("Keep typing in lines. When yousa donesa, type \"done\", or else you a fool")

var moreInput = ""
var firstInput = input()

accumulatingCount = firstInput.length


while (moreInput !== 'done') {
    accumulatingCount += moreInput.length
    moreInput = input()
}

print(accumulatingCount)
