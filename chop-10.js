const sbeve = require('./sbeve.js')

print("Type something and da butcher over there is gonna chop off the first 10 pieces of whatever you chop. Crazy person.")

var inputUrFace = input()

var dumNewString = ""

var outputUrFace

if (inputUrFace.length < 10 ) {
    print("That's not enugg ya fool!")
} else if ( inputUrFace.length === 10 ) {
    print("Now your string is exactly empty! Look what you do, ya fool!")
} else {

    for (var index = 10; index < inputUrFace.length; index += 1) {
        dumNewString += inputUrFace[index]
    }
    
    print("Your butchered string: "+dumNewString)
}

