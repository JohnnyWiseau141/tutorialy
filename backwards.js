const sbeve = require('./sbeve.js')

console.log("Type something and it will be printed backwards! Ya foo!")


//wow this is super easy you literally just have it start from the back of the string and it increments down in the for loop


const daInputNoFiveIsAlive = input()

let daStringsLength = daInputNoFiveIsAlive.length

let newString = ""

for (let index = daStringsLength - 1; index >= 0; index-=1) {
    const element = daInputNoFiveIsAlive[index];

    newString += element
}

console.log(newString)


// var backInput = input()

// var zeroCounter = backInput.length

// backwardGrowth = ""

// while (zeroCounter > 0) {
//     backwardGrowth = backwardGrowth + backInput[zeroCounter - 1]
//     zeroCounter -= 1
// }

// print("Your backbutt string: "+backwardGrowth)