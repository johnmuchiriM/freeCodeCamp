function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
//The Map return the name and the orbitalPeriod which is the real gem here 
  return arr.map(({name, avgAlt})=>{
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earth,3)/GM));
    return {name,orbitalPeriod};
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);