function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = " ";
	var text2 = " ";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Rotter Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Creeper Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Lurker Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Skin Eater Extra Large Pizza") {
		sizeTotal = 16;
	}
	text2 = text2 + sizeTotal + "<br>";
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1, text2); // All three of these variables will be passed on to each function
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Crawler Cheese Stuffed") {
		crustTotal = 3;
	}
	text2 = text2 + crustTotal + "<br>";
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1, text2); // All three of these variables will be passed on to each function
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var selectedSauce = sauceArray[j].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCheese(runningTotal,text1, text2); // All three of these variables will be passed on to each function
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			var selectedCheese = cheeseArray[j].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
		if (selectedCheese === "Extra Zombie Cheese") {
			cheeseTotal = 3;
		}
	text2 = text2+cheeseTotal+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getOutermeat(runningTotal,text1, text2); // All three of these variables will be passed on to each function
};

function getOutermeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var outermeatTotal = 0;
	var selectedOutermeat = [];
	var outermeatArray = document.getElementsByClassName("outermeat");
	for (var j = 0; j < outermeatArray.length; j++) {
		if (outermeatArray[j].checked) {
			selectedOutermeat.push(outermeatArray[j].value);
			console.log("selected outermeat item: ("+outermeatArray[j].value+")");
		}
	}
	var outermeatCount = selectedOutermeat.length;
	if (outermeatCount > 1) {
		outermeatTotal = (outermeatCount - 1);
	} else {
		outermeatTotal = 0;
	}
	runningTotal = (runningTotal + outermeatTotal);
	for (var j = 0; j < selectedOutermeat.length; j++) {
			text1 = text1+selectedOutermeat[j]+"<br>";
			if (outermeatCount <= 1) {
				outermeatTotal = (outermeatCount - 1);
				text2 = text2 + 0 + "<br>";
				outermeatCount = outermeatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				outermeatCount = outermeatCount - 1;
			}
	}
	console.log("total selected outermeat items: "+outermeatCount);
	console.log(outermeatCount+" meat - 1 free meat = "+"$"+outermeatTotal+".00");
	console.log("outermeat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00")
	getInnermeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function
};

function getInnermeat(runningTotal,text1,text2) {
	var innermeatTotal = 0;
	var selectedInnermeat = [];
	var innermeatArray = document.getElementsByClassName("innermeat");
	for (var j = 0; j < innermeatArray.length; j++) {
		if (innermeatArray[j].checked) {
			selectedInnermeat.push(innermeatArray[j].value);
			console.log("selected innermeat item: ("+innermeatArray[j].value+")");
		}
	}
	var innermeatCount = selectedInnermeat.length;
	if (innermeatCount > 1) {
		innermeatTotal = (innermeatCount - 1);
	} else {
		innermeatTotal = 0;
	}
	runningTotal = (runningTotal + innermeatTotal);
	for (var j = 0; j < selectedInnermeat.length; j++) {
			text1 = text1+selectedInnermeat[j]+"<br>";
			if (innermeatCount <= 1) {
				innermeatTotal = (innermeatCount - 1);
				text2 = text2 + 0 + "<br>";
				innermeatCount = innermeatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				innermeatCount = innermeatCount - 1;
			}
	}
	console.log("total selected innermeat items: "+innermeatCount);
	console.log(innermeatCount+" meat - 1 free meat = "+"$"+innermeatTotal+".00");
	console.log("innermeat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00")
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3><strong>$"+runningTotal+".00"+"</strong></h3>";
};	

function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};

