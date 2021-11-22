// const year21 = number => {
//   let soma = 0
//   for (let i = number; i >= 0; i--) {
//     soma = soma + i
//   }
//   console.log(soma)
// }

// year21(5)






// const year21 = (numeros) => {
//   let total = 0

//   for (let i = 0; i < numeros.length; i++) {
//    total = total + numeros[i] 
//   }

//   return total
// }

// console.log(year21([1,2,3]))


const year21 = (numeros) => {
  let total = 0;

  numeros.forEach((numero) => {
    total = total + numero      

  })

  return total  

}

console.log(year21([1, 2, 3]))
