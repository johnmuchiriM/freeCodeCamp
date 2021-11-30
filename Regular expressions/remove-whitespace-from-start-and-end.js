let hello = "   Hello, World!  ";
let wsRegex = /^\s*\w+,\s\w+!\s*/; // Change this line
let result = hello.replace(wsRegex, "Hello, World!"); // Change this line

//\s* It says zero or more occurrence of whitespace characters.

//The \w metacharacter matches word characters.

// A word character is a character a-z, A-Z, 0-9, including _ (underscore).