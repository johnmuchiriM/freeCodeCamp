const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

//arr should be a sub array to source which source is equl  to list, therefore, arr should be a sub array to list. Hence const [a,b,...arr]= list;