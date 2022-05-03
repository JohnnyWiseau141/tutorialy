const sbeve = require('./sbeve.js')

print("So you think you're a cool guy, eh? Well this sure ain't Strong Bad's stick, but it's something better. A quiz to guage your coolness!")

var offiScore = 0
var unOffiScore = 0

print("Question numero uno: Why are you here? (This question is not included with your official score)")
print("A) To win the holy grail!")
print("B) To learn how to cheat!")
print("C) To show off my fun coupons!")
print("D) To take a quiz for cool guys, ya fool!")

var whyAreYouHere
whyAreYouHere = sbeve.input()


    if (whyAreYouHere === "a" || whyAreYouHere ==="A" ) {
        console.log("If you wanna win the holy grail go watch Monty Python or play Fate/Stay Night, ya fool!")
    } else if (whyAreYouHere === "b" || whyAreYouHere ==="B") {
        console.log("Only liars and thieves eat grumble cakes! Those people go to prison. Just ask the cheat!")
    } else if (whyAreYouHere === "c" || whyAreYouHere ==="C") {
        console.log("Then give me some of them, ya fool!")
    } else if (whyAreYouHere !== "D" && whyAreYouHere !== "d") {
        print("You couldn't even answer the question with the right choice. Wowowowowowowow.")
    }
    


