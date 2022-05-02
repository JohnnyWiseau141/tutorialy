const sbeve = require('./sbeve.js')

print("Type something and I will let you know what the third character is, ya foo!")

var fooTypin = input()

if (fooTypin.length < 3) {
    print("Watch what you typing, ya fool! Not even three characters. Shoulda been three")
} else {
    print("The third character is: "+fooTypin[2])
}