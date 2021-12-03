const year32 = (numero) => {
  const piso = [5,1,5,3,4,4,8,5,1]
  
  return piso.reduce((prev, atual) => {
    if(atual === numero) return prev + 1
    return prev
  },0)
  
}

console.log(year32(5))
