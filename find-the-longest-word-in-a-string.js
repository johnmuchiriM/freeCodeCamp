function findLongestWordLength(str) {
  let strTwo = str.split(/(\s+)/);
  
 		var longestFirst = strTwo[0].length;
    var maxStriFirst = strTwo[0];
//   console.log(strTwo[2]);
  for(let i =0 ; i< strTwo.length; i++ ){
    var longestSecond= strTwo[i].length;
    if(longestSecond>longestFirst){
      maxStriFirst = strTwo[i];
      longestFirst = longestSecond;
    }
    
    console.log(strTwo[i]);
  }
//   console.log('Hello',strTwo);
  return longestFirst;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");