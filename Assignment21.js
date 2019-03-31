
"use strict";
//Function to calculate the bank deposit
function moneyInBank() {
    var S, p, n, result, x;
    S = Number(document.getElementById("idS").value);
	p = Number(document.getElementById("idp").value);
	n = Number(document.getElementById("idn").value);
	x = Number(document.getElementById("idx").value);
    result = S * Math.pow((1+p/100), n);
    document.getElementById("idResult").innerHTML = "The bank deposit growth is " + result.toFixed(2);
	if (result>x) { 
		document.getElementById("idAreYouRich").innerHTML = "You are very rich!";
		document.getElementById("picture").src = "youarerich.jpg";
	}
	else {
		document.getElementById("idAreYouRich").innerHTML = "You are not rich. You need to work hard!";
		document.getElementById("picture").src = "youarenotrich.jpg";
	}
	
}