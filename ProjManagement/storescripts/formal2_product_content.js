var totalPrice = 0;
var topPrice = 14.90;
var outterWearPrice = 79.00;
var botPrice = 39.00;
var shoesPrice = 34.90;
var bagPrice = 37.90;
var accPrice = 14.90;
var topName = "Embossed Cropped Top";
var outName = "Mango Suit Blazer";
var botName = "Skinny Paty Jeans";
var shoeName = "Buckled Ankle Boots";
var bagName = "Soft Bowler Bag";
var accName = "Multi Chain Layered Necklace";

function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Want something layback but edgy?<br /> Try this timeless piece. <br /> <br />- Slightly Sheer<br /><br />Price: SGD$14.90";
		topPrice = 14.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Boyfriend Tee";
		topName = "Embossed Cropped Top";
	};
	if(product == 2){
		content = "Featuring is a modern silhouette dress with classic polka dots and a V neckline. <br /><br />Price: SGD$ 49.90";
		topPrice = 49.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Madea Short Sleeve Short Dress ";
		topName = "Madea Short Sleeve Short Dress";
	};
	if(product == 3){
		content = "Dress like Olivia Palermo in this pleat satin top today!<br /><br />Price: SGD$49.00";
		topPrice = 49.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Pleat Satin Top ";
		topName = "Pleat Satin Top";
	};
	if(product == 4){
		content = "Want to dress like Miranda Kerr?<br />This is one top that you should not miss!<br />- Ruffled V-neckline.<br /><br />Price: SGD$39.90";
		topPrice = 39.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Saturn Rings Top ";
		topName = "Saturn Rings Top";
	};
	if(product == 5){
		content = "Get Rosie Huntington's look with this dress today!<br /><br />Price: SGD$69.00";
		topPrice = 69.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Floral Pattern Dress";
		topName = "Floral Pattern Dress";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}

