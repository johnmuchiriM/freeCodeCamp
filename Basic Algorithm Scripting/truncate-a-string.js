function truncateString(str, num) {
  if(str.length <= num){
    return str
  }
  return str.slice(0,num) + '...'
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// https://medium.com/@DylanAttal/truncate-a-string-in-javascript-41f33171d5a8