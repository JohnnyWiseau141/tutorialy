const sbeve = require('./sbeve.js')

console.log("Welcome to your first day of child soldier recruitment and animal rights violations. Your first task to perform is to choose a pokemon you will be putting through torturous conditions. Who will you choose, and who will be spared a fate worse than death?")

console.log("A: Bulbasaur, literally the MOST practical starter in Gen 1 because grass is strong against rock/ground and water, which are the FIRST TWO gym battles.")
console.log("B: Charmander The MOST impractical starter, but the one everyone gushes and squeals over because it breathes fire and Charizard looks like a Dragon. Ohhhhh so original.")
console.log("C: Squirtle, a relatively practical pokemon to start out with because water is strong against rock/ground, the first gym you face off against in Gen 1.")

console.log("Choose wisely, or else the console log will ridicule you to kingdom come")

var yourChoice

yourChoice = sbeve.input()

if (yourChoice !== "a" && yourChoice !== "b" && yourChoice !== "c") {
    console.log("What are you too good for the starting three? Fine then, no practical choices for you. You'll be starting out with a normal type, or an electric type, which will make beating Brock an absolute nightmare, ya fool!")
    console.log("A: Do you choose Pikachu, the only practical choice of the two because at least electric will give you a somewhat easier time when you eventually face off against Misty.")
    console.log("B: Or do you chose Eevee, a normal type, which is LITERALLY the MOST impractical choice to choose, even more inpractical than Charmander, and Charmander doesn't even have any hope to be useful against Misty or Brock")

    var secondChoice
    secondChoice = sbeve.input()

    if (secondChoice !== "a" && secondChoice !== "b") {
        console.log("All right you Chungus, no animal servant for you. You're kicked out of the Child soldier program. Good luck repelling all those ticks from the tall grass.")
    } else {
        if (secondChoice === "a") {
            console.log("Ok you decided to go with the yellow version route. Nbd. Brock will be challenging and Misty will be challenging too even with an electric type, but it's certainly gonna be easier than going up against Misty with a fire type. Also since you're in the yellow version route Team Rocket is gonna ambush you at the end of Mt. Moon. Good luck!")
        }
        if (secondChoice === "b") {
            console.log("You chose Eevee. Omg you chose a NORMAL type. A bloody NORMAL type pokemon. What are you gonna do, headbutt the ticks in the tall grass? Unless you plan on teaching your Eevee hyper beam at the beginning of the game. You're gonna have a bad time. Also this isn't the Yellow version route anymore. You're the rival of Yellow. That's right. You're Gary now. Ash is a loser.")
        }
    }
} else {
    if (yourChoice === "a") {
        console.log("You choose the grass/poison type. It's about time somebody FINALLY picked Bulbasaur. Congrats on making the most practical choice in the face of total absolute social ridicule because people love hating on Bulbasaur for no good reason. What a bunch of Chungi.")
    }

    if (yourChoice === "b") {
        console.log("You chose a fire type. Wow you are a total conformist who gave into social pressure and loves to stick with the trend. Have fun repelling ticks from the tall grass by setting yourself on fire. Good luck against the first two gym leaders that use pokemon that are RESISTANT to fire. Chungi.")
    }
    if (yourChoice === "c") {
        console.log("Squirtle is pretty cool. He was my first pick too back in the day. Misty will be a challenge but at least you'll be able to breeze through Brock no problem. Good luck drenching yourself in water to repel ticks from the tall grass.")
    }
}

