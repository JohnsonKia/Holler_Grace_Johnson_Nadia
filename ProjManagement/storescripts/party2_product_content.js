var totalPrice = 0;
var topPrice = 49.90;
var outterWearPrice = 44.90;
var botPrice = 64.90;
var shoesPrice = 39.90;
var bagPrice = 39.90;
var accPrice = 19.90;
var productName = "";
var price = "";

function topChangeTxt(product){
	var content;
	if(product == 1){
		content = "Looking for a versatile piece to wear even after prom? <br />Look no further. <br />This is definitely something you should not miss!<br /><br />Price: SGD$49.90";
		topPrice = 49.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>CPS Black Bardot Crop Top";
		productName = "CPS Black Bardot Crop Top";
		price = 49.90;
	};
	if(product == 2){
		content = "Be inspired by Emma Watson and get a dress somewhat similar to hers. <br />Featuring is our all new Zalora red checkered sequin shift dress.<br /><br />Price: SGD$29.90";
		topPrice = 29.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Red Checkered Sequin Shift Dress";
		productName = ">Red Checkered Sequin Shift Dress";
		price = 29.90;
	};
	if(product == 3){
		content = "You can never go wrong with a white staple top. <br />Add some edginess to your prom outfit with the all new black belt fastening top from something borrowed.<br /><br />Price: SGD$29.90";
		topPrice = 29.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Cut In Buckle Top";
		productName = "Cut In Buckle Top";
		price = 29.90;
	};
	if(product == 4){
		content = "Be inspired by Zendaya.<br />You can never go wrong with colourblock ruffle hem dress.<br /><br />Price: SGD$69.90";
		topPrice = 69.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Colourblock Ruffle Hem Dress";
		productName = "Colourblock Ruffle Hem Dress";
		price = 69.90;
	};
	if(product == 5){
		content = "Be inspired by Elle Fanning and get your own little white dress today!<br /><br />Price: SGD$49.90";
		topPrice = 49.90;
		document.getElementById('chosenTop').innerHTML = "ITEM: <br/>Alley Geometric Print Dress";
		productName = "Alley Geometric Print Dress";
		price = 49.90;
	};
	document.getElementById('topContent').innerHTML = content;
	updateSummary();
}


function outterWearChangeTxt(product){
	var content;
	if(product == 1){
		content = "Set a statement for yourself with our all new orange collarless blazer from Zalora.<br /><br />Price: SGD$44.90";
		outterWearPrice = 44.90;
		document.getElementById('chosenOutterWear').innerHTML = "Zalora Collarless Blazer";
		productName = "Zalora Collarless Blazer";
		price = 44.90;
	};
	if(product == 2){
		content = "Looking for something not too loud? <br />This is definitely the jacket to go for.<br /><br />Price: SGD$35.00";
		outterWearPrice = 35.00;
		document.getElementById('chosenOutterWear').innerHTML = "Collarless Tweed Biker Jacket";
		productName = "Collarless Tweed Biker Jacket";
		price = 35.00;
	};
	document.getElementById('outterWearContent').innerHTML = content;
	updateSummary();
}

function botChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a glamourous skirt by Zalia that comes with a partially elasticated waistband. <br />The perfect figure-hugging silhouette for prom.<br /><br />Price: SGD$64.90";
		botPrice = 64.90;
		document.getElementById('chosenBot').innerHTML = "Zalia Mermaid Maxi Skirt";
		productName = "Zalia Mermaid Maxi Skirt";
		price = 64.90;
	};
	if(product == 2){
		content = "Looking for something simple? <br />Try this! <br />Featuring is a pleather skirt from alcott that would compliment any style options.<br /><br />Price: SGD$39.90";
		botPrice = 39.90;
		document.getElementById('chosenBot').innerHTML = "Alcott Amanda Jersey Skirt";
		productName = "Alcott Amanda Jersey Skirt";
		price = 39.90;
	};
	document.getElementById('botContent').innerHTML = content;
	updateSummary();
}

function shoesChangeTxt(product){
	var content;
	if(product == 1){
		content = "The perfect classic black footwear for any occasion. <br /><br />Price: SGD$39.90";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Pauline Pointy D'Orsay Heels";
		productName = "Pauline Pointy D'Orsay Heels";
		price = 39.90;
	};
	if(product == 2){
		content = "Hit the dance floor with our all new sleek black pumps. <br /><br />Price: SGD$19.90";
		shoesPrice = 19.90;
		document.getElementById('chosenShoes').innerHTML = "Sleek Pumps";
		productName = "Sleek Pumps";
		price = 19.90;
	};
	if(product == 3){
		content = "Looking for something different? <br />Try this! <br />The all new grey metallic triangle printed super platform heels.<br /><br />Price: SGD$ 39.90";
		shoesPrice = 39.90;
		document.getElementById('chosenShoes').innerHTML = "Metallic Triangle Printed Super Platform Heels";
		productName = "Metallic Triangle Printed Super Platform Heels";
		price = 39.90;
	};
	if(product == 4){
		content = "Be inspired by Zendaya and get your own pair of Metallic peeptoe heels today!<br /><br />Price: SGD$180.00";
		shoesPrice = 180.00;
		document.getElementById('chosenShoes').innerHTML = "SHANNON Metallic Dress Pumps";
		productName = "SHANNON Metallic Dress Pumps";
		price = 180.00;
	};
	if(product == 5){
		content = "Bring a twist to your outfit with the all new Melissa Patchull IX wedges.<br /> The perfect classy and seamless ensemble for any outfit.<br /><br />Price: SGD$185.00";
		shoesPrice = 185.00;
		document.getElementById('chosenShoes').innerHTML = "Patchuli IX Wedges";
		productName = "Patchuli IX Wedges";
		price = 185.00;
	};
	document.getElementById('shoesContent').innerHTML = content;
	updateSummary();
}

