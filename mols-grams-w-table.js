const sbeve = require('./sbeve.js')

var elements = require('./atomic-number-array.js')

// the time has come. you gotta make it so you enter the elements and then you'll be prompted to enter the number of that element you have (for example in H2O there are 2 hydroden's so you say there's one oxygen, and 2 hydrogen's in h2o)


// lets start simple. ask how which element to choose then ask the amount of those elements, then input the number of elements, it it comes back with the calculated atomic mass

print("Which element do you wish to use?")

var daElement = input()



var isElemental =  false

for (var index = 0; index < elements.length; index+=1) {
    
    if (elements[index][0] === daElement || elements[index][2] === daElement ) {
        var daAbbreve
        
        daAbbreve = elements[index][2]

        daElement = elements[index][0]

        singleAtomMass = elements[index][1]

        if (daAbbreve.length > 1) {
            var splitFirst
            var splitSecond
            splitFirst = daAbbreve[0]
            splitSecond = daAbbreve[1]

            daAbbreve = splitFirst.toUpperCase() + splitSecond
        } else {
            daAbbreve = daAbbreve.toUpperCase()
        }

        
        print("The atomic mass of "+daElement+" is: "+singleAtomMass+" which is abbreviated as "+daAbbreve)
        isElemental = true
        break
    }
}

if (!isElemental) {
    print("You didn't type an element!")
} else {

print("Now how many of that element do you have?")

var elementalAmount = inputNumber()

var multiElementsAtomicMass = elementalAmount*singleAtomMass

if (elementalAmount > 1) {
    print("The atomic mass of "+elementalAmount+" "+daElement+"s is "+multiElementsAtomicMass)
}
print("The atomic mass of "+daElement+" is "+multiElementsAtomicMass)
}