const year22 = (numero) => {
  let anterior = 0;
  let resultado = 1;

  for (let i = 1; i < numero ; i++) {
    const temp = anterior + resultado
    anterior = resultado
    resultado = temp   
  
  }

  return resultado;
}

console.log(year22(15))
