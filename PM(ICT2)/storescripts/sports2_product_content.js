var totalPrice = 0;
var topPrice = 89.90;
var botPrice = 24.90;
var shoesPrice = 34.90;
var bagPrice = 39.90;
var accPrice = 310.00;
var swimName = "Funfit Racing Horses Swimsuit";
var botName = "Something Borrowed Crochet Panel Top";
var shoeName = "Ripples Anchor Flip Flop Wedges";
var bagName = "Rip Curl Reptile Festival Bag";
var accName = "Ray-Ban Clubmaster Classic Sunglasses";


function swimSuitChangeTxt(product){
	var content;
	if(product == 1){
		content = "This summer, be inspired by Kristen Dunst.<br />Swim Suit comes with Stretchable nylon blend, padded cups, halter neckline and self tie fastening.<br/><br/>Price: SGD$89.90";
		topPrice = 89.90;
		document.getElementById('chosenSwimSuit').innerHTML = "ITEM: <br/>Funfit Racing Horses Swimsuit";
		swimName = "Funfit Racing Horses Swimsuit";
	};
	if(product == 2){
		content = "Looking for something more conservative? Try this! <br />It comes with a Stretchable polyblend and Halter neckline <br/><br/>Price: SGD$49.90";
		topPrice = 49.90;
		document.getElementById('chosenSwimSuit').innerHTML = "ITEM: <br/>Bella Kini Ribbon Tankini Shorts Set";
		swimName = "Bella Kini Ribbon Tankini Shorts Set";
	};
	if(product == 3){
		content = "Featuring is a two piece bikini set. Get inspired by Bella Thorne and get yours today!<br/><br/>Price: SGD$76.90 <br/><br/>Size UK 4- 16 Available <br/>*Check size Chart";
		topPrice = 76.90;
		document.getElementById('chosenSwimSuit').innerHTML = "ITEM: <br/>Aztec Surf Bikini Set";
		swimName = "Aztec Surf Bikini Set";
	};
	if(product == 4){
		content = "Looking for a swim suit just like Taylor swift, this might just be the one for you! Conservative but chic. Comes with a stretchable polyamide blend and a halter neckline<br/><br/>Price: SGD$109.00";
		topPrice = 109.00;
		document.getElementById('chosenSwimSuit').innerHTML = "ITEM: <br/>Bella Kini Full Piece Rouch Swimsuit";
		swimName = "Bella Kini Full Piece Rouch Swimsuit";
	};
	if(product == 5){
		content = "Think that no bikini suits your bust size, fear not. This piece features a self tie ends and is the perfect bikini for a day at the beach.<br/><br/>Price: SGD$45.90 <br/><br/>Free Size";
		topPrice = 45.90;
		document.getElementById('chosenSwimSuit').innerHTML = "ITEM: <br/>Bella Kini Bandeau Bikini Set";
		swimName = "Bella Kini Bandeau Bikini Set";
	};
	document.getElementById('swimSuitContent').innerHTML = content;
	updateSummary();
}

function throwOversChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a crochet blouse that is loose fitted, slightly sheer and comes with an open back design.<br/><br/>Price: SGD$24.90";
		botPrice = 24.90;
		document.getElementById('chosenThrowOvers').innerHTML = "Something Borrowed Crochet Panel Top";
		botName = "Something Borrowed Crochet Panel Top";
	};
	if(product == 2){
		content = "Be inspired by Kristen Thorne and throw this top on your bikini.<br/><br/>Price: SGD$63.90 <br /><br /> Material: 100% cotton <br/><br/> Size UK S- L Available";
		botPrice = 63.90;
		document.getElementById('chosenThrowOvers').innerHTML = "White Crochet Front Crop Tee";
		botName = "White Crochet Front Crop Tee";
	};
	if(product == 3){
		content = "Need Something to throw on your bikini? Try this! Comes with drawstring hem to customized to your fit.<br/><br/>Price: SGD$79.00 <br/><br/>Size S- L Available";
		botPrice = 79.00;
		document.getElementById('chosenThrowOvers').innerHTML = "Swim Loose Tee";
		botName = "Swim Loose Tee";
	};
	document.getElementById('throwOversContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a chic pair of slippers for a day at the beach? Try this!<br/><br /> - Synthetic upper<br /> - EVA Rubber insole<br/><br/>Price: SGD$34.90";
		shoesPrice = 34.90;
		document.getElementById('chosenShoes').innerHTML = "Ripples Anchor Flip Flop Wedges";
		shoeName = "Ripples Anchor Flip Flop Wedges";
	};
	if(product == 2){
		content = "Looking for a pair of inexpensive flip flops? Try this! <br/><br/>Price: SGD$19.90 <br/><br/> Sizes available: US 6- 9";
		shoesPrice = 19.90;
		document.getElementById('chosenShoes').innerHTML = "Ripples Raindrop Flip Flops";
		shoeName = "Ripples Raindrop Flip Flops";
	};
	if(product == 3){
		content = "Think you are more of a girly girl, this is definitely the pair of slippers for you. <br/><br/>Price: SGD$95.00 <br/><br/> Size Available: US 5- 9";
		shoesPrice = 95.00;
		document.getElementById('chosenShoes').innerHTML = "Melissa Harmonic Glitter Bow Flip Flops";
		shoeName = "Melissa Harmonic Glitter Bow Flip Flops";
	};
	if(product == 4){
		content = "Looking for a pair of chic sandals to last you just through this summer? Try this! <br/><br/>Price: SGD$12.00 <br/><br/> Sizes Available: Uk 34- 41";
		shoesPrice = 12.00;
		document.getElementById('chosenShoes').innerHTML = "Rubi Cleo Sandals";
		shoeName = "Rubi Cleo Sandals";
	};
	if(product == 5){
		content = " Featuring is a pair of slippers from Melissa that is infused with its signature bubble-gum scent <br/><br/>Price: SGD$104.00 <br/><br/> Sizes Available: US 5- 9";
		shoesPrice = 104.00;
		document.getElementById('chosenShoes').innerHTML = "Melissa Harmonic + Jason Wu II Flip Flops";
		shoeName = "Melissa Harmonic + Jason Wu II Flip Flops";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Bring your edginess to the beach with this bag.<br /><br /> Material: Polyurethane <br/><br/>Price: SGD$39.90";
		bagPrice = 39.90;
		document.getElementById('chosenBag').innerHTML = "Rip Curl Reptile Festival Bag";
		bagName = "Rip Curl Reptile Festival Bag";
	};
	if(product == 2){
		content = "Featuring is an ALDO bag with a removable inner compartment that can be use as a cross body. <br /><br /> Price: SGD$89.00";
		bagPrice = 89.00;
		document.getElementById('chosenBag').innerHTML = "Aldo Erroinbu Bag";
		bagName = "Aldo Erroinbu Bag";
	};
	if(product == 3){
		content = "Be inspired, Be brave, Be bold. Want to be all of that? Try this!<br /> Featuring is an aztec print bag that brings out the edginess in you. <br/><br/>Price: SGD$19.95";
		bagPrice = 19.95;
		document.getElementById('chosenBag').innerHTML = "Rubi The Market Carryall";
		bagName = "Rubi The Market Carryall";
	};
	if(product == 4){
		content = "Featuring is a lightweight bag from puma. Made of nylon and comes with adjustable strap. <br/><br/>Price: SGD$39.00";
		bagPrice = 39.00;
		document.getElementById('chosenBag').innerHTML = "Puma Fit AT Shoulder Bag";
		bagName = "Puma Fit AT Shoulder Bag";
	};
	if(product == 5){
		content = "Looking for a unique beach bag? Try this. <br/><br/>Price: SGD$63.90";
		bagPrice = 63.90;
		document.getElementById('chosenBag').innerHTML = "Scarf Print Tote Bag";
		bagName = "Scarf Print Tote Bag";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Be part of the trend and get the latest sunglasses today! <br/><br/>Price: SGD$310.00";
		accPrice = 310.00;
		document.getElementById('chosenAcc').innerHTML = "Ray-Ban Clubmaster Classic Sunglasses";
		accName = "Ray-Ban Clubmaster Classic Sunglasses";
	};
	if(product == 2){
		content = "Shield the sun, protect your eyes with a pair of sunglasses today! <br/><br/>Price: SGD$280.00";
		accPrice = 280.00;
		document.getElementById('chosenAcc').innerHTML = "Ray-Ban Erika Velvet Sunglasses";
		accName = "Ray-Ban Erika Velvet Sunglasses";
	};
	if(product == 3){
		content = "Shield the sun, protect your skin with our crochet raffia hat today! <br/><br/>Price: SGD$59.90";
		accPrice = 59.90;
		document.getElementById('chosenAcc').innerHTML = "Bella Kini Crochet Raffia Hat";
		accName = "Bella Kini Crochet Raffia Hat";
	};
	if(product == 4){
		content = "Be inspired by Selena Gomez and get your pair of sunnies today!<br/><br/>Price: SGD$390.00";
		accPrice = 390.00;
		document.getElementById('chosenAcc').innerHTML = "Ray-Ban Wayfarer Flat Metal Polarized Sunglasses";
		accName = "Ray-Ban Wayfarer Flat Metal Polarized Sunglasses";
	};
	if(product == 5){
		content = "Want to get the retro vibe and look like Taylor Swift? Try this hat now! <br/><br/>Price: SGD$49.90";
		accPrice = 49.90;
		document.getElementById('chosenAcc').innerHTML = "Bella Kini Straw Hat";
		accName = "Bella Kini Straw Hat";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}