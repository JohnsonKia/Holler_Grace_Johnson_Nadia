var totalPrice = 0;
var topPrice = 27.90;
var outterWearPrice = 53.90;
var botPrice = 23.90;
var shoesPrice = 29.90;
var bagPrice = 20.90;
var accPrice = 269.00;
var topName = "Embossed Cropped Top";
var outName = "Inner Circle Northern Light Jacket";
var botName = "Textured Pencil Skirt";
var shoeName = "Esstella Pointy Heels";
var bagName = "Black Metal Bar Twist Lock Clutch";
var accName = "Daniel Wellington Classic York Lady Rose Gold";

function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a sleeveless textured surface top inspired by Jennifer Aniston.<br />It comes with a round neckline and back zip. <br /><br />Price: SGD$27.90<br /><br />";
		topPrice = 27.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Embossed Cropped Top";
		topName = "Embossed Cropped Top";
	};
	if(product == 2){
		content = "Looking for a dress like Megan Fox?<br />Try this!<br />Dress comes with an asymmetrical hemline.<br /><br />Price: SGD$32.90";
		topPrice = 32.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Neckline Fit And Flare Dress";
		topName = "Neckline Fit And Flare Dress";
	};
	if(product == 3){
		content = "Want a blouse like Reese Witherspoon?<br />Try this!<br /><br />- Rayon<br />- Standard colla <br /><br />Price: SGD$27.90";
		topPrice = 27.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Lace Up Front Woven Blouse";
		topName = "Lace Up Front Woven Blouse";
	};
	if(product == 4){
		content = "Looking for a chic and minimalistic outlook for a day job?<br />Try this Sequin Lace Pencil Dress!<br /><br />- Polyblend<br />- Round neckline<br /><br />Price: SGD$75.10";
		topPrice = 75.10;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Sequin Lace Pencil Dress";
		topName = "Sequin Lace Pencil Dress";
	};
	if(product == 5){
		content = "This top is both bold and classic. <br />Match this with any pair of pants and you are good to go. <br /><br />Price: SGD$28.00 ";
		topPrice = 28.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Kyle Peplum Top ";
		topName = "Kyle Peplum Top";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}

function outterWearChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a classy tweed finish jacket by Inner Circle. <br />Made of polyblend and comes with a round neckline.<br /><br />Price: SGD$53.90";
		outterWearPrice = 53.90;
		document.getElementById('chosenOutterWear').innerHTML = "Inner Circle Northern Light Jacket";
		outName = "Inner Circle Northern Light Jacket";
	};
	if(product == 2){
		content = "You don't have to dress seductively to look fashionable. <br />Pair this cardigan with a pair of belt like VB and you are ready to hit the office.<br /><br />Price: SGD$39.00";
		outterWearPrice = 39.00;
		document.getElementById('chosenOutterWear').innerHTML = "Round Neck Cardigan ";
		outName = "Round Neck Cardigan";
	};
	document.getElementById('outterWearContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "Think you need a twist to your pair of black skirt? <br />Try this high waisted textured black pencil skirt featuring a bold buckle belt and a slit down the front. <br /><br />Price: SGD$23.90";
		botPrice = 23.90;
		document.getElementById('chosenBot').innerHTML = "Textured Pencil Skirt ";
		botName = "Textured Pencil Skirt";
	};
	if(product == 2){
		content = "Looking for an outstanding skirt to match with a plain blouse? <br />Try this floral based porcelain inspired design today!<br /><br />Price: SGD$12.45";
		botPrice = 12.45;
		document.getElementById('chosenBot').innerHTML = "Printed Pencil Skirt ";
		botName = "Printed Pencil Skirt";
	};
	if(product == 3){
		content = "This versatile skirt is a must have in your wardrobe. <br />Get yours today!<br /><br />Price: SGD$19.90";
		botPrice = 19.90;
		document.getElementById('chosenBot').innerHTML = "Rib Midi Pencil Skirt ";
		botName = "Rib Midi Pencil Skirt";
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Think you need a pair of basic heels?<br />Try this!<br />Available size: UK 2- 7 <br /><br />Price: SGD$29.90";
		shoesPrice = 29.90;
		document.getElementById('chosenShoes').innerHTML = "Esstella Pointy Heels ";
		shoeName = "Esstella Pointy Heels";
	};
	if(product == 2){
		content = "Be inspired by Megan Fox and get your own pair of dazzling shiny heels. <br />Comes with a pointed toecap and synthetic upper. <br /><br />Price: SGD$34.90";
		shoesPrice = 34.90;
		document.getElementById('chosenShoes').innerHTML = "Mid Heel Pumps ";
		shoeName = "Mid Heel Pumps";
	};
	if(product == 3){
		content = "Featuring is a classic, minimalistic heels from something borrowed.<br />Available Size: UK 3 - 8<br /><br />Price: SGD$27.90";
		shoesPrice = 27.90;
		document.getElementById('chosenShoes').innerHTML = "Pointed Heel Pump ";
		shoeName = "Pointed Heel Pump";
	};
	if(product == 4){
		content = "Need a twist to your office wear? <br />Try this open toes shoe today!<br /><br />Price: SGD$39.90";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Melody Peeptoe Platform Heels ";
		shoeName = "Melody Peeptoe Platform Heels";
	};
	if(product == 5){
		content = " Get your pair of classic yellow pumps here today!<br />Size Available: UK 2 - 6 <br /><br />Price: SGD$34.90";
		shoesPrice = 34.90;
		document.getElementById('chosenShoes').innerHTML = "Crayon Print Pointed Toe Heels ";
		shoeName = "Crayon Print Pointed Toe Heels";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Add a twist to your outfit today with a black metal bar twist lock clutch. <br />It features a gold tone hardware and a top flap twist-lock closure.<br /><br />Price: SGD$20.90";
		bagPrice = 20.90;
		document.getElementById('chosenBag').innerHTML = "Black Metal Bar Twist Lock Clutch ";
		bagName = "Black Metal Bar Twist Lock Clutch";
	};
	if(product == 2){
		content = "Think you would like to set a bold statement like Megan Fox? <br />Try this timeless clutch today! <br />Comes with gold metal tone details and chain straps.<br /><br />Price: SGD$29.90";
		bagPrice = 29.90;
		document.getElementById('chosenBag').innerHTML = "Snakeskin Metal Corner Long Clutch";
		bagName = "Snakeskin Metal Corner Long Clutch";
	};
	if(product == 3){
		content = "Need a bag to store your office documents? <br />Try this triple compartment bag today!<br /><br />-	Polyurethane<br />-	Twin grab handles<br />-	Removable strap<br /><br />Price: SGD$89.00";
		bagPrice = 89.00;
		document.getElementById('chosenBag').innerHTML = "Pebbled Tote Bag";
		bagName = "Pebbled Tote Bag";
	};
	if(product == 4){
		content = "Looking for a classic quilted bag? <br />Try this!<br /><br />- Leather<br /><br />Price: SGD$199.00";
		bagPrice = 199.00;
		document.getElementById('chosenBag').innerHTML = "Patent Leather Sling Bag";
		bagName = "Patent Leather Sling Bag";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a classic dark brown crocodile leather strap watch from DW. <br />Size (Diameter): 36mm<br />Casing Height: 6mm<br /><br />Price: SGD$269.00";
		accPrice = 269.00;
		document.getElementById('chosenAcc').innerHTML = "Daniel Wellington Classic York Lady Rose Gold";
		accName = "Daniel Wellington Classic York Lady Rose Gold";
	};
	if(product == 2){
		content = "Add some edginess to your outfit with this pearl ring today!<br /><br />Price: SGD$7.90";
		accPrice = 7.90;
		document.getElementById('chosenAcc').innerHTML = "Statement Pearl Ring";
		accName = "Statement Pearl Ring";
	};
	if(product == 3){
		content = "Looking for a chic and fashionable sunnies?<br />Try this Tea D-Frame sunglasses today!<br /><br />Price: SGD$14.90";
		accPrice = 14.90;
		document.getElementById('chosenAcc').innerHTML = "D-Frame Sunglasses ";
		accName = "D-Frame Sunglasses";
	};
	if(product == 4){
		content = "Featuring is a classic and iconic watch by fossil. <br />- Rose Gold<br /><br />Price: SGD$289.00";
		accPrice = 289.00;
		document.getElementById('chosenAcc').innerHTML = "Fossil Chelsey ES3720 Watch";
		accName = "Fossil Chelsey ES3720 Watch";
	};
	if(product == 5){
		content = "Need an accessory to brighten your outfit? <br />Try this gold twist bangle today!<br /><br />Price: SGD$10.90";
		accPrice = 10.90;
		document.getElementById('chosenAcc').innerHTML = "Twist Bangle";
		accName = "Twist Bangle";
	};
	if(product == 6){
		content = "Featuring is a gold tone frame sunglasses from River Island.<br /><br />Price: SGD$24.90";
		accPrice = 24.90;
		document.getElementById('chosenAcc').innerHTML = "Brown Tortoise Shell Aviator Sunglasses";
		accName = "Brown Tortoise Shell Aviator Sunglasses";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + outterWearPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}