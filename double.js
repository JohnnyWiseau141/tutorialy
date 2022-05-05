const sbeve = require('./sbeve.js')

print("Type something in and I'll double each character!")

var inputInHell = input()

var countey = 0

var replaceDaStringyDingy = ""

for (var countey = 0 ;countey < inputInHell.length; countey += 1 ) {


    replaceDaStringyDingy += inputInHell[countey]+inputInHell[countey]
    

    
}

print("Your \"doubled\" string is: "+replaceDaStringyDingy)