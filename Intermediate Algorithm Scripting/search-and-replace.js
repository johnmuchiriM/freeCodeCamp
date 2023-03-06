function myReplace(str, before, after) {
 if(str.includes(before)){
   if(before.charAt(0) == before.charAt(0).toUpperCase()){
     var newSentence = str.replace(before,after.charAt(0).toUpperCase()+ after.substring(1));
   }else{
     var newSentence = str.replace(before,after.charAt(0).toLowerCase()+ after.substring(1));
   }

   console.log(newSentence);
   
 }
  return newSentence;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");