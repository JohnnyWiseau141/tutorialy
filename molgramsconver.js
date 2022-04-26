//Example 1 –Calculate the mass in grams of 3.6 mol of H2SO4.
// Solution

// Look for the atomic masses of hydrogen, sulfur and oxygen.

// H = 1.008

// S = 32.06

// O = 16

// Therefore, the molecular mass of H2SO4 is

// 2(1.008) + 32.06 + 4(18) = 106.076

// Hence, one mole of H2SO4 weights 106.076 grams.

// Since you need to find for 3.60 mol of H2SO4

// = 3.60 mol x 106.076  g/mol

// = 381.87 g of H2SO4

// Example 2. 

// Convert 3 moles of carbon monoxide to grams.

// Solution

// Find the molecular weight of Carbon monoxide.

// By calculating, we get the molecular weight of CO = 28.01 g/mol

// Since we need to find for 3 moles of Carbon monoxide

// = 3 x 28.01 = 84.03 grams

const sbeve = require('./sbeve.js')

console.log("This is it boyos. The penguins of Madagascar are gonna do some science!!")
console.log("This is a toughie, boys. ")
console.log("Let's start assuming you only need to calculate the mass in grams of 'x' mol of a singular element.")

console.log("Enter the atomic mass of your singular element, please and thank you:")

var singleAtomicMass
singleAtomicMass = sbeve.inputNumber()


console.log("Now enter your mol:")
var firstTestmols
firstTestmols = sbeve.inputNumber()



console.log("This is easy. You gotta take the mol, which you entered as", firstTestmols+"mol, and multiply it by the molecular mass which you entered as", singleAtomicMass+"g/mol.")

var convertedGrams
convertedGrams = singleAtomicMass * firstTestmols 

console.log("Which gives you...",convertedGrams+"grams")

