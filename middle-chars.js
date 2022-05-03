const { input } = require("./sbeve")

print("Type a thing, ya foo!")
print("If it has an odd number of STAHF, then you shall know what the exact middle character is!")
print("eg: Sbeve -> e")
print("If the string has an even number of characters, both of the middle characters shall be revealed to you!")
print("eg: John -> oh")

var daInPutty

daInPutty = input()

if (daInPutty === "") {
    print("Watch what ya typin, ya foo!")
} else {

    if (daInPutty.length % 2 === 0) {
        console.log(daInPutty[(daInPutty.length/2)-1]+daInPutty[daInPutty.length/2])
    } else {
        console.log(daInPutty[(daInPutty.length/2)-0.5])
    }

}