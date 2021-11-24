//In this example since we had declared the input to be in Fareinheight we are supposed to equate everything with converting the values to celcius. Remember not to include the C since it is not defined

// Only change code below this line
class Thermostat{
  constructor(F){
    this._F = F;
  }
  
 
  //getter
  get temperature() {
    
      return (5/9 * (this._F-32));
    }
  //setter
  set temperature (setCelcius){
    this._F = setCelcius * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius