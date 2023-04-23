

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  //split the letters with the first letter in str and last one
  let xorValue = 0;
  let first = str[0];
  let last = str.charAt(str.length-1);

  let firstIndex = letters.indexOf(first);
  let lastIndex = letters.indexOf(last);

  let wordSliced = letters.slice(firstIndex, lastIndex+1);

  for(let i =0; i< wordSliced.length; i++){
    xorValue ^= wordSliced.charCodeAt(i); 
  }
  
  for(let i =0; i< str.length; i++){
    xorValue ^= str.charCodeAt(i);
  }

  if(xorValue === 0){
    return undefined;
  }else{
    return String.fromCharCode(xorValue);
  }

 

}

fearNotLetter("abce");