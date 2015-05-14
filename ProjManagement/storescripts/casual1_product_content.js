var totalPrice = 0;
var topPrice = 29.90;
var botPrice = 48.40;
var shoesPrice = 44.90;
var bagPrice = 59.00;
var accPrice = 35.00;
var topName = "Catnel Crop Top";
var botName = "Indigo ‘Lyla’ High Waist Tube Pants";
var shoeName = "PU Leather Wedge Sneakers With Straps";
var bagName = "MANGO Small Tote Bag";
var accName = "Kaille Sunglasses ALDO";

function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Thinking of dressing like Kendall Jenner, this is definitely the top for you! It features a cute little feline with the word Catnel imprinted on it. <br/><br/>Price: SGD$29.90 <br/><br/>Size UK 34-46 available <br/>*Check size Chart";
		topName = "Catnel Crop Top";
		topPrice = 29.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Catnel Crop Top";
	};
	if(product == 2){
		content = "Featuring is a Black Babydoll Blouse from mango. It has bow patterns, as well as a keyhole at the back. It comes with a contrasting collar and is the perfect blouse for any casual events. <br/><br/>Price: SGD$55.20";
		topName = "Black Babydoll Blouse";
		topPrice = 55.20;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Black Babydoll Blouse";
	};
	if(product == 3){
		content = "Think you are looking for a crop top to battle the hot weather? Try this polka dot blouse and be inspired to dress just like Vanessa Hudgens! <br/><br/>Price: SGD$13.90";
		topName = "Polka Dot Denim";
		topPrice = 13.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Polka Dot Denim";
	};
	if(product == 4){
		content = "Featuring is a top from River Island quite similar to the one Selena Gomez was wearing. Pair this with a pair of jeans and heels; you will be ready to hit the streets. This asymmetric hem comes with an exposed gold tone zipper at the back. <br/><br/>Price: SGD$54.90";
		topName = "Black Wrap Crop Top";
		topPrice = 54.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Black Wrap Crop Top";
	};
	if(product == 5){
		content = "Crop top had been trending all around the world. Psst, Kylie Jenner was spotted in a crop top too. Get yours today! <br/><br/>Price: SGD$63.20 <br/><br/> Material: polyester97%, polyurethane 3% mesh: polyeaster100%, rib: polyester 98% polyurethane 2%";
		topName = "Bar Code Pattern (Black and White)";
		topPrice = 63.20;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Bar Code Pattern (Black and White)";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "To rock this, simply pair this with a tee shirt and you are ready to go. It features a side zip and gold threads. It has an elastic waistband. <br/><br/>Price: SGD$48.40 <br/><br/>Size Uk 6- 16 Available <br/>*Check size Chart";
		botName = "Indigo ‘Lyla’ High Waist Tube Pants";
		botPrice = 48.40;
		document.getElementById('chosenBot').innerHTML = "Indigo ‘Lyla’ High Waist Tube Pants";
	};
	if(product == 2){
		content = "Featuring is a beautiful ruffled hem skirt. It can be paired with any blouse or plain t-shirts. It was inspired by Ariana Grande. <br/><br/>Price: SGD$34.90";
		botName = "Flare Skirt";
		botPrice = 34.90;
		document.getElementById('chosenBot').innerHTML = "Flare Skirt";
	};
	if(product == 3){
		content = "Think the weather is too humid and Jeans is not going your way? Why not try this!! This blue bleach shorts was manufactured by Dorothy Perkins. It comes with a twin pocket. <br/><br/>Price: SGD$39.90";
		botName = "Blue Bleach Shorts Dorothy Perkins";
		botPrice = 39.90;
		document.getElementById('chosenBot').innerHTML = "Blue Bleach Shorts Dorothy Perkins";
	};
	if(product == 4){
		content = "Featured is a Navy Jersey legging. It comes with an elastic waist band. <br/><br/>Price: SGD$19.90 <br/><br/> S- Waist 28.5 <br/> M- Waist 30.5 <br/> L- Waist 32.5";
		botName = "Jeggings";
		botPrice = 19.90;
		document.getElementById('chosenBot').innerHTML = "Jeggings";
	};
	if(product == 5){
		content = "The skirt features two mini border front pocket and is great for any casual activities. <br/><br/>Price: SGD$63.20 <br/><br/> Material: polyester 92%,polyuerthane 8% attached fabric: polyester 91%, polyurethane 9%";
		botName = "Double Pocket Neoprene Skirt";
		botPrice = 63.20;
		document.getElementById('chosenBot').innerHTML = "Double Pocket Neoprene Skirt";
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a wedge sneakers straps. This is definitely the pair of shoe for everday wear. It’s surface comes with a padded topline for extra comfort. <br/> -Synthetic upper leather <br/>-Fastening stap: Velcro <br/><br/>Price: SGD$44.90 <br/><br/>Sizes available: US 5- 10";
		shoeName = "PU Leather Wedge Sneakers With Straps";
		shoesPrice = 44.90;
		document.getElementById('chosenShoes').innerHTML = "PU Leather Wedge Sneakers With Straps";
	};
	if(product == 2){
		content = "Think you are looking for a pair of platform heels just like Ari’s? This is definitely the pair of heels for you. <br/><br/> -Leather upper <br/> -Metal pin buckle for fastening is adjustable <br/><br/>Price: SGD$140.00 <br/><br/> Sizes available: US 5- 7.5";
		shoeName = "Nine West Black Cozelle Platform Heels";
		shoesPrice = 140.00;
		document.getElementById('chosenShoes').innerHTML = "Nine West Black Cozelle Platform Heels";
	};
	if(product == 3){
		content = "Inspiring to look like Selena Gomez? Try this pair of sandals! It has black studded strap and features a strappy front. <br/><br/> -Upper synthetic <br/> -Adjustable buckle <br/><br/>Price: SGD$199.00 <br/><br/> Size Available: US 5- 10";
		shoeName = "Studded Strap Sandals";
		shoesPrice = 199.00;
		document.getElementById('chosenShoes').innerHTML = "Studded Strap Sandals";
	};
	if(product == 4){
		content = "This mid high boots features a side zip and is pretty versatile. Get this and dress like Vanessa Hudgens today! <br/><br/> -Lace up <br/>-Side Zip <br/><br/>Price: SGD$39.90 <br/><br/> Sizes Available: US 5- 10";
		shoeName = "Adalyn Mid High Zip-Up Boots";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Adalyn Mid High Zip-Up Boots";
	};
	if(product == 5){
		content = "Looking for a pair of pointed platform ankle boots? This might just be the thing for you ~ <br/> It comes with a high wrapped heel featuring a chain strap and a side zip closure. <br/><br/>Price: SGD$119.90 <br/><br/> Material: Combination of calf suede and leather <br/> Shoe Type: Boots <br/> Heel Height: Approximately 115mm";
		shoeName = "Detailed Chain Suede Ankle booties";
		shoesPrice = 119.90;
		document.getElementById('chosenShoes').innerHTML = "Detailed Chain Suede Ankle booties";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for something reasonable yet edgy? This is the bag for you! Featuring Mango small tote bag with a zipper and a strap. Bag is ready for expansion anytime. <br/><br/> -PVC Leather <br/>-Magnetic tab for closure <br/><br/>Price: SGD$59.00";
		bagName = "MANGO Small Tote Bag";
		bagPrice = 59.00;
		document.getElementById('chosenBag').innerHTML = "MANGO Small Tote Bag";
	};
	if(product == 2){
		content = "Looking for a bag somewhat similar to the Ari has? Try this! Featuring is a quilted River Island bag with gold tone tab and tassel charm. <br/><br/> -Synthetic Leather <br/>-Strap <br/>-Zipper <br/><br/>Price: SGD$49.90";
		bagName = "Black Quilted Cross Body Bag";
		bagPrice = 49.90;
		document.getElementById('chosenBag').innerHTML = "Black Quilted Cross Body Bag";
	};
	if(product == 3){
		content = "Looking for a light purse to carry around instead of a big bag? Try this! This look somewhat like the one Vanessa Hudgens was holding when she was walking at the patrol station. It features a silver metal tone hardware. <br/><br/> -Polyurethane <br/> -Zipper <br/> -Has two inner compartments <br/><br/>Price: SGD$14.90";
		bagName = "River Island Brown Snake Mini Zip Around Purse";
		bagPrice = 14.90;
		document.getElementById('chosenBag').innerHTML = "River Island Brown Snake Mini Zip Around Purse";
	};
	if(product == 4){
		content = "Featuring is a Red medium tote by Jane Shilton. It has a twin handle and some gold metal details. <br/><br/>-Leather <br/> -Zipper <br/><br/>Price: SGD$259.00";
		bagName = "Jane Shilton Groove Medium Tote (RED)";
		bagPrice = 259.00;
		document.getElementById('chosenBag').innerHTML = "Jane Shilton Groove Medium Tote (RED)";
	};
	if(product == 5){
		content = "Looking for a chic and modern looking bag? This bag might just be the bag for you. It features a Synthetic leather and tasselled drawstrings. The interior is lined. <br/><br/>Price: SGD$19.95";
		bagName = "RUBI Mini Bucket Bag";
		bagPrice = 19.95;
		document.getElementById('chosenBag').innerHTML = "RUBI Mini Bucket Bag";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Shield the sun and dress just like Kendall Jenner!! <br/><br/>Price: SGD$35.00";
		accName = "Kaille Sunglasses ALDO";
		accPrice = 35.00;
		document.getElementById('chosenAcc').innerHTML = "Kaille Sunglasses ALDO";
	};
	if(product == 2){
		content = "Featuring is a beaded pink hair accessory. Dress up a plain outfit with this today! <br/><br/>Price: SGD$7.90";
		accName = "Handstitched Beaded Alligator Clip";
		accPrice = 7.90;
		document.getElementById('chosenAcc').innerHTML = "Handstitched Beaded Alligator Clip";
	};
	if(product == 3){
		content = "A floppy hat is a daily essential. Block the sun today! <br/><br/> -Polyblend <br/><br/>Price: SGD$45.00";
		accName = "Wool Felt Round Floopy Hat";
		accPrice = 45.00;
		document.getElementById('chosenAcc').innerHTML = "Wool Felt Round Floopy Hat";
	};
	if(product == 4){
		content = "Shield from the sun with this sunglass today! Psst… Selena Gomez was wearing one just like it! <br/><br/> -Synthetic <br/><br/>Price: SGD$14.95";
		accName = "RUBI LC Sunnies";
		accPrice = 14.95;
		document.getElementById('chosenAcc').innerHTML = "RUBI LC Sunnies";
	};
	if(product == 5){
		content = "Looking for a minimalistic and chunky necklace? Try this!! <br/><br/> -Fabric and metal <br/> -Slot-through fastening <br/> -Non-adjustable length <br/><br/>Price: SGD$32.00";
		accName = "CLYDE Necklace";
		accPrice = 32.00;
		document.getElementById('chosenAcc').innerHTML = "CLYDE Necklace";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}