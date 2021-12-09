const year37 = (n) => {
  const pares = [
  { valor: 2, next: 2},
  { valor: 3, next: -1},
  { valor: 5, next: 1}
  ]   

  let next = n
  const arr = []

  while(next >= 0) {
    if(pares[next]) {
      arr.push(pares[next].valor)
      next = pares[next].next
    } else {
      next = -1
    }
  }

  return arr
}

console.log(year37(5))
console.log(year37(0))
