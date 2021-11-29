const year28 = (numeros) => {
  numeros.sort((a, b) => a - b);
  return numeros
}

console.log(year28([10,1,7]))
