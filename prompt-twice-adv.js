//make sure it prompts for your name then makes a greeting... TWICE!

// OOPS I FORGOT TO INCLUDE INPUT AS PART OF THE FUNCTION OH NOOOOOOOOOOOOOOOOOOO

const sbeve = require('./sbeve.js')


var trackyCounter = 1

var dumName

function suchGreeting() {

    print("Enter your name!")
    dumName = input()
    
    if (trackyCounter > 1 && dumName !== secondInput ) {
        print("You didn't use the same nombre, hombre!")
    } else {
       print("Hello there, "+dumName+"!") 
    }
    secondInput = dumName
    trackyCounter += 1
}


suchGreeting()

suchGreeting()