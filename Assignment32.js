
function calculate() {
    var sum = 0;   //the sum of the numbers, initialized as zero
    var num;       //the number
    var output = "";
	
    while(sum < 100)  {             //while the number entered is not 0
        num = Number(prompt("Enter a number (0 indicates the end of numbers)", "0")); //prompt the next number
		sum = sum + num;      //add the number to the sum
        output = "The current sum is " + sum + "<br>";
        document.getElementById("id1").innerHTML = output;        
    }

    document.getElementById("id1").innerHTML = "The final sum is " + sum;
}
