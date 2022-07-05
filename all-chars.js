const sbeve = require('./sbeve.js')

print("Type ANYTHING EVER MADE and I will print each character on IT'S VERY OWN PRIVATE LINE!")

const anythingEverMade = input()

let stringLength = anythingEverMade.length

// note:            variable = variable + 1
// IS EQUAL TO              ===
///                     variable += 1

for (let countula = 0; countula < stringLength; countula+=1) {
    const element = anythingEverMade[countula];

    console.log(element)
    
}
