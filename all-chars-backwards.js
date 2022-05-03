const sbeve = require('./sbeve.js')

print("Type ANYTHING EVER MADE and I will print the characters with personal lines, but BACKWARDS! OOOOHHHHHHHHH")

var anythingEverMade = input()

var countula = anythingEverMade.length - 1


while (countula > -1) {

    print("Character #"+countula+": "+anythingEverMade[countula])
    countula -= 1
}
