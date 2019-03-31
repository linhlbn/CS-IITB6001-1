
//Global varaibles
var width = [], height = [], area = []; //an array for the numbers of width, height, and its area.
var count = 0; //the number of the elements

//This function inserts a new value into the array
function insert() {	
    width[count] = Number(document.getElementById("width").value);
	height[count] = Number(document.getElementById("height").value);
	area[count] = width[count] * height[count];
    count = count + 1;
    document.getElementById("result1").innerHTML = "The width : " + width + "<br> The height : "+ height;
	document.getElementById("result2").innerHTML = "";
}

//This function prints all the values in the array and their indexes
function display() {
    var i, result = "Here is the answer <br>" + "<table><tr><th>Width</th>" + "<th>Height</th>" + "<th>Area</th><br>";
    for(i = 0; i < area.length; i++) {
        result = result + "<tr><td>"+width[i]+"</td>" + "<td>"+height[i]+"</td>" + "<td>"+area[i]+"</td></tr>";
	}
    result = result + "</table>";
    document.getElementById("result2").innerHTML = result;
}
