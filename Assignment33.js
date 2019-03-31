function solve() {
	var LowerLimit, UpperLimit, step, aux, i, result;
	LowerLimit = Number(document.getElementById("idLowerLimit").value);
	UpperLimit = Number(document.getElementById("idUpperLimit").value);
	step = Number(document.getElementById("idStepValue").value);
	result = "<table><tr><th>x</th>" + "<th>x<sup>2</sup></th>" + "<th>x<sup>3</sup></th><br>";	
	for (i=LowerLimit; i<=UpperLimit; i=i+step)
	{
		result = result + "<tr><td>"+i+"</td>" + "<td>"+(i*i)+"</td>" + "<td>"+(i*i*i)+"</td></tr>";
	}
	result = result + "</table>";
	document.getElementById("idResult").innerHTML = result;
}