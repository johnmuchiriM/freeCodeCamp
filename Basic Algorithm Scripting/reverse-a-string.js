function reverseString(str) {

 let stringTwo = [...str];
  str = stringTwo.reverse().join('').toString();

  return str;
}

reverseString("hello");