const sbeve = require('./sbeve.js')

var winnerIsU


console.log("Pick a number from 1 to 100 and then player 2 must guess it.")
winnerIsU = sbeve.inputNumber()

while (winnerIsU < 1 || winnerIsU > 100) {
    console.log("You need to guess a number between 1 and 100, ya foo!")
    winnerIsU = sbeve.inputNumber()
}

console.log("Time to clear the space so nobody CHEATS that way. Press enter.")


sbeve.input()

var superSpace = 1
while (superSpace < 100){
    console.log(" ")
    
    superSpace = superSpace + 1
}

console.log("Now guess a number from 1 to 100! I will tell you if your guess should be higher or lower.")
guessedNumber = sbeve.inputNumber()

while (guessedNumber !== winnerIsU) {
    
    if (guessedNumber > winnerIsU) {
        console.log("Lower")

    } else if (guessedNumber < winnerIsU ) {
        console.log("Higher")

    } else {
        console.log("That isn't it!")
    }
    guessedNumber = sbeve.inputNumber()

}

console.log("Congratulations! You won the guessing game! How did what's your secret?")