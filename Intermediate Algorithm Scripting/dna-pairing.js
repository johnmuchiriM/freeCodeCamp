function pairElement(str) {
  //Split the letters
  //if you find and letter of prev defined
  //Add the next letter and append in an array
  //return everything
  var arrOne = ['A','T'];
  var arrTwo = ['C','G'];
  var chars = str.split("");

  var pairs = chars.map(
    char =>{
      if(char === "A"){
        return [char,arrOne[1]];
      }else if(char === "T"){
        return [char,arrOne[0]];
      }else if(char === "C"){
        return [char,arrTwo[1]];
      }else if(char === "G"){
        return [char,arrTwo[0]];
      }
    }
  ) 
  console.log(pairs);
  return pairs;
}

pairElement("GCG");