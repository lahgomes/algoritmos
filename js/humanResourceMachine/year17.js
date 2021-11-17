function year17(number1, number2) {
  if ((number1 < 0 && number2 < 0) || (number1 > 0 && number2 > 0)) {
    console.log(0)
  } else {
    console.log(1)
  }
}

year17(-2, -4)
year17(3, 6)
year17(-1, 5)
