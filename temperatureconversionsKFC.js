const sbeve = require('./sbeve.js')

console.log("Enter a Unit of temperature from Kelvin, Fahrenheit, or Celsius:")

var userChosenTemp
userChosenTemp = sbeve.input()

userChosenTemp = userChosenTemp.toLowerCase()

if (userChosenTemp !== "kelvin" && userChosenTemp !== "fahrenheit" && userChosenTemp !== "celsius" ) {
    console.log("This isn't the unit you're looking for. Move along")
} else {
    
    //these are the conditionals when the user chooses "Kelvin"
    if (userChosenTemp === "kelvin") {
        console.log("You chose Kelvin. Now choose which unit you would like to convert to (Celsius or Fahrenheit):")
        var usersKelConvertUnit
        usersKelConvertUnit = sbeve.input()
        usersKelConvertUnit = usersKelConvertUnit.toLowerCase()
        
        
        if (usersKelConvertUnit !== "celsius" && usersKelConvertUnit !== "fahrenheit") {
            console.log("This is a bruh moment. Goodbye.")
        } else {
            
            //the conditionals to convert from kelvin to celsius
            if (usersKelConvertUnit === "celsius") {
                console.log("You chose to convert to °C. Please type the temperature in °K:")
                var kelvinTemp
                kelvinTemp = sbeve.inputNumber()

                var celTemp

                celTemp = kelvinTemp - 273.15

                console.log(kelvinTemp+"°K converts to", celTemp+"°C" )

            }

            if (usersKelConvertUnit === "fahrenheit") {

            }

        }


    }

    if (userChosenTemp === "fahrenheit") {
        console.log("You chose Fahrenheit. Input the temperature please:")
        var usersFahr
        usersFahr = sbeve.inputNumber()
    }

}