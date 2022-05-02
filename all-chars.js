const sbeve = require('./sbeve.js')

print("Type ANYTHING EVER MADE and I will print each character on IT'S VERY OWN PRIVATE LINE!")

var anythingEverMade = input()

var countula = 0

// note:            variable = variable + 1
// IS EQUAL TO              ===
///                     variable += 1

while (countula < anythingEverMade.length) {

    print("Character #"+countula+": "+anythingEverMade[countula])
    countula += 1
}
