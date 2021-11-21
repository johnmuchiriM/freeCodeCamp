// function sum(arr, n) {
//   // Only change code below this line
//   if(n<=0){
//     return 0;
//   }else{
//     return  sum(arr, n-1) + arr[n-1]; 
//   }

//   // Sum(arr, n-1)
//   // For addation you start with a return of O not 1 as product
//   // Only change code above this line
// }


"use strict";
function sum(arr, n) {
    console.log("arr:", arr);
    console.log("n:", n);
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log("sum() return:", sum([2, 3, 4, 7, 8], 4));