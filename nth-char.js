const sbeve = require('./sbeve.js')

print("Type a string, any string, just type a string!")

var daStringo = input()
var daNumero

print("Now type a numero, dood-o, and you shall be given the magical character located at that index of da chosen string!")

daNumero = inputNumber()

if (daNumero >= daStringo.length || daNumero < 0 ) {
    print("That index don't exist in a string like the one you chose, ya fool!")
} else {
    print("The super coolio character at index "+daNumero+" is: "+daStringo[daNumero])
}
