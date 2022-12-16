function findElement(arr, func) {
  let num = 0; //Predifining num

  for( let i = 0; i < arr.length; i ++){
    num = arr[i];// Equating num to the value in the array
    if (func(num)){
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);