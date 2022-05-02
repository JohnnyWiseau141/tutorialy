const sbeve = require('./sbeve.js')

print("Continue typing in different lines again and again and FOREVER until you type \"done\"")
print("I will tell you which string is the longest cause he good (not including \"done\")")

var moreInput
var biggestLength = ""

var done = "nop"

while (done === "nop") {
    moreInput = input()
    if (moreInput === 'done') {
        done = "yes"
    } else if (biggestLength.length < moreInput.length) {
        biggestLength = moreInput
    }
}

console.log("You longest string was "+biggestLength)



// if (firstInput === 'done') {
//     print("You didn't type anything!")
// } else {

    
//     while (moreInput !== 'done') {
//         whileCounter += 1
//         if (moreInput.length >= biggestLength.length) {
//             biggestLength = moreInput
//         }
        
//         moreInput = input()
        
//     }

//     if (whileCounter < 2 ) {
//     print("Your biggest length was "+firstInput+"!")
//     } else {
//         print("Your biggest length was "+biggestLength+"!")
//     }
// }