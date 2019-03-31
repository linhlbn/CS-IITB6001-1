
"use strict";
//Function to Solve the quadratic equation
function solveEquation() {
    var a, b, c, x1, x2, delta;
    a = Number(document.getElementById("ida").value);
	b = Number(document.getElementById("idb").value);
	c = Number(document.getElementById("idc").value);
	if (a==0) { 
		document.getElementById("idResult").innerHTML = "The equation has unique result: " + (-c/b).toFixed(2);
	}
	else {
		delta = b*b - 4*a*c;
		if (delta == 0) {
			document.getElementById("idResult").innerHTML = "The equation has couple results: " + (-b/(2*a)).toFixed(2);
		}
		else  if (delta < 0) {
			document.getElementById("idResult").innerHTML = "The equation has no solution!";
		}
		else  if (delta > 0) {
			x1 = (-b + Math.sqrt(delta)) / (2*a);
			x2 = (-b - Math.sqrt(delta)) / (2*a);
			document.getElementById("idResult").innerHTML = "The equation has 2 result: <br> x1= " + x1.toFixed(2) + "<br>x2= " + x2.toFixed(2);
		}
	}
	
}
