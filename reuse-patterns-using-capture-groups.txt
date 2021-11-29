let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

// ^ this is for matching the first three like numbers 

//  Groups:
// (\d+) Check for one or more digits.
// \s Check for a single white-space.

// Re-use groups:
// \1 Re-use the digits group.
// \1 Re-use the digits group again. before ending the check with $

// First we "use" the 1 groups, then we "re-use" group 1, group 1 again.

// <------ use ------->|<--------- re-use -------->
// digits whitespace digits whitespace digits 