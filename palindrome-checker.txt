function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi,'').toLowerCase();
  return(str == str.split('').reverse('').join(''));
  
}

palindrome("eye");