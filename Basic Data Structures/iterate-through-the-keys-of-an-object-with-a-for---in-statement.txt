function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = 0;
  for(let user in usersObj){
    console.log(user);//Displays  the user
    console.log(usersObj[user])// Displays the users object


//Counting users that are online
    if(usersObj[user].online == true){
         onlineUsers ++;
    }
  }
    return onlineUsers;
  

  // Only change code above this line
}