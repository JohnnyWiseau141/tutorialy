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
    console.log("You need to answering the questions correctly.")
    console.log("Failure will find you explainging why to a far less... patient audience.")
    console.log("Meaning you fail, and you're kicked out like the RMV/DMV tests.")
    console.log("Answer them consecutively and correctly, please!")
    console.log("Now time for the first question, out of ten, for the quiz:")

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
        console.log("A) South Park, Rick and Morty after season 2, Postman, and literally anything after the first one.")
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

                console.log("More are coming. You finished the 3rd question.")

                var fourthOfficialResponse
                console.log('The world is ending. You must fill your emergency starship with food rations. What do you choose?')
                console.log("A) Cheddar fries & 3D doritos")
                console.log("B) a year's worth of groceries")
                console.log("C) a one-year nintendo switch online subscription")
                console.log("D) Danny DeVito")
                fourthOfficialResponse = sbeve.input()

            if (fourthOfficialResponse === "a" || fourthOfficialResponse === "A") {
                console.log("You are not Johnny therefore you have no need for these. No go apologize and return Johnny's Cheddar fries and 3D doritos.")
            } else if (fourthOfficialResponse === "c" || fourthOfficialResponse === "C") {
                console.log("You chose a Nintendo Switch at the end of the world? Commendable, but wrong answer.")
            } else if (fourthOfficialResponse === "D" || fourthOfficialResponse === "d") {
                console.log("Wrong, Bison breath! Patrick Star says hero worship is unhealthy and I concur with him. C'mon, Jeffrey.")
            } else if (fourthOfficialResponse === "B" || fourthOfficialResponse === "b") {
                console.log("You chose this over a nintendo switch subscription? You're bold, and your boldness pays off!")

                console.log("More are coming. You just finished the fourth question.")

                var fifthOfficialResponse
                console.log('Who do you get perfects with in Lord of the Rings the Two Towers for PS2+XBOX+GCN?')
                console.log("A) Hairy Potty")
                console.log("B) Frodo, Sam, and Gollum")
                console.log("C) The Revengers")
                console.log("D) Isildur, Aragorn, Legolas, and Gimli")
                fifthOfficialResponse = sbeve.input()

            if (fifthOfficialResponse === "a" || fifthOfficialResponse === "A") {
                console.log("This isn't Captain Underpants! Such a character does not exist. Wrongo")
            } else if (fifthOfficialResponse === "b" || fifthOfficialResponse === "B") {
                console.log("WRONG! This is the Two Towers which means they're not playable!")
            } else if (fifthOfficialResponse === "C" || fifthOfficialResponse === "c") {
                console.log("Not the MCU so afraid that ain't gonna fly roung here. Wrongo ping pong answer.")
            } else if (fifthOfficialResponse === "D" || fifthOfficialResponse === "d") {
                console.log("Good answer! You win the")

                console.log("More are coming. You've completed question five.")
                    
                var sixthOfficialResponse
                console.log('What is the bird?')
                console.log("A) Dumb stupid dumb dumb stupid white white guilt.")
                console.log("B) NOT the word.")
                console.log("C) The printer scene from The Office")
                console.log("D) Humpty Dumpty was a good source of eggs according to Billy&Mandy")
                sixthOfficialResponse = sbeve.input()

            if (sixthOfficialResponse === "d" || sixthOfficialResponse === "D") {
                console.log("Mandy is a dangerous person so afraid that is wrong. Good thing you ain't Grim.")
            } else if (sixthOfficialResponse === "b" || sixthOfficialResponse === "B") {
                console.log("You chose a.")
            } else if (sixthOfficialResponse === "c" || sixthOfficialResponse === "c") {
                console.log("wowowowow.")
            } else if (sixthOfficialResponse === "a" || sixthOfficialResponse === "A") {
                console.log("huh!")

                console.log("More are coming. After the sixth question, you have.")

                var seventhOfficialResponse
                console.log('What is the capital of my face?')
                console.log("A) your face")
                console.log("B) his face face!")
                console.log("C) poopy pie")
                console.log("D) my mom")
                seventhOfficialResponse = sbeve.input()

            if (seventhOfficialResponse === "a" || seventhOfficialResponse === "A") {
                console.log("You chose a!")
            } else if (seventhOfficialResponse === "b" || seventhOfficialResponse === "B") {
                console.log("You chose a.")
            } else if (seventhOfficialResponse === "D" || seventhOfficialResponse === "d") {
                console.log("wowowowow.")
            } else if (seventhOfficialResponse === "c" || seventhOfficialResponse === "C") {
                console.log("huh!")

                console.log("More are coming. You passed the seventh question.")
                        

                var eighthOfficialResponse
                console.log('What is the capital of my face?')
                console.log("A) your face")
                console.log("B) his face face!")
                console.log("C) poopy pie")
                console.log("D) my mom")
                eighthOfficialResponse = sbeve.input()

            if (eighthOfficialResponse === "a" || eighthOfficialResponse === "A") {
                console.log("You chose a!")
            } else if (eighthOfficialResponse === "b" || eighthOfficialResponse === "B") {
                console.log("You chose a.")
            } else if (eighthOfficialResponse === "D" || eighthOfficialResponse === "d") {
                console.log("wowowowow.")
            } else if (eighthOfficialResponse === "c" || eighthOfficialResponse === "C") {
                console.log("huh!")

                console.log("More are coming.You passed the eighth.")
                        

                            var ninthOfficialResponse
                            console.log('What is the capital of my face?')
                            console.log("A) your face")
                            console.log("B) his face face!")
                            console.log("C) poopy pie")
                            console.log("D) my mom")
                            ninthOfficialResponse = sbeve.input()

                                            if (ninthOfficialResponse === "a" || ninthOfficialResponse === "A") {
                            console.log("You chose a!")
                        } else if (ninthOfficialResponse === "b" || ninthOfficialResponse === "B") {
                            console.log("You chose a.")
                        } else if (ninthOfficialResponse === "D" || ninthOfficialResponse === "d") {
                            console.log("wowowowow.")
                        } else if (ninthOfficialResponse === "c" || ninthOfficialResponse === "C") {
                            console.log("huh!")

                                                console.log("One more thing. I can do it. I can do it nine times.")
                        

                                                    var tenthOfficialResponse
                                                    console.log('What is the capital of my face?')
                                                    console.log("A) your face")
                                                    console.log("B) his face face!")
                                                    console.log("C) poopy pie")
                                                    console.log("D) my mom")
                                                    tenthOfficialResponse = sbeve.input()

                                                    if (tenthOfficialResponse === "a" || tenthOfficialResponse === "A") {
                                                        console.log("You chose a!")
                                                    } else if (tenthOfficialResponse === "b" || tenthOfficialResponse === "B") {
                                                        console.log("You chose a.")
                                                    } else if (tenthOfficialResponse === "D" || tenthOfficialResponse === "d") {
                                                        console.log("wowowowow.")
                                                    } else if (tenthOfficialResponse === "c" || tenthOfficialResponse === "C") {
                                                        console.log("huh!")
                                                    
                                                        console.log("Congrats on making it to the end! You won the mile! How did what's your secret, person who is about to suddenly shout about the Cheat being a millionaire?")

                                                    

                                                        } 
                }   
                }
                }
            }
        }
    }
}

        }

    }

}