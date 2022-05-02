const sbeve = require('./sbeve.js')

print("Type something and I'll let you know if it exceeds 10 characters:")

var something
something = input()

if (something.length > 10) {
    print("You typed more than 10 characters!")
}  else if (something.length < 10) {
    print("You typed less than 10 characters!")
} else {
    print("You typed exactly 10 characters!")
}