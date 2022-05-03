const sbeve = require('./sbeve.js')

print("Coontinue typing in line after line FOREVER, until you type in done. Then this SUPER AWESOME JAVESCRIPT PROGRAM will count the amount of lines you typed in total (not including the final \"done\")")

var done
var countyPoopy = 0
var inPutty

done = "nope"

while (done === "nope") {
    inPutty = input()
    if (inPutty === "done") {
        done = "yup"
    } else {
        countyPoopy  += 1

    }
}

print("You typed a total of "+countyPoopy+" lines!")