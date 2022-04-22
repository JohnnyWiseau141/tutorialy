const sbeve = require('./sbeve.js')

console.log("Welcome to the celsius to fahrenheit conversion program. Please enter the temperature in °C:")
var celsiusTemp = sbeve.inputNumber()

fahrenheitConversion = (celsiusTemp * 9/5) + 32

console.log(celsiusTemp+"°C converts to", fahrenheitConversion+"°F" )