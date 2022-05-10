const sbeve = require('./sbeve.js')

print("Type something and da butcher is gonna keep the first 10 pieces of chop off the rest of the characters. Crazy person.")

var inputUrFace = input()

var dumNewString = ""


if (inputUrFace.length < 10 ) {
    print("That's not enugg ya fool!")
} else {

    for (var index = 0; index < inputUrFace.length; index += 1) {
        dumNewString += inputUrFace[index]
        if (index === 9) {
            break
        }
    }
    
    print("Your butchered string: "+dumNewString)
}

