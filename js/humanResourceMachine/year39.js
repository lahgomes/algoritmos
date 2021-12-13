const year39 = (address) => {
  let counter = 0
  const arr = [[1, 2, 3], [4, 5, 6]]
  const coord = []

  arr.forEach((valueX, indexX) => {

    valueX.forEach((valueY, indexY) => {

      if(counter < address) {
        counter++
      } 

      if(counter === address) {
        coord.push(indexX)
        coord.push(indexY) 
      }

    })
  })

  return coord 
} 

console.log(year39(6))
console.log(year39(5))