if (whyAreYouHere === "d" || whyAreYouHere === "D" ) {
    console.log("Well you came to the right place! Just answer the rest of the questions and you'll be a cool guy, just like the four cool guys who drank four cool drinks!")
    unOffiScore += 1
    print("")
    print("YOUR UNOFFICIAL DOPE SCORE: "+unOffiScore+"/1.")
    print("")
} else {
    print("")
    print("YOUR UNOFFICIAL SCORE: "+unOffiScore+"/1.")
    print("")
}
    console.log("You need to answer the questions correctly.")
    console.log("Failure will find you explainging why to a far less... patient audience.")
    console.log("Meaning you if you answer even one question incorrectly, you fail, and you're kicked out kinda like the RMV/DMV tests.")
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
        offiScore += 1
    } 



        console.log("More are coming. After all I am a fart that poops gold.")


        var secondOfficialResponse
        console.log('The following are for scrubs:')
        console.log("A) South Park, Rick and Morty after season 2, Postman, and literally anything after the first one.")
        console.log("B) Everything including the gamecube and Nintendo!")
        console.log("C) Opposable thumbs")
        console.log("D) Gen 1 and 2 Pokemon")
        secondOfficialResponse = sbeve.input()

        if (secondOfficialResponse === "b" || secondOfficialResponse === "B") {
            console.log("Nintendo saved the gaming industry so I guess you are wrongo!")
        } else if (secondOfficialResponse === "c" || secondOfficialResponse === "C") {
            console.log("Opposable thumbs are actually super handy and it's a big reason why humans are dope")
        } else if (secondOfficialResponse === "d" || secondOfficialResponse === "D") {
            console.log("Gen 1 and 2 may be for scrubs but it's also for not-scrubs so wrongo you are-o!")
        } else if (secondOfficialResponse === "a" || secondOfficialResponse === "A") {
            console.log("You're correct! You know your stuff!")
            offiScore += 1
        }
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
            } else if (thirdOfficialResponse === "d" || thirdOfficialResponse === "D") {
                console.log("Lake Champlain isn't even a town or city. Wrongo you are.")
            } else if (thirdOfficialResponse === "c" || thirdOfficialResponse === "C") {
                console.log("You're correct! You know your stuff!")
                offiScore += 1
            }
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
            } else if (fourthOfficialResponse === "d" || fourthOfficialResponse === "D") {
                console.log("Wrong, Bison breath! Patrick Star says hero worship is unhealthy and I concur with him. C'mon, Jeffrey.")
            } else if (fourthOfficialResponse === "b" || fourthOfficialResponse === "B") {
                console.log("You chose this over a nintendo switch subscription? You're bold, and your boldness pays off!")
                offiScore += 1
            } 
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
            } else if (fifthOfficialResponse === "c" || fifthOfficialResponse === "C") {
                console.log("Not the MCU so afraid that ain't gonna fly roung here. Wrongo ping pong answer.")
            } else if (fifthOfficialResponse === "d" || fifthOfficialResponse === "D") {
                console.log("Good answer! You win the question. Five more and you win the mile!")
                offiScore += 1
            }
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
                console.log("The bird is actually the word but this question is actually made by Europeans therefore it's not innocent of something hint hint.")
            } else if (sixthOfficialResponse === "c" || sixthOfficialResponse === "C") {
                console.log("Nop. Too bad wrong answer.")
            } else if (sixthOfficialResponse === "a" || sixthOfficialResponse === "A") {
                console.log("Righteo, Cheerio! It is indeed dumb dumb stupid white white guilt.")
                offiScore += 1
            }
                console.log("More are coming. Cross the sixth question, you have.")

                var seventhOfficialResponse
                console.log('How many times did Strong Bad kick in the face?')
                console.log("A) Infinity War")
                console.log("B) Nine times!")
                console.log("C) Throw someone out the window meme!")
                console.log("D) Schfifty five")
                seventhOfficialResponse = sbeve.input()

            if (seventhOfficialResponse === "a" || seventhOfficialResponse === "A") {
                console.log("You chose a really dope movie! Too bad it's the wrong answer. Sad!")
            } else if (seventhOfficialResponse === "c" || seventhOfficialResponse === "C") {
                console.log("Congrats your office is liable for murder. That makes you A GIGANTIC PUNDA BUBU.")
            } else if (seventhOfficialResponse === "d" || seventhOfficialResponse === "D") {
                console.log("WHAT YOU SAY?! Your iq is clearly schfifty five if you think that's a numero.")
            } else if (seventhOfficialResponse === "b" || seventhOfficialResponse === "B") {
                console.log("He can do it! He will do it 9 times.")
                offiScore += 1
            }
                console.log("More are coming. You passed the seventh question.")
                        

                var eighthOfficialResponse
                console.log('What does "Punda tah Punda" allegedly mean in english, according to Star Wars Episode I The Phantom Menace?')
                console.log("A) That little human being is out of his mind!")
                console.log("B) If a lot of people love each other, the wurld would be a better place.")
                console.log("C) If only we had a sack of potatoes!")
                console.log("D) You'll be dead guy! and... You mean buttface?!")
                eighthOfficialResponse = sbeve.input()

            if (eighthOfficialResponse === "c" || eighthOfficialResponse === "C") {
                console.log("A sack of potetoes would not aid us in any way. Wrong answer")
            } else if (eighthOfficialResponse === "b" || eighthOfficialResponse === "B") {
                console.log("Anything for my Princess. Hehehe. What a story. A wrong answer story!")
            } else if (eighthOfficialResponse === "d" || eighthOfficialResponse === "D") {
                console.log("You missed rogue one! That was at the beginning of this quiz! Wrong answer!")
            } else if (eighthOfficialResponse === "a" || eighthOfficialResponse === "A") {
                console.log("You are correct! It's exactly what the guy said in the Phantom Menace during the Pod Race!")
                offiScore += 1
            }
                console.log("More are coming.You passed the eighth.")
                        

                            var ninthOfficialResponse
                            console.log('How many times was Ferris Bueller truly absent?')
                            console.log("A) 7-11")
                            console.log("B) One hundred forty one")
                            console.log("C) Nine times")
                            console.log("D) Barrel Dragon's worth amount of times")
                            ninthOfficialResponse = sbeve.input()

                                            if (ninthOfficialResponse === "a" || ninthOfficialResponse === "A") {
                            console.log("Don't be racist. Wrong bongo dongo.")
                        } else if (ninthOfficialResponse === "b" || ninthOfficialResponse === "B") {
                            console.log("This is the greatest number to exist in the history of mankind. Even cooler than a species working themselves into extinction. Wrong answer, however.")
                        } else if (ninthOfficialResponse === "d" || ninthOfficialResponse === "D") {
                            console.log("Wow that's SUPER valuable, but the wrong answer. No points have been gained this question.")
                        } else if (ninthOfficialResponse === "c" || ninthOfficialResponse === "C") {
                            console.log("That's right! What a familiar number!")
                            offiScore += 1
                        }
                                                console.log("One more thing. Final question. Can you do it? I can do it. I can do it nine times.")
                        

                                                    var tenthOfficialResponse
                                                    console.log('Where did "dumb stupid white guilt" originate from?')
                                                    console.log("A) Doc and Mahty")
                                                    console.log("B) Rick and Morty!")
                                                    console.log("C) Cow and Chicken")
                                                    console.log("D) Homestar runner dot net. It's dot com.")
                                                    tenthOfficialResponse = sbeve.input()

                                                    if (tenthOfficialResponse === "a" || tenthOfficialResponse === "A") {
                                                        console.log("You chose a!")
                                                    } else if (tenthOfficialResponse === "d" || tenthOfficialResponse === "D") {
                                                        console.log("You chose a.")
                                                    } else if (tenthOfficialResponse === "c" || tenthOfficialResponse === "C") {
                                                        console.log("wowowowow.")
                                                    } else if (tenthOfficialResponse === "b" || tenthOfficialResponse === "B") {
                                                        console.log("You did it! You got the answer right!")
                                                        offiScore += 1
                                                    }
                                                        print("")
                                                        print("YOUR OFFICIAL SCORE: "+offiScore+"/10")
                                                        print("")
                                                        console.log("Congrats on making it to the end! You won the mile! How did what's your secret, person who is about to suddenly shout about the Cheat being a millionaire?")

                                                    

                                                        
                