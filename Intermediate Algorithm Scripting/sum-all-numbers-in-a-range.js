function sumAll(arr) {
  let newArr = [];
  let sum = 0;

  const reducer = (nextValue, currentValue) => nextValue + currentValue;

  arr.sort(function(a,b){
    return a-b
    });

  for(let i = arr[0]; i <= arr[1]; i++){
    newArr.push(i)
  }

  sum = newArr.reduce(reducer);

  return sum;

}

sumAll([1, 4]);