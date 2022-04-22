const sbeve = require('./sbeve.js')

// you need formulas on how to convert from celcius to fahrenheit and vice versa

// (32°F − 32) × 5/9 = 0°C is F ---> C

// (0°C × 9/5) + 32 = 32°F is C ---> F

console.log("Well well well looks like someone forgot to go over the lab homework and came to me for help")
console.log("Well then time to choose, dawg. Are you converting from celsius to fahrenheit or fahrenheit to celsius?")
console.log("Choose 'fahrenheit' or 'celsius'")

var startingUnit

startingUnit = sbeve.input()

while (startingUnit !== 'fahrenheit' && startingUnit !== 'celsius') {
    console.log('Wrong choice ya fool! Pick your initial unit of temperature!')
    var startingUnit = sbeve.input()
} 

if (startingUnit === 'fahrenheit') {
    console.log('Ok you chose fahrenheit. What is the temperature in °F?')
    var fahrenheitTemp
    fahrenheitTemp = sbeve.inputNumber()

    celsiusConversion = (fahrenheitTemp - 32) * 5/9 
    console.log(fahrenheitTemp,"°F converts to",celsiusConversion,"°C")
}