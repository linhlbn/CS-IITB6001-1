
var nYG, uGuess="", times=0, num=Math.floor(Math.random()*100)+1;

function Guess() 
{
	nYG=Number(document.getElementById("numberYouGuess").value);
	times+=1;
	uGuess+=nYG +" | ";
	document.getElementById("youGuess").innerHTML=uGuess;
	if (num==nYG) {document.getElementById("result").innerHTML="You guess true answer with "+times+" times";}
	else if ((num>nYG) && (times<6)) {document.getElementById("result").innerHTML="Your answer is smaller than true answer, and you have "+(6-times)+" times to guess";}
	else if ((num<nYG) && (times<6)) {document.getElementById("result").innerHTML="Your answer is bigger than true answer, and you have "+(6-times)+" times to guess";}
	else {document.getElementById("result").innerHTML="Game over, good luck to you at the next time";}
}
