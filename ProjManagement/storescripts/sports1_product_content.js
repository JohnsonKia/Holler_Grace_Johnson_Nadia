var totalPrice = 0;
var topPrice = 109.00;
var botPrice = 69.00;
var shoesPrice = 139.00;
var bagPrice = 59.00;
var accPrice = 590.00;
var topName = "Mountain Clash Hoodie";
var botName = "Ultimate Fit Tights";
var shoeName = "Superstar Up Shoes";
var bagName = "Beachshopper Bag";
var accName = "Studio Wireless Headset by Dre.Beats";

function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Hit the gym by dressing like Vanessa Hudgens in this scenic mountain hoodie. <br />Comes with side seam pockets and an adjustable drawcord hoodie. <br /><br />- 85% Polyester <br />- 15% French Terry <br/><br/>Price: SGD$109.00 <br/><br/>Size XS- L Available";
		topPrice = 109.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Mountain Clash Hoodie";
		topName = "Mountain Clash Hoodie";
	};
	if(product == 2){
		content = "Looking for a light weight tank top to gym in? Try this. <br />It features a round neckline and a zipper at the back. <br/><br/>Price: SGD$29.95 <br/><br/>Size XS- XL Available <br/>*Check size Chart";
		topPrice = 29.95;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Factorie Sachi Tank";
		topName = "Factorie Sachi Tank";
	};
	if(product == 3){
		content = "Featuring is a lightweight tanktop with a racer back style, made with a cool polyester material. <br />Fit for gym. <br/><br/>Price: SGD$49.00 <br/><br/>Size S- XL Available <br/>*Check size Chart";
		topPrice = 49.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Funfit Active Tank Top";
		topName = "Funfit Active Tank Top";
	};
	if(product == 4){
		content = "Try our all new racerback sports bra now! We've got you covered for gym. <br /><br />- Polyblend <br />- Scoop Neckline <br />- Elastic Waistband<br/><br/>Price: SGD$45.00 <br/><br/>Size S- XL Available";
		topPrice = 45.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Funfit Basic Racerback Sports Bra";
		topName = "Funfit Basic Racerback Sports Bra";
	};
	if(product == 5){
		content = "Looking for a climate polo T-shirt to exercise in? This is the one for you.<br/><br/>Price: SGD$64.00 <br/><br/> Material: polyester100%<br/><br/>Size S- XL Available <br/>*Check size Chart";
		topPrice = 64.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Women's Tennis Barricade Polo Shirt";
		topName = "Women's Tennis Barricade Polo Shirt";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "Rock this tights with any T-shirt/ hoodie and you are ready to hit the gym. <br /> These women's climate helps to cut sweat out of your training. <br/><br/>Price: SGD$69.00 <br/><br/>Size 2XS- L Available <br/>*Check size Chart";
		botPrice = 69.00;
		document.getElementById('chosenBot').innerHTML = "Ultimate Fit Tights";
		botName = "Ultimate Fit Tights";
	};
	if(product == 2){
		content = "Who says you can't be fashionable when you exercise? Featuring is a grey leggings inspired by Vanessa Hudgens.<br/><br/>Price: SGD$34.00 <br /><br /> Material: 90% cotton, 5% elastane single jersey, 5% organic cotton <br/><br/>Size 2XS- XL Available <br/>*Check size Chart";
		botPrice = 34.00;
		document.getElementById('chosenBot').innerHTML = "Women's Leggings";
		botName = "Women's Leggings";
	};
	if(product == 3){
		content = "Found leggings to be too hot? Try this style! <br /><br /> - Polyblend <br />- Elastic waistband <br /> - Stretchable<br/><br/>Price: SGD$49.90 <br/><br/>Size S- L Available";
		botPrice = 49.90;
		document.getElementById('chosenBot').innerHTML = "Funfit Shorts With Reflective Brand Logo";
		botName = "Funfit Shorts With Reflective Brand Logo";
	};
	if(product == 4){
		content = "Want to look fashionable and yet comfortable? This is the pants for you. Be inspired by Vanessa Hudgens.<br/><br/>Price: SGD$44.00 <br/><br/> <br/><br/>Size 2XS- XL Available <br/>*Check size Chart";
		botPrice = 44.00;
		document.getElementById('chosenBot').innerHTML = "Slouchy Pants";
		botName = "Slouchy Pants";
	};
	if(product == 5){
		content = "Hit the gym with a fresh new style this season. Featuring a drop-crotch three-quarter pants that was made with climate.<br/><br/>Price: SGD$69.00 <br/><br/>Size 2XS- XL Available <br/>*Check size Chart";
		botPrice = 69.00;
		document.getElementById('chosenBot').innerHTML = "Workout Pants";
		botName = "Workout Pants";
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "When you hit the gym, it is advisable to get a good pair of shoes to ensure comfort throughout exercises. <br/><br /> - Full grain leather upper<br /> - Synthetic leather<br /> - 4 cm inner wedge<br/> - 4 cm inner wedge <br/><br/>Price: SGD$139.00";
		shoesPrice = 139.00;
		document.getElementById('chosenShoes').innerHTML = "Superstar Up Shoes";
		shoeName = "Superstar Up Shoes";
	};
	if(product == 2){
		content = "Think you are looking for a pair of sports shoe inspired by Vanessa Hudgens? This is definitely the pair of shoes for you. <br/><br/>Price: SGD$189.00 <br/><br/> Sizes available: US 4- 8";
		shoesPrice = 189.00;
		document.getElementById('chosenShoes').innerHTML = "ADIZERO BOSTON 5 W";
		shoeName = "ADIZERO BOSTON 5 W";
	};
	if(product == 3){
		content = "Try this pair of slippers from adidas for your after gym. Be part of the trend. Psst.. Vanessa Hudgens has a pair as well. <br/><br/>Price: SGD$35.00 <br/><br/> Size Available: US 8- 12";
		shoesPrice = 35.00;
		document.getElementById('chosenShoes').innerHTML = "Duramo Slide";
		shoeName = "Duramo Slide";
	};
	if(product == 4){
		content = "Featuring is a pair of birkens that is pretty much in trend. Get this for your after gym. Be part of the trend. <br/><br/>Price: SGD$99.00 <br/><br/> Sizes Available: Uk 35- 38";
		shoesPrice = 99.00;
		document.getElementById('chosenShoes').innerHTML = "Birkenstock Arizona Collection Sandals";
		shoeName = "Birkenstock Arizona Collection Sandals";
	};
	if(product == 5){
		content = " This pair of runners is perfect for any gym activities. Try it today! <br/><br/>Price: SGD$159.00 <br/><br/> Sizes Available: US 4- 8";
		shoesPrice = 159.00;
		document.getElementById('chosenShoes').innerHTML = "Barricade V Classic W";
		shoeName = "Barricade V Classic W";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a bag to store your gym clothes etc? Try this!!<br /> Features a zip and an inner side pocket<br/><br/>Price: SGD$59.00";
		bagPrice = 59.00;
		document.getElementById('chosenBag').innerHTML = "Beachshopper Bag";
		bagName = "Beachshopper Bag";
	};
	if(product == 2){
		content = "Featuring is a lightweight bag with drawcord and zip pocket on the back. <br /><br /> Dimensions: 36 cm x 44 cm <br />100% polyester plain weave <br /><br /> Price: SGD$25.00";
		bagPrice = 25.00;
		document.getElementById('chosenBag').innerHTML = "Superstar Gym Sack";
		bagName = "Superstar Gym Sack";
	};
	if(product == 3){
		content = "Be inspired, Be brave, Be bold. Want to be all of that? Try this!<br /> Featuring a aztec print bag that brings out the edginess in you. <br/><br/>Price: SGD$69.00";
		bagPrice = 69.00;
		document.getElementById('chosenBag').innerHTML = "My Favourite Tote";
		bagName = "My Favourite Tote";
	};
	if(product == 4){
		content = "Be inspired by Vanessa Hudgens and get this bag today. <br/><br/>Price: SGD$69.00";
		bagPrice = 69.00;
		document.getElementById('chosenBag').innerHTML = "Mountain Sack Backpack";
		bagName = "Mountain Sack Backpack";
	};
	if(product == 5){
		content = "Looking for a gym bag that is chic and fashionable? Try this! <br/><br/>Price: SGD$49.00";
		bagPrice = 49.00;
		document.getElementById('chosenBag').innerHTML = "You Tote";
		bagName = "You Tote";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Be part of the trend and gym with a wireless headset. <br/><br/>Price: SGD$590.00";
		accPrice = 590.00;
		document.getElementById('chosenAcc').innerHTML = "Studio Wireless Headset by Dre.Beats";
		accName = "Studio Wireless Headset by Dre.Beats";
	};
	if(product == 2){
		content = "Beat the heat. Get a water bottle now! <br/><br/>Price: SGD$20.00";
		accPrice = 20.00;
		document.getElementById('chosenAcc').innerHTML = "Women's Poly Bottle";
		accName = "Women's Poly Bottle";
	};
	if(product == 3){
		content = "Shield the sun, protect your skin with our Didi stripe snapback today. <br/><br/>Price: SGD$67.00";
		accPrice = 67.00;
		document.getElementById('chosenAcc').innerHTML = "Lapalette Didi Stripe Snapback";
		accName = "Lapalette Didi Stripe Snapback";
	};
	if(product == 4){
		content = "Beat the sun! Get your own Ray-Bans today! <br/><br/> -Synthetic <br/><br/>Price: SGD$440.00";
		accPrice = 440.00;
		document.getElementById('chosenAcc').innerHTML = "Ray-Ban Wayfarer Liteforce Polarized Sunglasses";
		accName = "Ray-Ban Wayfarer Liteforce Polarized Sunglasses";
	};
	if(product == 5){
		content = "Think you need a watch for gym? Get this sport watch now! <br/><br/>Price: SGD$160.00";
		accPrice = 160.00;
		document.getElementById('chosenAcc').innerHTML = "Calgary Watch";
		accName = "Calgary Watch";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}