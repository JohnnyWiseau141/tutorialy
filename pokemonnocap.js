const sbeve = require('./sbeve.js')

console.log("Welcome to your first day of an extremely dangerous journey consisting of blackouts and animal rights violations. Your first task is to choose a pokemon you will be putting through torturous conditions. Who shall you choose, and which will be spared a fate worse than death?")

console.log("A: Bulbasaur, literally the MOST practical starter in Gen 1 because grass is strong against rock/ground and water, which are the FIRST TWO gym battles.")
console.log("B: Charmander The MOST impractical starter, but the one everyone gushes and squeals over because it breathes fire and Charizard looks like a Dragon. Ohhhhh so original.")
console.log("C: Squirtle, a relatively practical pokemon to start out with because water is strong against rock/ground, the first gym you face off against in Gen 1.")

console.log("Choose wisely, or else this program shall ridicule you to kingdom come")

var usersChoice

userFirstChoice = sbeve.input()

console.log("Whatever you chose, this message is default. Now for your choice:",userFirstChoice)

if (userFirstChoice === "a" || userFirstChoice ==="A") {
    console.log("So you chose Bulbasaur? Good choice. You now have a good type advantage against both Brock and Misty, the first two Gym leaders of the game.")
} else if ( userFirstChoice === "b" || userFirstChoice === "B") {
    console.log("You chose Charmander. Well at least he looks like a dragon but you now have a type disadvatage against Brock and Misty, the first two Gym leaders.")
} else if (userFirstChoice === "c" || userFirstChoice === "b" ) {
    console.log("You chose Squirtle. Not bad, since you got a good shot against Brock, the first Gym leader. Misty may be a challenge, however.")
} else {
    console.log("So you're not good with what's been offered? Fine then. Let's see the other options that... we gotta see")
    console.log("Here they are: Pikachu and Eevee. Which shall you choose?")
    console.log("A: Do you choose Pikachu? An electric will give you a somewhat easier time when you eventually face off against Misty.")
    console.log("B: Or do you chose Eevee, a normal type, which is an impractical choice for the beginning of the journey?")

    var userNextChoice
    userNextChoice = sbeve.input()


    if (userNextChoice ==="a" || userNextChoice === "A" ) {
        console.log("You chose Pika. A wise choice my friend. Watch out for Team Rocket.")
    } else if ( userNextChoice === "b" || userNextChoice === "B") {
        console.log("You chose Eevee. A risky move for the beginning of the game, but hopefully will pay off, depending on your future evolution.")
    } else {
        console.log("Well you just had to go and ruin it huh? Well the scram and get outta here! No self defense animal for you!")
    }

}