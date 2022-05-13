const sbeve = require('./sbeve.js')

var elements = [
    ['hydrogen', 1.0078, 'h' ],
    ['oxygen', 15.999, 'o',]
    ['carbon', 12.009, 'c'],
    ['nitrogen', 14.004, 'n'],
]



// user inputs an element, and the program prints index of that element

// yell at user if they don't put in the element

print("Enter Hydrogen, Oxygen, or Carbon:")

var elementalInput = input()


var isElemental =  false

for (var index = 0; index < elements.length; index+=1) {
    
    if (elements[index][0] === elementalInput || elements[index][2] === elementalInput ) {
        print("The mass of "+elements[index][0]+" is: "+elements[index][1])
        isElemental = true
        break
    }
}

if (!isElemental) {
    print("You didn't type an element!")
}