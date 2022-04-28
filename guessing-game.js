const sbeve = require('./sbeve.js')

var winnerIsU
winnerIsU = 66

console.log("I'm thinking of a number from 1 to 100. Take a guess and I'll let you know if your guess should be higher or lower!")
guessedNumber = sbeve.inputNumber()

while (guessedNumber !== winnerIsU) {
    
    if (guessedNumber > winnerIsU) {
        console.log("Lower")

    } else if (guessedNumber < winnerIsU ) {
        console.log("Higher")

    }
    guessedNumber = sbeve.inputNumber()

}

console.log("Congratulations! You won the guessing game! How did what's your secret?")