const CURRENCY_UNIT = [
  {name:"PENNY",value:0.01},
  {name:"NICKEL",value:0.05},
  {name:"DIME",value:0.1},
  {name:"QUARTER",value:0.25},
  {name:"ONE",value:1},
  {name:"FIVE",value:5},
  {name:"TEN",value:10},
  {name:"TWENTY",value:20},
  {name:"ONE HUNDRED",value:100}
]

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  // Calculate total cash available in the drawer
  let totalInDrawer = cid.reduce((sum, curr)=> sum + curr[1],0).toFixed(2);

  if(changeDue > totalInDrawer){
    return {status:"INSUFFICIENT_FUNDS", change:[]};
  }
  
  if (changeDue.toFixed(2) === totalInDrawer){
    return {status:"CLOSED", change:cid};
  }

  

  let changeArray = [];
  let reversedCurrency = [...CURRENCY_UNIT].reverse();
  let cashDrawer = Object.fromEntries(cid);

  for (let {name,value} of reversedCurrency){
    let available = cashDrawer[name];
    let amountToReturn = 0;

    while(changeDue >= value && available > 0){
      changeDue -=value;
      changeDue = changeDue.toFixed(2);
      available -=value;
      amountToReturn +=value;
    }

    if(amountToReturn > 0){
      changeArray.push([name,amountToReturn]);
    }

   
  }
   if(changeDue > 0){
      return {status:"INSUFFICIENT_FUNDS",change:[]};
    }

    return {status:"OPEN", change:changeArray};

}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));