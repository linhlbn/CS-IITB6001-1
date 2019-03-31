
function calcChar(myString, myWord) {
	var count = 0;
	for (i = 0; i< myString.length; i++) {
		if (myString[i] == myWord) {count++ ; }
	}
	return count;
}

function CountChar() {
	var charr = document.getElementById("charr").value, email = document.getElementById("email").value;
	countt = calcChar(email, charr);
	document.getElementById("CountChar").innerHTML = "You have " + countt + " characters in your string";
}
function Verify() {
	var cal=0, email = document.getElementById("email").value;
	if ((email.length < 7) || (email.indexOf("@")==-1) || (email.indexOf(".")==-1) || (email.charAt(0) == "@") || (email.charAt(email.length) == "@") ) //check at least 7 ~ must have @ and . ~ dont have @ at the begining/ending.
	{
		alert("Your email is not valid. Type again!");
		location.reload();
	}
	// check if email has dot next to @ like this -> linh.@com or linh@.com
	else if ((email.indexOf("@") - email.indexOf(".") == 1) || (email.indexOf("@") - email.indexOf(".") == -1)) {
		alert("Your email is not valid. Type again!");
		location.reload();
	}
	else if ((calcChar(email,"@") > 1) || (calcChar(email,".") > 1)) {
		alert("Your email is not valid. Type again!");
		location.reload();
	}
	else {
		cal = calcChar(email,"@")
		document.getElementById("resultVeri").innerHTML = "Your email is valid. <br> Your email is : " + email;
		 }	
}
function Transform() {
	var newEmail="", aux="", numRandom="", result="", email = document.getElementById("email").value;
	var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (regExp.test(email)) 
	{
		result="Your email is valid. <br> Your email is : " + email+"<br>";
		for (var i=email.length; i >= 0; i--) {
			aux = email.charAt(i);
			numRandom = Math.round(Math.random()) ;
			if (numRandom / 2 == 0) { newEmail = newEmail + aux.toUpperCase(); }
							else { newEmail = newEmail + aux; }
			
		}
		newEmail = newEmail.replace("@", "[ZIP]");
		newEmail = newEmail.replace(".", "!");
		result +=  "Your new email after transform is : " + newEmail
		document.getElementById("resultTran").innerHTML = result ;
	} else {alert("Your email is not valid. Type again!"); location.reload();}
}