function bagChangeTxt(product){
	var content;
	if(product == 1){
		content = "Jazz up your outfit with the all new oversized quilt clutch from New Look.<br /><br />-Synthetic<br /><br />Price: SGD$39.90";
		bagPrice = 39.90;
		document.getElementById('chosenBag').innerHTML = "Oversized Quilt Zip Top Clutch";
		productName = "Oversized Quilt Zip Top Clutch";
		price = 39.90;
	};
	if(product == 2){
		content = "You don't need to be quirky to stand out. <br />You only need some class. <br />Try this back to basic black patent boxy minaudiere today!<br /><br />Price: SGD$21.90";
		bagPrice = 21.90;
		document.getElementById('chosenBag').innerHTML = "Patent Boxy Minaudiere";
		productName = "Patent Boxy Minaudiere";
		price = 21.90;
	};
	if(product == 3){
		content = "Featuring is a single grab handle clutch by River Island. <br />- Polyurethane<br /><br />Price: SGD$74.90";
		bagPrice = 74.90;
		document.getElementById('chosenBag').innerHTML = "River Island Chain Detail Strappy Clutch";
		productName = "River Island Chain Detail Strappy Clutch";
		price = 74.90;
	};
	document.getElementById('bagContent').innerHTML = content;
	updateSummary();
}

function accChangeTxt(product){
	var content;
	if(product == 1){
		content = "Featuring is a necklace from something borrowed.  <br />-	Metal alloy<br />-	Lobster clasp closure<br /><br />Price: SGD$19.90";
		accPrice = 19.90;
		document.getElementById('chosenAcc').innerHTML = "Gem Bib Necklace";
		productName = "Gem Bib Necklace";
		price = 19.90;
	};
	if(product == 2){
		content = "Stand out in the crowd with your very own sophisticated Kylie Jenner inspired gloves.<br /><br />Price: SGD$19.00";
		accPrice = 19.00;
		document.getElementById('chosenAcc').innerHTML = "Shirred Bridal Gloves";
		productName = "Shirred Bridal Gloves";
		price = 19.00;
	};
	if(product == 3){
		content = "Looking to spice up your outfit? <br />Try this!<br /><br />Price: SGD$7.00";
		accPrice = 7.00;
		document.getElementById('chosenAcc').innerHTML = "Multi Charms Bracelet";
		productName = "Multi Charms Bracelet";
		price = 7.00;
	};
	if(product == 4){
		content = "Jazz up your outfit with some pearls.<br /><br />Price: SGD$19.90";
		accPrice = 19.90;
		document.getElementById('chosenAcc').innerHTML = "Square And Pearl Long Necklace";
		productName = "Square And Pearl Long Necklace";
		price = 19.90;
	};
	if(product == 5){
		content = "Looking for something different? <br />Try this!<br /><br />Price: SGD$29.00";
		accPrice = 29.00;
		document.getElementById('chosenAcc').innerHTML = "Metal Cuff";
		productName = "Metal Cuff";
		price = 29.00;
	};
	if(product == 6){
		content = "Think your outfit could do some jazzing up? <br />Try this set of minimalistic rings today!<br /><br />Price: SGD$5.90";
		accPrice = 5.90;
		document.getElementById('chosenAcc').innerHTML = "Multi Gemstones Ring Set";
		productName = "Multi Gemstones Ring Set";
		price = 5.90;
	};
	if(product == 7){
		content = "Add some class to your outfit with the sophisticated crystal pendant necklace by Chomel.<br /><br />Price: SGD$29.00";
		accPrice = 29.00;
		document.getElementById('chosenAcc').innerHTML = "Chomel Crystal Pendant Necklace";
		productName = "Chomel Crystal Pendant Necklace";
		price = 29.00;
	};
	document.getElementById('accContent').innerHTML = content;
	updateSummary();
}

function updateSummary(){
	var sum = topPrice + outterWearPrice + botPrice + shoesPrice + bagPrice + accPrice;
	totalPrice = sum.toFixed(2);
	document.getElementById('totalPrice').innerHTML = "TOTAL COST: SGD$" + totalPrice;
}