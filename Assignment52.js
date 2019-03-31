
//two-dimensional drawing context
var context;

//Function draws a line on canvas from point (x1, y1) 
//to point (x2, y2) with color
function myDrawLine(x1, y1, x2, y2, color)
{
	context.beginPath(); 		//begin a new separate segment of color yellow, green, pink, violet, orange, cyan, purple, etc
	context.lineWidth = 1;
	context.strokeStyle = color;	
	//Draw line
	context.moveTo(x1, y1);    //move to point (x1, y1)
	context.lineTo(x2, y2);    //travel from current point to point (x2, y2)
	context.stroke();           //make line appear	
}
function myTriangle(x1, y1, x2, y2, x3, y3, color)
{
	myDrawLine(x1, y1, x2, y2, color);
	myDrawLine(x2, y2, x3, y3, color);
	myDrawLine(x3, y3, x1, y1, color);
}

//Function init is called right after the page is loaded
function init()
{
	var i, canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	var w = canvas.width;  
	var h = canvas.height;
	//upper left corner of canvas is point (0, 0)
	myDrawLine(10, 20, 110, 50, "red"); //arbitrary red line
	myDrawLine(0, h/2, w, h/2, "blue"); //horizontal line that halves canvas 
	myDrawLine(w/2, 0, w/2, h, "yellow"); //vertical line that halves canvas 
	myDrawLine(0, 0, w, h, "violet"); //diagonal line from one corner to the opposite corner
	myDrawLine(0, h, w, 0, "green"); //diagonal line from one corner to the opposite corner
	for (i=0; i<=100; i=i+20)
	{
		myTriangle(5+i, 5+i, 15+i, 5+i, 15+i, 15+i, "orange");
		
	}	
}

window.onload = init;
