const sbeve = require('./sbeve.js')

console.log("Enter a Unit of temperature (Kelvin, Fahrenheit, or Celsius):")

var userChosenTemp
userChosenTemp = sbeve.input()

userChosenTemp = userChosenTemp.toLowerCase()

if (userChosenTemp !== "kelvin" && userChosenTemp !== "fahrenheit" && userChosenTemp !== "celsius" 
    && userChosenTemp !== "k" && userChosenTemp !== "f" && userChosenTemp !== "c" ) {
    console.log("This isn't the unit you're looking for. Move along")
    } else {
        
        //these are the conditionals when the user chooses "Kelvin"
        if (userChosenTemp === "kelvin" || userChosenTemp === "k") {
            console.log("You chose Kelvin. Now choose which unit you would like to convert to (Celsius or Fahrenheit):")
            var usersKelConvertUnit
            usersKelConvertUnit = sbeve.input()
            usersKelConvertUnit = usersKelConvertUnit.toLowerCase()
            
            
            if (usersKelConvertUnit !== "celsius" && usersKelConvertUnit !== "fahrenheit" && 
                usersKelConvertUnit !== "c" && usersKelConvertUnit !== "f") {
                console.log("This is a bruh moment. Goodbye.")
            } else {
                
                //the conditional to convert from kelvin to celsius
                if (usersKelConvertUnit === "celsius" || usersKelConvertUnit === "c") {
                    console.log("You chose to convert to °C. Please type the temperature in °K:")
                    var kelvinTemp
                    kelvinTemp = sbeve.inputNumber()

                    var celTemp

                    celTemp = kelvinTemp - 273.15

                    console.log(kelvinTemp+"°K converts to", celTemp+"°C" )

                }
                //condiotional top convert from kelvin to fahrenheit
                if (usersKelConvertUnit === "fahrenheit" || usersKelConvertUnit === "f") {
                    console.log("You chose to convert to °F. Please type the temperature in °K:")
                    var kelvinTemp
                    kelvinTemp = sbeve.inputNumber()

                    var fahrTemp

                    fahrTemp = (kelvinTemp - 273.15) * 9/5 + 32

                    console.log(kelvinTemp+"°K converts to", fahrTemp+"°F")
                }

            }


        }

        //conditionals if the user chooses fahrenheit
        if (userChosenTemp === "fahrenheit" || userChosenTemp === "f") {
            console.log("You chose Fahrenheit. Now choose which unit you would like to convert to (Celsius or Kelvin):")
            var usersFahrConvertUnit
            usersFahrConvertUnit = sbeve.input()
            usersFahrConvertUnit = usersFahrConvertUnit.toLowerCase()
            
            
            if (usersFahrConvertUnit !== "celsius" && usersFahrConvertUnit !== "kelvin" && 
                usersFahrConvertUnit !== "c" && usersFahrConvertUnit !== "k") {
                console.log("This is a bruh moment. Goodbye.")
            } else {
                
                //the conditional to convert from fahrenheit to celsius
                if (usersFahrConvertUnit === "celsius" || usersFahrConvertUnit === "c") {
                    console.log("You chose to convert to °C. Please type the temperature in °F:")
                    var fahrTemp
                    fahrTemp = sbeve.inputNumber()

                    var celTemp

                    celTemp = (fahrTemp  - 32) * 5/9

                    console.log(fahrTemp+"°F converts to", celTemp+"°C" )

                }
                //conditional to convert from fahrenheit to kelvin
                if (usersFahrConvertUnit === "kelvin" || usersFahrConvertUnit === "k") {
                    console.log("You chose to convert to °K. Please type the temperature in °F:")
                    var fahrTemp
                    fahrTemp = sbeve.inputNumber()

                    var kelvinTemp

                    kelvinTemp = 5/9 * (fahrTemp + 459.67)

                    console.log(fahrTemp+"°F converts to", kelvinTemp+"°C")
                }

            }

        }

        //conditionals if the user chooses celsius
        if (userChosenTemp === "celsius" || userChosenTemp === "c" ) {
            console.log("You chose Celsius. Now chose which unit you would like to convert to (Fahrenheit or Kelvin):")
            var usersCel
            usersCelConvertUnit = sbeve.input()
            usersCelConvertUnit = usersCelConvertUnit.toLowerCase()
            
            
            if (usersCelConvertUnit !== "fahrenheit" && usersCelConvertUnit !== "kelvin" && 
                usersCelConvertUnit !== "f" && usersCelConvertUnit !== "k") {
                console.log("This is a bruh moment. Goodbye.")
            } else {
                
                //the conditional to convert from celsius to fahrenheit
                if (usersCelConvertUnit === "fahrenheit" || usersCelConvertUnit === "f") {
                    console.log("You chose to convert to °F. Please type the temperature in °C:")
                    var celTemp
                    celTemp = sbeve.inputNumber()

                    var fahrTemp

                    fahrTemp = (celTemp * 9/5) + 32

                    console.log(celTemp+"°F converts to", fahrTemp+"°C" )

                }
                //conditional to convert from celsius to kelvin
                if (usersCelConvertUnit === "kelvin" || usersCelConvertUnit === "k") {
                    console.log("You chose to convert to °K. Please type the temperature in °C:")
                    var celTemp
                    celTemp = sbeve.inputNumber()

                    var kelvinTemp

                    kelvinTemp = celTemp + 273.15

                    console.log(celTemp+"°C converts to", kelvinTemp+"°K")
                }
        }

    }
}