function outterWearChangeTxt(product){
	var content;
	if(product == 1){
		content = "Dress any outfit with this staple piece and you are ready to hit the streets!<br /><br />Price: SGD$79.00";
		outterWearPrice = 79.00;
		document.getElementById('chosenOutterWear').innerHTML = "Mango Suit Blazer ";
		outName = "Mango Suit Blazer";
	};
	if(product == 2){
		content = "This blazer is the perfect cover up for a casual day in the office.<br /><br />Price: SGD$54.90";
		outterWearPrice = 54.90;
		document.getElementById('chosenOutterWear').innerHTML = "Military Blazer With Contrast Trim ";
		outName = "Military Blazer With Contrast Trim";
	};
	if(product == 3){
		content = "Featuring is a light grey faux leather bomber jacket that comes with two side pockets and a round neckline.<br /><br />Price: SGD$49.90";
		outterWearPrice = 49.90;
		document.getElementById('chosenOutterWear').innerHTML = "Faux Leather Bomber Jacket ";
		outName = "Faux Leather Bomber Jacket";
	};
	document.getElementById('outterWearContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "Want to make a fashion statement?<br />This is definitely the piece for you!<br /><br />Price: SGD$39.00";
		botPrice = 39.00;
		document.getElementById('chosenBot').innerHTML = "Skinny Paty Jeans ";
		botName = "Skinny Paty Jeans";
	};
	if(product == 2){
		content = "Think you would like to look formal and presentable but not overdress on a Friday? <br />Try this!<br /><br />Price: SGD$45.00";
		botPrice = 45.00;
		document.getElementById('chosenBot').innerHTML = "Slim Fit Denim Jeans ";
		botName = "Slim Fit Denim Jeans";
	};
	if(product == 3){
		content = "A girl should always look her best and embrace her curves. <br />Featuring is a figure-hugging black silhouette skirt.<br /><br />Price: SGD$17.90";
		botPrice = 17.90;
		document.getElementById('chosenBot').innerHTML = "Midi Pencil Skirt ";
		botName = "Midi Pencil Skirt";
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a pair of shoes that are both casual and versatile? <br />This is definitely the pair for you.<br /><br />Price: SGD$34.90";
		shoesPrice = 34.90;
		document.getElementById('chosenShoes').innerHTML = "Buckled Ankle Boots ";
		shoeName = "Buckled Ankle Boots";
	};
	if(product == 2){
		content = "Featuring is a platform pumps with ankle straps.<br />Available size: UK 3- 8<br /><br />Price: SGD$35.90";
		shoesPrice = 35.90;
		document.getElementById('chosenShoes').innerHTML = "Platform Pumps With Ankle Straps ";
		shoeName = "Platform Pumps With Ankle Straps";
	};
	if(product == 3){
		content = "Featuring is a color block pumps with glossy finish. <br />Comes with a synthetic upper patent leather. <br />The perfect heels for any occasion.<br /><br />Price: SGD$28.00";
		shoesPrice = 28.00;
		document.getElementById('chosenShoes').innerHTML = "D'Orsay Heels With Toecap ";
		shoeName = "D'Orsay Heels With Toecap";
	};
	if(product == 4){
		content = "Give a girl the right shoes and she can conquer the world – Marilyn Monroe<br />- Synthetic upper<br/><br />Price: SGD$39.90";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Rosey Metallic Heels With Ankle Strap ";
		shoeName = "Rosey Metallic Heels With Ankle Strap";
	};
	if(product == 5){
		content = "Featuring is a pair of black gradient strappy heels. <br/>Size Available: UK 3 - 8 <br /><br />Price: SGD$34.90";
		shoesPrice = 34.90;
		document.getElementById('chosenShoes').innerHTML = "Strappy Transparent Heels ";
		shoeName = "Strappy Transparent Heels";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a roomy and chic bag for all you busy ladies out there.<br />- Synthetic leather<br /><br />Price: SGD$37.90";
		bagPrice = 37.90;
		document.getElementById('chosenBag').innerHTML = "Soft Bowler Bag ";
		bagName = "Soft Bowler Bag";
	};
	if(product == 2){
		content = "Add a twist to your outfit today with a dual-colored panel clutch today.<br /><br />Price: SGD$24.90";
		bagPrice = 24.90;
		document.getElementById('chosenBag').innerHTML = "Panelled Oversized Clutch";
		bagName = "Panelled Oversized Clutch";
	};
	if(product == 3){
		content = "Think you need a bag to brighten your outfit? <br />This is definitely one bag you cannot go without!<br />- Detachable straps and charms<br /><br />Price: SGD$65.00";
		bagPrice = 65.00;
		document.getElementById('chosenBag').innerHTML = "Handbag With Detachable Straps & Charm";
		bagName = "Handbag With Detachable Straps & Charm";
	};
	if(product == 4){
		content = "If there is only one word to describe the bag, it would be sophisticated.<br /> Featuring is a white leather bag with gold embellishment.<br /><br />Price: SGD$59.90";
		bagPrice = 59.90;
		document.getElementById('chosenBag').innerHTML = "Trapeze Top Handle Bag";
		bagName = "Trapeze Top Handle Bag";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Add some edginess to your outfit with this necklace today!<br /><br />Price: SGD$14.90";
		accPrice = 14.90;
		document.getElementById('chosenAcc').innerHTML = "Multi Chain Layered Necklace";
		accName = "Multi Chain Layered Necklace";
	};
	if(product == 2){
		content = "Need something to jazz up your outfit? <br />Try this!<br /><br />Price: SGD$15.90";
		accPrice = 15.90;
		document.getElementById('chosenAcc').innerHTML = "Gold Tone Diamante Encrusted Bangle";
		accName = "Gold Tone Diamante Encrusted Bangle";
	};
	if(product == 3){
		content = "Spice up your outfit with abit of class and elegance with this pair of gold tone encrusted knot stud earrings.<br /><br />Price: SGD$14.90";
		accPrice = 14.90;
		document.getElementById('chosenAcc').innerHTML = "Gold Tone Encrusted Knot Stud Earrings ";
		accName = "Gold Tone Encrusted Knot Stud Earrings";
	};
	if(product == 4){
		content = "Be the talk of the town with this cat eye sunglasses. <br /><br />Price: SGD$12.90";
		accPrice = 12.90;
		document.getElementById('chosenAcc').innerHTML = "Cat Eye Sunglasses";
		accName = "Cat Eye Sunglasses";
	};
	if(product == 5){
		content = "Spice up your outfit with this classic black belt.<br /><br />Price: SGD$12.90";
		accPrice = 12.90;
		document.getElementById('chosenAcc').innerHTML = "Square Buckled Skinny Belt";
		accName = "Square Buckled Skinny Belt";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + outterWearPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}