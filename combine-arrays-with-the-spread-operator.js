function spreadOut() {
  let learn = ['learning'];
  let isFun = ['is','fun'];
  let fragment = [...learn,'to', 'code',...isFun];
  let sentence = fragment; // Change this line
  return sentence;
}

console.log(spreadOut());