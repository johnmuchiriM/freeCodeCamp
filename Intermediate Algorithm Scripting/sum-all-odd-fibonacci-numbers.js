function sumFibs(num) {

  // Check on the Odd numbers below the num, then do the sum
  let a =1, b = 1, sum = 0;

  while (a <= num){
    if(a % 2 !== 0){
      sum += a;
    }
    [a,b] = [b, a + b];
  }


    console.log("Mine"+sum);
      return sum;

  
}

sumFibs(75025);