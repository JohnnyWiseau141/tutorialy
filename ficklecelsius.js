const sbeve = require('./sbeve.js')

// you need formulas on how to convert from celcius to farenheit and vice versa

// (32°F − 32) × 5/9 = 0°C is F ---> C

// (0°C × 9/5) + 32 = 32°F is C ---> F

console.log("Well well well looks like someone forgot to go over the lab homework and came to me for help")
console.log("Well then time to choose, dawg. Are you converting from Celsius to Farenheit or Farenheit to Celsius?")
console.log("Choose 'farenheit' or 'celsius'")

var startingUnit

startingUnit = sbeve.input()

while (startingUnit !== 'farenheit' && startingUnit ==! 'celsius') {
    console.log('Wrong choice ya fool! Pick your initial unit of temperature!')
    startingUnit = sbeve.input()
} 

if (startingUnit === 'farenheit') {
    console.log('Ok you chose farenheit. What is the temperature in °F?')
    var farenheitTemp
    farenheitTemp = sbeve.inputNumber()

    celsiusConversion = (farenheitTemp - 32) * 5/9 
    console.log(farenheitTemp,"°F converts to",celsiusConversion,"°C")
}