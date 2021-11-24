const year23 = (numeros) => {

  return Math.min.apply(null, numeros);
  
}

console.log(year23([2, 5, 10, 1]))


// const year23 = (numeros) => {

//   const min = Math.min(...numeros)
//   return min

// }

// console.log(year23([2, 5, 10, 1]))
