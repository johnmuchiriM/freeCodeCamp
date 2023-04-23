function destroyer(arr) {

  //Convert the arguments object into a real array
let args = Array.prototype.slice.call(arguments);

//Get the values to be removed from the initial array
let valuesToRemove = args.slice(1);

//Use filter() to return a new array with only the elements that are not present in the valuesToRemove array

return arr.filter(
  function(val){
    let newArray = !valuesToRemove.includes(val);
    console.log(newArray);
    return newArray;
  }
);

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);