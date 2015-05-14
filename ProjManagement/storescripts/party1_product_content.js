var totalPrice = 0;
var topPrice = 156.80;
var shoesPrice = 525.45;
var bagPrice = 525.35;
var accPrice = 598.60;
var topName = "Black Embellished Pencil Dress";
var shoeName = "Buckled Ankle Boots";
var bagName = "Tory Burch Kira Clutch";
var accName = "Monkey Short Necklace";


function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Be inspired by Nicole Kidman.<br />Featuring is a sequin black dress with floral details and a sheer long sleeve. <br /><br />Price: SGD$156.80";
		topPrice = 156.80;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Black Embellished Pencil Dress";
		topName = "Black Embellished Pencil Dress";
	};
	if(product == 2){
		content = "Have a curvy body? <br />This is definitely one piece you would not want to miss.<br /><br />Price: SGD$62.50";
		topPrice = 62.50;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>White Metal Trim Bandeau Pencil Dress";
		topName = "White Metal Trim Bandeau Pencil Dress";
	};
	if(product == 3){
		content = "Looking for an affordable Taylor Swift outfit? <br />This might just be the one for you!<br /><br />Price: SGD$39.90";
		topPrice = 39.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Off Shoulder Origami Dress ";
		topName = "Off Shoulder Origami Dress";
	};
	if(product == 4){
		content = "Bring in the summer! <br />Try something different!<br />Featuring is a yellow bodycon dress by Miss Chase<br /><br />Price: SGD$49.90";
		topPrice = 49.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Miss Chase In My Element Bodycon Dress ";
		topName = "Miss Chase In My Element Bodycon Dress";
	};
	if(product == 5){
		content = "Be inspired by Lilly Collin's and get this dress today!<br /><br />Price: SGD$56.90";
		topPrice = 56.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Mint White Dobby Tapered";
		topName = "Mint White Dobby Tapered";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}


function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Be the centre of attraction with the Tory Burch color-cube wedge sandal.<br />The perfect sandal for any occasion.<br /><br />Price: SGD$525.45";
		shoesPrice = 525.45;
		document.getElementById('chosenShoes').innerHTML = "Buckled Ankle Boots ";
		shoeName = "Buckled Ankle Boots";
	};
	if(product == 2){
		content = "Featuring is a open toe strappy sandals that comes with an elastic slingback strap.<br /><br />Price: SGD$56.90";
		shoesPrice = 56.90;
		document.getElementById('chosenShoes').innerHTML = "Vinyl Insert Strappy Heels";
		shoeName = "Vinyl Insert Strappy Heels";
	};
	if(product == 3){
		content = "This is definitely one shoe you can't go without.<br />Material: Mirror metallic P<br /><br />Price: SGD$79.90";
		shoesPrice = 79.90;
		document.getElementById('chosenShoes').innerHTML = "Cap-Toe D'ORSAY Pumps";
		shoeName = "Cap-Toe D'ORSAY Pumps";
	};
	if(product == 4){
		content = "Shoes transform your body language and attitude. <br />They lift you physically and emotionally. – Christian Louboutin<br /><br />Price: SGD$850.00";
		shoesPrice = 850.00;
		document.getElementById('chosenShoes').innerHTML = "Valentino Garavani Rockstud Ankle Strap Heels ";
		shoeName = "Valentino Garavani Rockstud Ankle Strap Heels";
	};
	if(product == 5){
		content = "Featuring is a pair of classic black heels with a little twist.<br />Size Available: UK 2 – 7<br /><br />Price: SGD$39.90";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Gabby Pointy Heels ";
		shoeName = "Gabby Pointy Heels";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a classic bag with the iconic Tory Burch double T logo. <br /><br /> - Leather<br /><br />Price: SGD$525.35";
		bagPrice = 525.35;
		document.getElementById('chosenBag').innerHTML = "Tory Burch Kira Clutch ";
		bagName = "Tory Burch Kira Clutch";
	};
	if(product == 2){
		content = "This quilted clutch is the perfect match for evening wears. <br /><br />Price: SGD$265.00";
		bagPrice = 265.00;
		document.getElementById('chosenBag').innerHTML = "MICHAEL Michael Kors Elsie Quilted Box Clutch";
		bagName = "MICHAEL Michael Kors Elsie Quilted Box Clutch";
	};
	if(product == 3){
		content = "Featuring is a Zip fastening clutch that comes with a magnetic top flap tab closure.<br /><br />Price: SGD$89.50";
		bagPrice = 89.50;
		document.getElementById('chosenBag').innerHTML = "Tocco Tenero Jaded Clutch";
		bagName = "Tocco Tenero Jaded Clutch";
	};
	if(product == 4){
		content = "Add abit of edginess to your party wear with the Mini Cities Minaudiere.<br /><br />Price: SGD$24.90";
		bagPrice = 24.90;
		document.getElementById('chosenBag').innerHTML = "Mini Cities Minaudiere";
		bagName = "Mini Cities Minaudiere";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Stand out in the crowd with this artsy fatsy necklace. <br />- 16k Gold plated brass<br /><br />Price: SGD$598.60";
		accPrice = 598.60;
		document.getElementById('chosenAcc').innerHTML = "Monkey Short Necklace";
		accName = "Monkey Short Necklace";
	};
	if(product == 2){
		content = "Looking to spice up your outfit?<br /> Try this!<br /><br />Price: SGD$9.90";
		accPrice = 9.90;
		document.getElementById('chosenAcc').innerHTML = "Two Toned Stackable Ring Set";
		accName = "Two Toned Stackable Ring Set";
	};
	if(product == 3){
		content = "Add some edginess to your outfit with this necklace today!<br /><br />Price: SGD$19.90";
		accPrice = 19.90;
		document.getElementById('chosenAcc').innerHTML = "Pearl And Coin Layered Necklace";
		accName = "Pearl And Coin Layered Necklace";
	};
	if(product == 4){
		content = "Bring out the sophistication in you with this pair of Chomel Gala Earring.<br /><br />Price: SGD$16.00";
		accPrice = 16.00;
		document.getElementById('chosenAcc').innerHTML = "Chomel Gala Earring";
		accName = "Chomel Gala Earring";
	};
	if(product == 5){
		content = "Add some glamour to your outfit with our all-new south seashell pearl earring today!<br /><br />Price: SGD$26.00";
		accPrice = 26.00;
		document.getElementById('chosenAcc').innerHTML = "South Sea Shell Pearl Earring ";
		accName = "South Sea Shell Pearl Earring";
	};
	if(product == 6){
		content = "Be inspired by Bella Thorne and add abit of rock and roll to your gala wear.<br /><br />Price: SGD$7.90";
		accPrice = 7.90;
		document.getElementById('chosenAcc').innerHTML = "Spikes Cuff Bracelet ";
		accName = "Spikes Cuff Bracelet";
	};
	if(product == 7){
		content = "Be the talk of the town with this set of stackable ring.<br /><br />Price: SGD$8.90";
		accPrice = 8.90;
		document.getElementById('chosenAcc').innerHTML = "Stackable Ring Sets ";
		accName = "Stackable Ring Sets";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}