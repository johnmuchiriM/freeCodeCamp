function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  newArr = [...arr];//copy contents of array to newArr
  for(let i = 0; i <arr.length; i++){//Looping through first array
    for(let j =0; j< arr[i].length; j++){ //Loooping through second array
      if (arr[i][j] === elem) {
        newArr[i] = [];// where the element is found replace with an empty array.
    }
    }
     
  }
  newArr = newArr.filter(function(i){return i.length > 0});// This a function to filter out all the empty arrays by return arrays that are only greater than zero in length
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 4, 9]], 3));