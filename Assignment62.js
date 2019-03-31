
var products = ["Apple iPhone 6 Plus 16GB", "Apple iPhone 4S 8GB",
"Apple iPhone 5s 32GB", "Doro Liberto 810", "Huawei Honor 7", "LG Neon 4G", "LG G45",
"Microsoft Lumia 535", "Microsoft Lumia 640", "Nokia 108", "Samsung Galaxy J5",
"Samsung Galaxy S5 Neo SM-G903F 16GB", "Samsung Galaxy S6 32GB", "Sony Xperia M4 Aqua"];
var prices = [799, 250, 600, 249, 399, 129, 349, 98, 139, 25, 195, 395, 599, 269];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//Function initializes the select element
function init()
{
	var i, options="";
	var selectElement = document.getElementById("sel");
	for(i = 0; i < products.length; i++)
	{
		options = options + "<option>" + products[i] + "</option>";
	}
	selectElement.innerHTML = options;
	selectElement.onchange = display;

}
// Function list
function listProduct()
{
	var min= Number(document.getElementById("min").value);
	var max= Number(document.getElementById("max").value);
	var productList = "";
	for (i = 0; i< prices.length; i++)
	{
		if ((min <=prices[i]) && (prices[i] <= max)) {
			productList = productList + products[i] + " Prices: " + prices[i] + "<br>";
		}
	}
	document.getElementById("resLis").innerHTML = productList;
}
//Function displays the phone number of the person chosen
function display()
{
	var index = document.getElementById("sel").selectedIndex;
	var result = document.getElementById("result");
	if (index >= 0)
	{
		result.innerHTML ="Product: " + products[index] + "~~ Price: " + prices[index] + "~~ Inventory value: " + prices[index]*numbers[index] ;
	}
	else 
	{
	    result.innerHTML = ""; //empty
	}
}

window.onload = init;
