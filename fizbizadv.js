const sbeve = require('./sbeve.js')


console.log("Time to pick a number and this dope af computer will fizzbuzz all the way to that number that YOU, the user, chose!")


var i = 1
var n
n = sbeve.inputNumber()

while (i <= n) {

  if (i % 3 == 0 && i % 5 == 0) {

    console.log('Fizzbuzz')

  }
  else {

    if (i % 3 == 0) {

      console.log('Fizz')

    }
    else {

      if (i % 5 == 0) {

        console.log('Buzz')

      }
      else {

        console.log(i)

      }
    }
  }

  i = i + 1
}