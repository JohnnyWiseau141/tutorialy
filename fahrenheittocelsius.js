const sbeve = require('./sbeve.js')

console.log('Welcome to the Fahrenheit to Celsius conversion program. Please provide a temperature in °F:')
    var fahrenheitTemp
    fahrenheitTemp = sbeve.inputNumber()

    celsiusConversion = (fahrenheitTemp - 32) * 5/9 
    console.log(fahrenheitTemp+"°F converts to",celsiusConversion+"°C")