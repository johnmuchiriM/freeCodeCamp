let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*? Roosevelt/; // Change this line

let result = myRegex.test(myString);

result = true; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

//.*? or .* This is a lazy quantifier