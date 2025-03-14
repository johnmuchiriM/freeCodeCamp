function steamrollArray(arr) {
  return arr.reduce((acc,val) => 
  Array.isArray(val)?acc.concat(steamrollArray(val)):acc.concat(val),[]);
}

steamrollArray([1, [2], [3, [[4]]]]);