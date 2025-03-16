function addTogether(){
  const [first,second] = arguments;

  function addSecond(second){
    if(typeof(second) === "number") return first + second;
  }

  if(typeof (first) === "number"){
    if(arguments.length === 1) return addSecond;
    if(arguments.length === 2) return addSecond(second);
  }
}