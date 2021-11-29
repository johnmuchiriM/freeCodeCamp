let username = "JackOfAllTrades";
let userCheck = /(^[a-z]{2,})\d*$|(^[a-z]{1,})\d\d$/gi; // Change this line
let result = userCheck.test(username);

//^[\D]\w*\d$