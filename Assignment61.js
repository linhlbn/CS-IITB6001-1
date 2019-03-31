
var dayNumbers = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] , day, month;
var monthNumbers = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function CheckData() {
	day = Number(document.getElementById("day").value);
	month = Number(document.getElementById("month").value);
	if ((day>31) || (day<1)) {document.getElementById("result").innerHTML = "Invalid day"; }
	else if ((month>12) || (month<1)) {document.getElementById("result").innerHTML = "Invalid month";}
	else if ((day>=1) && (day<=dayNumbers[month])) {
		document.getElementById("result").innerHTML = day + " of " + monthNumbers[month];
	}
	else {document.getElementById("result").innerHTML = "Your data is invalid";}
}
