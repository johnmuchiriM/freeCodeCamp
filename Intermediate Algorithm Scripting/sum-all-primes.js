function sumPrimes(num) {
  // Function to check whether a number is prime
  function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i*i <=n;i++){
      if(n % i === 0) return false;
    }
    return true;
  }
  let sum = 0;

  for (let i =2; i<=num; i++){
    if(isPrime(i)){
      sum +=i;
    }
  }
  return sum;
}

sumPrimes(10);