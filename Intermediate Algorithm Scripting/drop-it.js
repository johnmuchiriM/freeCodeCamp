function dropElements(arr, func) {
  // Loop through the arr
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr.slice(i);
    }
  }
  return [];
}

dropElements([0, 1, 0, 1], function(n) {return n === 1; });