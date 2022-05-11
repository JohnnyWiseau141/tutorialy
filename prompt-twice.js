//make sure it prompts for your name then makes a greeting... TWICE!

const sbeve = require('./sbeve.js')

print("Tell me your name or the FBI is gonna show up! FBI OPEN UP!")

dumName = input()

function suchGreeting() {
    print("Hello there, "+dumName+"! The FBI is waiting for you!")
}

suchGreeting()

print("Tell me your name or the FBI is gonna show up! FBI OPEN UP!")

dumName = input()


suchGreeting()