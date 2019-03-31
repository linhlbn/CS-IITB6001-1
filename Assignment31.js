
function calculate() {
    var sum = 0, count = 0;   //the sum of the numbers, initialized as zero
    var num;       //the number
    var output = "";

    num = Number(prompt("Enter a number (0 indicates the end of numbers)", "0"));  //prompt and read the first number
    while(num != 0)  {             //while the number entered is not 0
        sum = sum + num;      //add the number to the sum
		count++;
        output = output + num + "<br>";
        document.getElementById("id1").innerHTML = output;
        num = Number(prompt("Enter a number (0 indicates the end of numbers)", "0")); //prompt the next number
    }
	if (count == 0) {
		output = "The sum and average are 0 and there is no number that the user gave";
	}
	else {
		output = output + "The sum is " + sum + ", the user gave " + count + " number, and the average is " + (sum/count).toFixed(2);
	}
    document.getElementById("id1").innerHTML = output;
}
