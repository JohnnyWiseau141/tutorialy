const sbeve = require('./sbeve.js')

print("Type a string, any string, and I will shove commas in between each character, like a comma-man!")

var daInputtingGolfClown = input()

var replacedString = ""


    for (var daCounter = 0 ; daCounter < daInputtingGolfClown.length ; daCounter += 1 ) {


        if (daCounter === daInputtingGolfClown.length - 1 ) {
            replacedString += daInputtingGolfClown[daCounter]
        } else {
            replacedString += daInputtingGolfClown[daCounter]+","
        }
    }

print("Your string is: "+replacedString)