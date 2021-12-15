const isPrime = (num) => {
  
  for(let i = 2; i < num; i++)

    if(num % i === 0) return false;

  return num > 1;
}

const factor = (num) => {

  const arr = []
  let counter = num

  while(counter >= 2) {

    if(num % counter === 0) {

      if(isPrime(counter)) {

        arr.push(counter)
      }     
    }

    counter--
  }

  return arr
}

console.log(factor(12))
console.log(factor(2))
