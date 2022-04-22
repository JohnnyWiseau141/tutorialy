const sbeve = require('./sbeve.js')

console.log("Enter a derogatory noun:")
var deroNoun = sbeve.input()

console.log("Enter a title of someone in a position of power:")
var powerTitle = sbeve.input()

console.log("Enter a heavily disliked politician or celebrity:")
var dislikedFigure = sbeve.input()

console.log("Enter a present participle verb:")
var presentParticVerb = sbeve.input()

console.log("Enter a worker type of a highly respected profession:")
var respectedProfession = sbeve.input()

console.log("Enter a different worker type of a different position:")
var helpingWorker = sbeve.input()

console.log("Enter a famous company:")
var company = sbeve.input()

console.log("Enter an adjective followed by a noun:")
var adjNoun = sbeve.input()


console.log("Pablo was a", deroNoun, "He decided to walk into a hotel and disprove the stereotypes perpetuated by the owner-- the so-called", powerTitle, dislikedFigure+".")

console.log("As soon as Pablo stormed into the", powerTitle+"'s office,", dislikedFigure, "started", presentParticVerb, "right on Pablo's face! Fortunately for Pablo a", respectedProfession, "saw the whole thing, and contacted a", helpingWorker+". A smear campaign was then launched by the", company, "and", powerTitle, dislikedFigure, "lost his beloved hotel all thanks to his", adjNoun+".")

if (dislikedFigure === "Trump") {
  console.log("Congratulations! You guessed the true villain of the story and won the mile! How did what's your secret?!")
  var yourSecret = sbeve.input()

  if (yourSecret === "The Cheat") {
  console.log(yourSecret, "is a millionaire! A parade for", yourSecret,"!")
  } else {
  console.log("Eh that secret is ok I guess.")
  } 
}
