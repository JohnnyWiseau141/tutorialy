const sbeve = require('./sbeve.js')

console.log("So you think you're a cool guy, eh? Well this sure ain't Strong Bad's stick, but it's something better. A quiz to guage your coolness!")

console.log("Question numero uno: Why are you here?")
console.log("A) To win the holy grail!")
console.log("B) To learn how to cheat!")
console.log("C) To show off my fun coupons!")
console.log("D) To take a quiz for cool guys, ya fool!")

var whyAreYouHere
whyAreYouHere = sbeve.input()

if (whyAreYouHere === "a" || whyAreYouHere ==="A" ) {
    console.log("If you wanna win the holy grail go watch Monty Python or play Fate/Stay Night, ya fool!")
} else if (whyAreYouHere === "b" || whyAreYouHere ==="B") {
    console.log("Only liars and thieves eat grumble cakes! Those people go to prison. Just ask the cheat!")
} else if (whyAreYouHere === "c" || whyAreYouHere ==="C") {
    console.log("Then give me some of them, ya fool!")
} else if (whyAreYouHere === "d" || whyAreYouHere === "D" ) {
    console.log("Well you came to the right place! Just answer the rest of the questions and you'll be a cool guy, just like the four cool guys who drank four cool drinks!")
    console.log("You'll be graded for answering the questions correctly. Failure will find you explainging why to a far less... patient audience.")
    console.log("Now time for the first real question:")

    var firstRealResponse
    console.log('Complete the quote: "Ahhh fudge it! Let\'s just talk about __')
    console.log("A) X-WINGS!")
    console.log("B) DEATH STAR!")
    console.log("C) GRAND MOFF TARKIN!!")
    console.log("D) Rogue One!")
    console.log("E) Purple, all of the above")
    firstRealResponse = sbeve.input()

    if (firstRealResponse === "a" || firstRealResponse === "A") {
        console.log("X-wings? Lay off the memberberries, my pal-o.")
    } else if (firstRealResponse === "b" || firstRealResponse === "B") {
        console.log("Death Star!? That thing blew up Alderaan with Basil Oregano on it!")
    } else if (firstRealResponse === "c" || firstRealResponse === "C" ) {
        console.log("Grand Moff Tarkin is a gigantic poop bag. Goodbye.")
    } else if (firstRealResponse === "e" || firstRealResponse === "E") {
        console.log("PURPLE ISN'T EVEN A LOGICAL ANSWER YA PUNDA!")
    } else if (firstRealResponse === "d" || firstRealResponse === "D") {
        console.log("You picked the correct one! RedLetterMedia sure loves Rogue One! On to the next question.")

        console.log("More are coming. After all I am a fart that poops gold.")

    }



}