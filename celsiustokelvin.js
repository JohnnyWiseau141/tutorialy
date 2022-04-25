const sbeve = require('./sbeve.js')
console.log("Enter a temperature in °C")

var tempC
tempC = sbeve.inputNumber()

var tempK

tempK = tempC + 273.15

if (tempK === 273.15 ) {
    console.log(tempK, "that's the freezing/melting point of water!")
}

if (tempK === 294.15) {
    console.log(tempK, "that's room temperature!")
}

console.log("You converted from", tempC+"°C to", tempK+"°K")