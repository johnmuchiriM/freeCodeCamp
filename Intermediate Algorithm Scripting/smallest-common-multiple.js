 //Find the GCD
  //LCM = |a*b|/gcd(a,b)
  function gcd(a,b){
    return b === 0 ? a: gcd(b,a % b);
  }

  function lcm (a,b){
    return Math.abs(a*b)/gcd(a,b);
  }

 

  function smallestCommons(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = min;
    for(let i=min+1; i<=max;i++){
      result = lcm(result, i);
    }

    return result;
  }


smallestCommons([1,5]);