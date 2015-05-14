var item = [];
var itemPrice = [];
var itemTotalPrice = [];
var quantity = [];

//add item to cart
function addToCartTop(){
	var wasFound = false;
	if(topName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == topName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(topName);
			itemPrice.push(topPrice);
			quantity.push(1);
		}
	}
}
function addToCartBot(){
	var wasFound = false;
	if(botName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == botName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(botName);
			itemPrice.push(botPrice);
			quantity.push(1);
		}
	}
}
function addToCartShoe(){
	var wasFound = false;
	if(shoeName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == shoeName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(shoeName);
			itemPrice.push(shoesPrice);
			quantity.push(1);
		}
	}
}
function addToCartBag(){
	var wasFound = false;
	if(bagName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == bagName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(bagName);
			itemPrice.push(bagPrice);
			quantity.push(1);
		}
	}
}
function addToCartAcc(){
	var wasFound = false;
	if(accName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == accName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(accName);
			itemPrice.push(accPrice);
			quantity.push(1);
		}
	}
}
function addToCartOutter(){
	var wasFound = false;
	if(outName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == outName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(outName);
			itemPrice.push(outterWearPrice);
			quantity.push(1);
		}
	}
}
function addToCartSwim(){
	var wasFound = false;
	if(swimName == ""){
		//do nothing
	}else{
		for(i = 0; i < item.length; i++){
			//when the item is in cart, add the quantity
			if(item[i] == swimName){
				value = quantity[i];
				value += 1;
				quantity[i] = value;
				wasFound = true;
			}
			//adding new item
		}
		if(wasFound == false){
			item.push(swimName);
			itemPrice.push(topPrice);
			quantity.push(1);
		}
	}
}

//empty the cart
function emptyCart(){
	item = [];
	itemPrice = [];
	itemTotalPrice = [];
	quantity = [];
	
	renderCart();
}

//remove an item in the cart
function removeCartItem(i){
	item.splice(i, 1);
	itemPrice.splice(i, 1);
	itemTotalPrice.splice(i, 1);
	quantity.splice(i, 1);
	
	renderCart();
}

function renderCart(){
	var cartItem;
	var itemName = "";
	var itemPrices = "";
	var itemQuantity = "";
	var itemSumPrices = "";
	var removeItem = "";
	var totalValue = 0;
	//tally totalprice
	for(i = 0; i < itemPrice.length; i++){
		itemTotalPrice[i] = itemPrice[i] * quantity[i];
		totalValue += itemTotalPrice[i];
	}
	
	//when the cart is empty
	if(item.length == 0){
		cartItem = "<h2 align='center'>Your shopping cart is empty</h2>";
	}else{
		//render out cart list
		cartItem = "<h2>Your Shopping Cart: </h2>";
		itemName = "";
		itemPrices = "";
		itemQuantity = "";
		itemSumPrices = "";
		removeItem = "";
		for(i = 0; i < item.length; i++){
			itemName += item[i] + "<br />";
			itemPrices += "$" + Number(itemPrice[i]).toFixed(2) + "<br />";
			itemQuantity += quantity[i] + "<br />";
			itemSumPrices += "$" + Number(itemTotalPrice[i]).toFixed(2) + "<br />";
			removeItem += '<a onclick="removeCartItem(' + i + ')">[X]</a><br />';
		}
	}
	document.getElementById('cartItem').innerHTML = cartItem;
	document.getElementById('itemName').innerHTML = itemName;
	document.getElementById('itemPrices').innerHTML = itemPrices;
	document.getElementById('quantity').innerHTML = itemQuantity;
	document.getElementById('itemTotalPrice').innerHTML = itemSumPrices;
	document.getElementById('remove').innerHTML = removeItem;
	document.getElementById('totalValue').innerHTML = "Total: $" + Number(totalValue).toFixed(2) + " SGD";
}

function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	var summaryBox = document.getElementById('fixed');
	overlay.style.opacity = .8;
	renderCart();
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
		summaryBox.style.opacity = .9;
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
		summaryBox.style.opacity = 0;
	}
}