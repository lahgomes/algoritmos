const year28 = (numeros) => {
  numeros.sort((a,b) => b-a);
  return numeros
}

console.log(year28([10,1,7,0]))
