// Only change code below this line
function countdown(n){
  if(n<1){
    return[];
  }else{
    const countArray = countdown(n-1);
    console.log(n);
    countArray.unshift(n);
    return countArray;
}
  
}
console.log(countdown(5))
// Only change code above this line


//Countup

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
