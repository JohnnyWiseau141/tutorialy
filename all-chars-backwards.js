const sbeve = require('./sbeve.js')

print("Type ANYTHING EVER MADE and I will print the characters on their own personal lines, but BACKWARDS! OOOOHHHHHHHHH")


var daInput = input()

for (let index = daInput.length - 1; index >= 0; index-=1) {
    let element = daInput[index];
    
    console.log(element)

}

