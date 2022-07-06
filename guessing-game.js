const sbeve = require('./sbeve.js')



console.log("I'm thinking of a number from 1 to 100. Take a guess and I'll let you know if your guess should be higher or lower!")
let guessedNumber = sbeve.inputNumber()
daCounter = 0

for (let daAnswer = 66; guessedNumber !== daAnswer; daCounter++) {

    if (guessedNumber > daAnswer) {
                console.log("Lower")
            } else if (guessedNumber < daAnswer ) {
                console.log("Higher")
            }
    guessedNumber = sbeve.inputNumber()
}

console.log("Congratulations! You won the guessing game! How did what's your secret?")

// var winnerIsU
// winnerIsU = 66

// while (guessedNumber !== winnerIsU) {
    
//     if (guessedNumber > winnerIsU) {
//         console.log("Lower")

//     } else if (guessedNumber < winnerIsU ) {
//         console.log("Higher")

//     }
//     guessedNumber = sbeve.inputNumber()

// }

// console.log("Congratulations! You won the guessing game! How did what's your secret?")