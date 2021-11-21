//concat saved the day

function rangeOfNumbers(startNum, endNum) {

var arr = [];
if(startNum <= endNum){
  arr = [startNum].concat(rangeOfNumbers(startNum+1, endNum));
}else{
  [];
}


return arr;
  


  
};

console.log(rangeOfNumbers(1,5));
