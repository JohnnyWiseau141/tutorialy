const { inputNumber } = require("./sbeve")

print("Welcome to cal-cue-lah-torr! The game that let's you mess with numbers in a super simple fashion!")
print("Only subtraction, multiplication, division, and addition with positive, single-digit numbers are allowed in this house")
print("All my homies hate exponents!")

var numeroInputo = input()

if (
    numeroInputo[1] !== "+" 
    && numeroInputo[1] !== "/"
    && numeroInputo[1] !== "-"
    && numeroInputo[1] !== "*"
    || numeroInputo.length > 3
        ) {
        print("I'm too dumb to do that!")
    } else {
    for (var index = 0; index < numeroInputo.length; index+=1) {

        var firstMaths

        var secondMaths

        var finalMaths

        var dumSymbol

        if (numeroInputo[0] === "0") {
            firstMaths = 0
            } else if (numeroInputo[0] === "1") {
                firstMaths = 1
            } else if (numeroInputo[0] === "2") {
                firstMaths = 2
            } else if (numeroInputo[0] === "3") {
                firstMaths = 3
            } else if (numeroInputo[0] === "4") {
                firstMaths = 4
            } else if (numeroInputo[0] === "5") {
                firstMaths = 5
            } else if (numeroInputo[0] === "6") {
                firstMaths = 6
            } else if (numeroInputo[0] === "7") {
                firstMaths = 7
            } else if (numeroInputo[0] === "8") {
                firstMaths = 8
            } else if (numeroInputo[0] === "9") {
                firstMaths = 9
            }  
        
        if (numeroInputo[2] === "0") {
            secondMaths = 0
        } else if (numeroInputo[0] === "1") {
            secondMaths = 1
        } else if (numeroInputo[0] === "2") {
            secondMaths = 2
        } else if (numeroInputo[0] === "3") {
            secondMaths = 3
        } else if (numeroInputo[0] === "4") {
            secondMaths = 4
        } else if (numeroInputo[0] === "5") {
            secondMaths = 5
        } else if (numeroInputo[0] === "6") {
            secondMaths = 6
        } else if (numeroInputo[0] === "7") {
            secondMaths = 7
        } else if (numeroInputo[0] === "8") {
            secondMaths = 8
        } else if (numeroInputo[0] === "9") {
            secondMaths = 9
        }               

        if (numeroInputo[1] === "+") {
            dumSymbol = numeroInputo[1]
            finalMaths = firstMaths+secondMaths
        } else if (numeroInputo[1] === "-") {
            dumSymbol = numeroInputo[1]
            finalMaths = firstMaths-secondMaths
        } else if (numeroInputo[1] === "*") {
            dumSymbol = numeroInputo[1]
            finalMaths = firstMaths*secondMaths
        } else if (numeroInputo[1] === "/") {
            dumSymbol = numeroInputo[1]
            finalMaths = firstMaths/secondMaths
        }
     
    }
    print(""+firstMaths+dumSymbol+secondMaths+" = "+finalMaths)
}
    


    

