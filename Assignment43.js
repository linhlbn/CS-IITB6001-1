
"use strict";
//Function
function Begin() {
    var a, x, y, T, result = "", count = 0, min = 250, Tcount = 0, minx = 10, miny = 10;
	a = Number(document.getElementById("idA").value);
	if ((a>5) || (a<0)) {
		document.getElementById("idResult").innerHTML = "Factor A must be between 0 and 5!";
	}
	else 
	{
	for (x=1; x<=6; x=x+1) {
		for (y=0.2; y<=1.2; y=y+0.2) {
		count++;
		T = a*x*x*y*y + (6-x)*(6-x) + (1-a)*x/y;
		result = result + "When x="+x+", y="+y.toFixed(1)+", T"+count+" = " + Math.abs(T).toFixed(2) + "<br>";
		if (min > Math.abs(T)) {min = Math.abs(T); Tcount = count; minx = x; miny = y;}
		}
	}
	document.getElementById("idResult").innerHTML = result + "<br> Min result is T"+Tcount+"="+min.toFixed(2) + " and x = " + minx + " and y = " + miny ;
	}
}
