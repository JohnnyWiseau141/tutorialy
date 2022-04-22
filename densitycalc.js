const sbeve = require('./sbeve.js')

// the following program is designed to be used in the lab, to allow the user to calculate the mass needed to acquire the desired density

// or it can be used to calculate the density of a solution based on it's mass and volume



// remember density = g/ml

// d * v = mass

console.log("Hello there! Are you trying to calculate the density of a solution, or the mass needed to acquire a desired density?")

console.log("Please enter 'density' for the g/mL = dens. formula, or 'mass' for the d*v=mass formula ")
var chosenFormula = sbeve.input()

if (chosenFormula !== "density" && chosenFormula !== "mass") {
  console.log("WATCH WHAT YOU'RE TYPING YA FOO!")
}

if (chosenFormula === "density") {
  console.log("You have chosen to calculate for the unknown density of a solution. Please enter the mass (in grams):")
  var massGML = sbeve.inputNumber()
  console.log("Now enter the volume (in mL):")
  var volGML = sbeve.inputNumber()

  var density

  density = massGML/volGML

  console.log("Your calculated density is", density, "g/mL")
}

if (chosenFormula === "mass") {
  console.log("You have chosen to calculate the mass needed for a desired density. Please enter the desired density (in g/mL):")
  var densityDVMass = sbeve.inputNumber()
  console.log("Please enter the volume (in mL):")
  var volDVMass = sbeve.inputNumber()

  var massDVM

  massDVM = densityDVMass * volDVMass

  console.log("The mass you need is", massDVM, "grams.")
}

