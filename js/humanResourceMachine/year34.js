/* const year34 = (letras) => {
  const vogais = ['a', 'e', 'i','o', 'u']

  if(!vogais.includes(letras)) {
    console.log(letras)
  }
}

year34(5)
year34('a')
year34('n')
year34('u') */


year34(['a', 'b', 2, 3, 4, 5])
year34(items) {
   const vogais = ['a', 'e', 'i','o', 'u']


    return items.filter((item) => {
      return !vogais.includes(item)

    })
} 
