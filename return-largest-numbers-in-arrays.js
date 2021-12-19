function largestOfFour(arr) {
  return arr.map(
    //Looping through the main array
  	function (subarray){
      //Finding the maximum number in the subarray
      return Math.max.apply(null, subarray);
    }
  );
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);