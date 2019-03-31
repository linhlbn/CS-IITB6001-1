
"use strict";
//Function
function Begin() {
    var start, end, condition, sum = 0, result, i;
    condition = document.getElementById("idCondition").value;
	start = Number(document.getElementById("idStart").value);
	end = Number(document.getElementById("idEnd").value);
	if (condition == "while") {
		while (start <= end) {
			sum = sum + start;
			start++;
		}
	}
    else if (condition == "for") {
		for (i=start; i <= end; i=i+1) {
			sum = sum + i;
		}
	}
	else {document.getElementById("idResult").innerHTML = "We have no result";}
	document.getElementById("idResult").innerHTML = "The sum is: "+sum;
	
}
