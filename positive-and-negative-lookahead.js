let sampleWord = "astronaut";
let pwRegex = /[a-z](?=\w{5,})(?=\D*\d\d)/i; // Change this line
let result = pwRegex.test(sampleWord);