function rot13(str) {
  return str.replace(/[A-Za-z]/g,function(char){
    const base = char <='Z'? 65:97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13)%26)+base);
    
  });
}

rot13("Please Stay I want I need Love");