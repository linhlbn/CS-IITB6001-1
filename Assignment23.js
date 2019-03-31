
"use strict";
//Calculate the final price
function priceProduction() {
    var price, quantity;
    price = Number(document.getElementById("idPrice").value);
	quantity = Number(document.getElementById("idQuantity").value);
	if (isNaN(price)|| price <= 0) {         alert("Error: price must be number and greater than 0");         return;  //returns from the function     
	} 
	if (quantity<20) { 
		document.getElementById("idResult").innerHTML = "You bought less than 20 products, so you have no discount, your final price is : " + (price*quantity).toFixed(2);
	}
	else if (20<= quantity && quantity<50) { 
		document.getElementById("idResult").innerHTML = "You bought 20-50 products, so you have 10% discount, your final price is : " + (price*quantity*0.9).toFixed(2);
	}
	else if (50<= quantity && quantity<100) { 
		document.getElementById("idResult").innerHTML = "You bought 50-100 products, so you have 20% discount, your final price is : " + (price*quantity*0.8).toFixed(2);
	}
	else if (100<= quantity) { 
		document.getElementById("idResult").innerHTML = "You bought over 100 products, so you have 30% discount, your final price is : " + (price*quantity*0.7).toFixed(2);
	}
}
