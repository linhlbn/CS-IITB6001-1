
"use strict";
//Function
function Begin() {
    var times, i, heads=0, tails=0, num;
	times = Number(document.getElementById("idTimes").value);
	for (i=0; i<times; i=i+1) {
		num = Math.round(Math.random());
		if (num == 1) 
			{heads++ ;} 
		else {tails++ ;} 
		
	}
	document.getElementById("idResult").innerHTML = "We have "+ heads + " times heads with "+ (heads/times*100).toFixed(2) + "% and " + tails + " times tails with "+ (tails/times*100).toFixed(2) + "% ";
	
	
	
}
