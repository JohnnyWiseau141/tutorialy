const sbeve = require('./sbeve.js')

print("Type something and numbers shall be converted to their 'string' form.")
print("eg, 123 ====> onetwothree")
print("9 times =====> nine times")

var inputThingy = input()

var daFinalStringy = ""


for (var index = 0; index < inputThingy.length; index += 1) {
    if ( inputThingy[index] === "0" ) {
        daFinalStringy += "zero"
    } else if ( inputThingy[index] === "1" ) {
        daFinalStringy += "one"
    } else if ( inputThingy[index] === "2" ) {
        daFinalStringy += "two"
    } else if ( inputThingy[index] === "3" ) {
        daFinalStringy += "three"
    } else if ( inputThingy[index] === "4" ) {
        daFinalStringy += "four"
    } else if ( inputThingy[index] === "5" ) {
        daFinalStringy += "five"
    } else if ( inputThingy[index] === "6" ) {
        daFinalStringy += "six"
    } else if ( inputThingy[index] === "7" ) {
        daFinalStringy += "seven"
    } else if ( inputThingy[index] === "8" ) {
        daFinalStringy += "eight"
    } else if ( inputThingy[index] === "9" ) {
        daFinalStringy += "nine"
    } else {
        daFinalStringy += inputThingy[index]
    }
}

print("Your numeros super duper fraccion string: "+daFinalStringy)