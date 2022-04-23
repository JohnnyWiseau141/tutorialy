const { count } = require("console")

var countCountula = 1


while (countCountula <= 30) {

  if (0 !== countCountula % 3 && 0 !== countCountula % 5) {
    console.log(countCountula)
    
  } else {

    if (countCountula % 3 === 0 && countCountula % 5 === 0) {
      console.log("fizzbuzz")
    } else {

    if (countCountula % 3 === 0) {
    console.log("fizz")
    }

    if (countCountula % 5 === 0) {
      console.log("buzz")
    }
  }


  }
  countCountula = countCountula + 1

  
  
}

