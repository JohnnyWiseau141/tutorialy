const sbeve = require('./sbeve.js')

console.log("How wide do you want this rectangle?")
var width

width = sbeve.inputNumber()

console.log("How tall do you want this rectangle?")

var height
height = sbeve.inputNumber()

var widthCount
widthCount = 1

var squarePiece
squarePiece = "*"

var mixDimension = ""

var singleSpace = " "
var accumulatingSpace = ""
var hollowPoint

while (widthCount <= width) {
    
    mixDimension = mixDimension + squarePiece

    widthCount = widthCount + 1

    if (widthCount > 1 && widthCount < width){

    accumulatingSpace = accumulatingSpace + singleSpace

    hollowPoint = "*"+accumulatingSpace+"*" 
    }
}

var heightCount = 1

while (heightCount <= height) {

    if (heightCount > 1 && heightCount < height) {
        
        console.log(hollowPoint)   

    } else { 
    console.log(mixDimension) 
    }
    heightCount = heightCount + 1
}