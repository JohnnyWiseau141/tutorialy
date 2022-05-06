const sbeve = require('./sbeve.js')

print("Type something and I'll put a SUPER COOL comma before INDIVIDUAL space cause specifying is super duper important!")
print('eg: "hello there ponda" => "hello, there, ponda"')

var inputFartBag = input()
var daOutputPoopy = ''


for (var index = 0; index < inputFartBag.length; index = index + 1) {
    
    if (inputFartBag[index] === " ") {
        daOutputPoopy = daOutputPoopy+","+inputFartBag[index]
    } else {
        daOutputPoopy = daOutputPoopy + inputFartBag[index]
    }
}

print('Your string with commas before EACH space character: ' + daOutputPoopy)