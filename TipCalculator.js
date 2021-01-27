	/* Author:       Alexandra Wheeler             */
function tipCalculate() {
  event.preventDefault();
  let cost = document.getElementById("cost").value;
  let p = document.getElementById("percentage").value;
  let message;
  message = document.getElementById("errorMsg");
  message.innerHTML = "";
  
  try {
    if(cost == "") throw "empty";
    if(isNaN(cost)) throw "not a number";
	else {
	let tipCalc = cost * p; 
	let total = parseFloat(cost) + parseFloat(tipCalc);
	console.log("total = " + total);
	document.getElementById("tipAmount").value = tipCalc;
	document.getElementById("totalCost").value = total;
	}
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
} 



