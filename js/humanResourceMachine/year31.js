const year31 = (numeros) => {
  numeros.sort((a,b) => b-a);
  return numeros
}

console.log(year31([10,1,7,0]))
