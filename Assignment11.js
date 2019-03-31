/* This program calculates the area 
of a triangle. */
var base, height, area;
   base = Number(prompt("What is the base?"));
   height = Number(prompt("What is the height?"));
   area = base * height / 2; //the formula of the area
   document.getElementById("result").innerHTML = "The base is " + base + " m<br> The height is " + height + " m<br> The area is " + area.toFixed(2) + " m<sup>2</sup>";