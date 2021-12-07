let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  const USERS = ["Jeff","Alan","Sarah","Ryan"];
  
    if(USERS[0] in userObj && USERS[1] in userObj &&USERS[2] in userObj && USERS[3] in userObj){
    return true;
 
    }else{
    return false;
 
    }
  
  
  //&& Saved the day after a long struggle
  // Only change code above this line
}

console.log(isEveryoneHere(users));