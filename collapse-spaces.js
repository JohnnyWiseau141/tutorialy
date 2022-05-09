const sbeve = require('./sbeve.js')

print("In order to get normal space, you must sacrifice other spaces you love!")
print("Type anything and anything with multiple spaces in it will be collapsed into one space:")

var inPuttyGolf = input()
var daOutPoop = ""

for (var index = 0; index < inPuttyGolf.length; index += 1) {


    if (inPuttyGolf[index] === " "
        && daOutPoop[daOutPoop.length - 1] === " ") {
            //NOTHIIIING
        } else {

        
        daOutPoop += inPuttyGolf[index]
        }
}


print("Your collapsed spaces string: "+daOutPoop)