var totalPrice = 0;
var topPrice = 29.00;
var botPrice = 79.00;
var shoesPrice = 53.90;
var bagPrice = 79.90;
var accPrice = 76.00;
var topName = "Cuteway Crinkle Tank";
var botName = "Moto Pretty Blue Joni Jeans";
var shoeName = "Slip-On Sneakers";
var bagName = "Casual Shoulder Bag";
var accName = "River Island Black Textured Mini Satchel";


function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a basic tank to style just like Ariana Grande or Kylie Jenner? Try this! Sleeveless Tank Top. <br/><br/> -Polyester <br/>-2% Elastane <br/><br/>Price: SGD$29.00";
		topPrice = 29.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Cuteway Crinkle Tank";
		topName = "Cuteway Crinkle Tank";
	};
	if(product == 2){
		content = "Think the weather is too humid? <br/> Looking for a blouse just like Ari’s? <br/> Why not try this? <br/> Split back short sleeve tee! <br/><br/> -100% Polyester <br/><br/>Price: SGD$109.00";
		topPrice = 109.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Split Back Sequin Tee";
		topName = "Split Back Sequin Tee";
	};
	if(product == 3){
		content = "This basic top could be pair with a pair of shorts and you are ready to go. <br/><br/> -54% Polyester <br/> -28% Cotton <br/> -17% Viscose <br/> -1% Elastane <br/><br/>Price: SGD$66.00";
		topPrice = 66.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Petite Exclusive Jacquard Sweat";
		topName = "Petite Exclusive Jacquard Sweat";
	};
	if(product == 4){
		content = "Try the Kylie Jenner’s style with this tank and a pair of shorts! <br/><br/> -98% Polyester <br/>-2% Elastane <br/><br/>Price: SGD$29.00";
		topPrice = 29.00;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Cut-Away Crinkle Tank Top";
		topName = "Cut-Away Crinkle Tank Top";
	};
	if(product == 5){
		content = "Looking to dress like Taylor Swift? Try this navy stipe blouse today! <br/><br/> -Cotton <br/>-Long Sleeves <br/> -Round neckline <br/><br/>Price: SGD$24.90 ";
		topPrice = 24.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Scoop Back Stretch Jersey Tee";
		topName = "Scoop Back Stretch Jersey Tee";
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "High Rise Jeans with 2 back pockets and class trims. <br/><br/> -70% Cotton <br/> -26% Polyester <br/> -4% Elastane <br/><br/>Price: SGD$79.00";
		botPrice = 79.00;
		document.getElementById('chosenBot').innerHTML = "Moto Pretty Blue Joni Jeans";
		botName = "Moto Pretty Blue Joni Jeans";
	};
	if(product == 2){
		content = "High Rise Mom shorts with the classic trims. <br/><br/> -100% Cotton <br/><br/>Price: SGD$69.00";
		botPrice = 69.00;
		document.getElementById('chosenBot').innerHTML = "Moto Indigo Rinse Mom Shorts";
		botName = "Moto Indigo Rinse Mom Shorts";
	};
	if(product == 3){
		content = "High Rise Joni Jeans with back pocket. <br/> -64% Cotton <br/> -32% Polyester <br/> -4% Elastane <br/><br/>Price: SGD$79.00";
		botPrice = 79.00;
		document.getElementById('chosenBot').innerHTML = "Moto Black Joni Jeans";
		botName = "Moto Black Joni Jeans";
	};
	if(product == 4){
		content = "Looking for a pair of ripped denim shorts like the one Kylie Jenner was wearing, try this! Black shorts with classic trims. <br/><br/> -100% Cotton <br/><br/>Price: SGD$79.00";
		botPrice = 79.00;
		document.getElementById('chosenBot').innerHTML = "Moto Black Denim Ripped Hotpants";
		botName = "Moto Black Denim Ripped Hotpants";
	};
	if(product == 5){
		content = "Featuring is a mid-rise skinny jean with 5 pockets and a gold hardware. <br/><br/> *Note: Size runs a size bigger. <br/><br/> -Cotton <br/><br/>Price: SGD$31.20";
		botPrice = 31.20;
		document.getElementById('chosenBot').innerHTML = "MANGO Skinny Newpaty Jeans";
		botName = "MANGO Skinny Newpaty Jeans";
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "Think of skipping the heels and not wanting to look like a fashion disaster? Try this! Comes with a round toe front and quilted sides. <br/><br/>Price: SGD$53.90 <br/><br/> Label: CHARLES & KEITH <br/> AVAILABLE size 35-41";
		shoesPrice = 53.90;
		document.getElementById('chosenShoes').innerHTML = "Slip-On Sneakers";
		shoeName = "Slip-On Sneakers";
	};
	if(product == 2){
		content = "Rock the Kendall Jenner style with this pair of boots today! Comes with a lace-up front, a side zipper and a double buckle ankle strap. <br/><br/>Price: SGD$89.90 <br/><br/> Label: CHARLES & KEITH <br/> AVAILABLE size 35-41";
		shoesPrice = 89.90;
		document.getElementById('chosenShoes').innerHTML = "Double Buckle Calf Boots";
		shoeName = "Double Buckle Calf Boots";
	};
	if(product == 3){
		content = "Think of skipping fully covered boots? Try this! Comes with side openings and silver rim metal hardware. <br/><br/> -100% Leather <br/><br/>Price: SGD$173.00 <br/><br/> AVAILABLE size 36-42";
		shoesPrice = 173.00;
		document.getElementById('chosenShoes').innerHTML = "Aubery Silver Trim Ankle Boots";
		shoeName = "Aubery Silver Trim Ankle Boots";
	};
	if(product == 4){
		content = "Try rocking the Jenner’s sister look with this pair of booties. Comes with a lace-up front and a front buckle. <br/><br/> -100% Polyurethane <br/><br/>Price: SGD$106.90 <br/><br/> AVAILABLE size 36-42";
		shoesPrice = 106.90;
		document.getElementById('chosenShoes').innerHTML = "Bunk Hiker Boots";
		shoeName = "Bunk Hiker Boots";
	};
	if(product == 5){
		content = "Get the perfect Taylor Swift look in these booties today! Comes with gold hardware and a cross strap at the back. <br/><br/> -Synthetic leather <br/> -Almond toecap <br/><br/>Price: SGD$44.90";
		shoesPrice = 44.90;
		document.getElementById('chosenShoes').innerHTML = "Toni Mid-Calf Chunky Heel Boots";
		shoeName = "Toni Mid-Calf Chunky Heel Boots";
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a bag that is inspired by Taylor swift? Look no further! This might just be the perfect bag for you! Mid-sized  shoulder bag with double chain straps. <br/><br/> Label: CHARLES & KEITH <br/><br/>Price: SGD$79.90";
		bagPrice = 79.90;
		document.getElementById('chosenBag').innerHTML = "Casual Shoulder Bag";
		bagName = "Casual Shoulder Bag";
	};
	if(product == 2){
		content = "Classic Black Backpack with metal rim hardware. This is the perfect bag for any casual activities. <br/><br/> -100% Polyurethane <br/><br/>Price: SGD$79.00";
		bagPrice = 79.00;
		document.getElementById('chosenBag').innerHTML = "PU Backpack";
		bagName = "PU Backpack";
	};
	if(product == 3){
		content = "Think you love Kendall and Kylie Jenner? Try rocking their style with this bag! Medium Crossbody Bag. <br/><br/> -100% Polyurethane <br/><br/>Price: SGD$79.00";
		bagPrice = 79.00;
		document.getElementById('chosenBag').innerHTML = "Smart Crossbody Bag";
		bagName = "Smart Crossbody Bag";	};
	if(product == 4){
		content = "This classic black bag is the perfect back for any casual events. It comes with a detachable long strap and two top handles. <br/><br/> Label: CHARLES & KEITH <br/><br/>Price: SGD$79.90";
		bagPrice = 79.90;
		document.getElementById('chosenBag').innerHTML = "Work Handbag";
		bagName = "Work Handbag";
	};
	if(product == 5){
		content = 'Comes with gold hardware. The perfect bag to carry on any casual outtings. <br/><br/> - Length x Height x Width(9.5" x 7" x 2.5") <br/><br/>Price: SGD$49.90';
		bagPrice = 49.90;
		document.getElementById('chosenBag').innerHTML = "River Island Black Textured Mini Satchel";
		bagName = "River Island Black Textured Mini Satchel";
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for something to spice up a basic outfit? Try this classic chain trim floppy hat. <br/><br/> -100% Wool <br/><br/>Price: SGD$76.00";
		accPrice = 76.00;
		document.getElementById('chosenAcc').innerHTML = "Chain Trim Floppy Hat";
		accName = "River Island Black Textured Mini Satchel";
	};
	if(product == 2){
		content = "Thinking of getting a hat? Look no further! This burgundy floppy hat will suit any causal occasion. <br/><br/> -100% Wool <br/><br/>Price: SGD$63.00";
		accPrice = 63.00;
		document.getElementById('chosenAcc').innerHTML = "Felt Floppy Hat";
		accName = "Felt Floppy Hat";
	};
	if(product == 3){
		content = "This classic black floppy hat can spice up any casual outfit. <br/><br/> -100% Wool <br/><br/>Price: SGD$63.00";
		accPrice = 63.00;
		document.getElementById('chosenAcc').innerHTML = "New Big Felt Floppy Hat";
		accName = "New Big Felt Floppy Hat";
	};
	if(product == 4){
		content = "Looking for a bowler hat? TRY THIS!!! Hat comes with rolled brim. <br/><br/> -100% Wool <br/><br/>Price: SGD$39.00";
		accPrice = 39.00;
		document.getElementById('chosenAcc').innerHTML = "Pork Pie Hat";
		accName = "Pork Pie Hat";
	};
	if(product == 5){
		content = "Looking for a hat that is inspired by taylor swift? You can be sure to find this trend right here. <br/><br/> -Machine washable <br/> -Suede Material <br/><br/>Price: SGD$45.00";
		accPrice = 45.00;
		document.getElementById('chosenAcc').innerHTML = "Mini Bowler Hat";
		accName = "Mini Bowler Hat";
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}