	/* Author:       Alexandra Wheeler             */
function tipCalculate() {
  event.preventDefault();
  var cost = document.getElementById("cost").value;
  var p = document.getElementById("percentage").value;
  var message;
  message = document.getElementById("errorMsg");
  message.innerHTML = "";
  
  try {
    if(cost == "") throw "empty";
    if(isNaN(cost)) throw "not a number";
	else {
	var tipCalc = cost * p; 
	var total = parseFloat(cost) + parseFloat(tipCalc);
	console.log("total = " + total);
	document.getElementById("tipAmount").value = tipCalc;
	document.getElementById("totalCost").value = total;
	}
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
} 



