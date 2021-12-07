function factorialize(num) {
let total = 1;
for(let i =1; i<=num; i++){
  total *= i;
}
  return total;
}

factorialize(5);

// 0! = 1
// 1! = 1

// WHY?? 
// 3! = 4!/4 = 3*2*1

// 2! = 3!/3 = 2*1

// 1! = 2!/2 = 1

// Therefore, 0! = 1!/1 =1


// Notes:
// function factorialize(num) {
  // Create a variable named total and set it equal to 1.
  // This will account for the 0 edge case, because when
  // num = 0, the loop will not run at all, and total will
  // be returned as 1 at the end of the function.
//   let total = 1
  // Start the for loop at 1.
  // Run the loop as long as i is less than or equal to num.
  // (So when num = 0, i is never less or equal to num, and the
  //  loop never runs).
  // Increment i by one each time the loop runs.
//   for (let i = 1; i <= num; i++) {
    // Multiply the total by i until we reach num.
    // Save the product as the variable total each time.
    // This can also be written: total = total * i.
//     total *= i
    //                  total      i
    // 1st run: total =   1     *  1         total = 1
    // 2nd run: total =   1     *  2         total = 2
    // 3rd run: total =   2     *  3         total = 6
    // 4th run: total =   6     *  4         total = 24
    // 5th run: total =   24    *  5         total = 120
//   }
  // return total as our answer
//   return total;
// }

// factorialize(5);