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
    console.log('Complete the quote: "Ahhh fudge it! Let\'s just talk about _"')
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


        var secondOfficialResponse
        console.log('The following are for scrubs:')
        console.log("A) South Park, Rick and Morty after season 3, Postman, and literally anything after the first one.")
        console.log("B) Everything including the gamecube and Nintendo!")
        console.log("C) Opposable thumbs")
        console.log("D) Gen 1 and 2 Pokemon")
                secondOfficialResponse = sbeve.input()

        if (secondOfficialResponse === "b" || secondOfficialResponse === "b") {
            console.log("Nintendo saved the gaming industry so I guess you are wrongo!")
        } else if (secondOfficialResponse === "c" || secondOfficialResponse === "C") {
            console.log("Opposable thumbs are actually super handy and it's a big reason why humans are dope")
        } else if (secondOfficialResponse === "d" || secondOfficialResponse === "D") {
            console.log("Gen 1 and 2 may be for scrubs but it's also for not-scrubs so wrongo you are-o!")
        } else if (secondOfficialResponse === "a" || secondOfficialResponse === "A") {
            console.log("You're correct! You know your stuff!")

            console.log("More are coming. After all I am a quiz that is capable of counting beyond three.")

            var thirdOfficialResponse
            console.log('What is the capital of Vermont?')
            console.log("A) Madagascar")
            console.log("B) Your face!")
            console.log("C) Montpelier")
            console.log("D) Lake Champlain")
            thirdOfficialResponse = sbeve.input()

        if (thirdOfficialResponse === "a" || thirdOfficialResponse === "A") {
            console.log("Kowalski! This person thinks the Penguins of Madagascar are gonna be here. Wrong answer!")
        } else if (thirdOfficialResponse === "b" || thirdOfficialResponse === "B") {
            console.log("My face has no such relation to the USA state of Vermont, I can guarantee.")
        } else if (thirdOfficialResponse === "D" || thirdOfficialResponse === "d") {
            console.log("Lake Champlain isn't even a town or city. Wrongo you are.")
        } else if (thirdOfficialResponse === "c" || thirdOfficialResponse === "C") {
            console.log("You're correct! You know your stuff!")

            console.log("More are coming. After all I am a quiz that is capable of counting beyond three.")
        }
        }


        
    }
}