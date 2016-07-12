/* if begins */
var orderTotal = 49.99;
var isAffordable = false;
if(orderTotal < 50) {
	isAffordable = true;
}
console.log(isAffordable);

/* if else */
var orderTotal = 99.99;
var isAffordable;
if(orderTotal < 50) {
	isAffordable = true;
} else {
	isAffordable = false;
}
console.log(isAffordable);

/* switch */
var orderType = "promo-link";
var discount;

switch(orderType) {
	case "promo-link":
		discount = 10;
		break;
	case "website":
		discount = 5;
		break;
	default:
		discount = 0;
}
console.log(discount);

/* fall through - no example */

/* Switch case with expressions */
var orderTotal = 99.99;
var discount;

switch(true) {
	case orderTotal >= 50 && orderTotal <= 75:
		discount = 10;
		break;
	case orderTotal >= 75 && orderTotal < 100:
		discount = 20;
		break;
	case orderTotal >= 100:
		discount = 30;
		break;
	default:
		discount = 0;
}

console.log(discount);

/* while */
var lineItem = 0;
var currentItem = 3;

while(lineItem < currentItem) {
	console.log("while lineItem : " + lineItem++);
}

/* do..while */
var lineItem = 3;
var currentItem = 3;

do {
	console.log("do..while lineItem : " + lineItem++)
} while(lineItem < currentItem);

/* for */
var lineItem = 0;
var currentItem = 3;

for(var i=lineItem; i<currentItem; i++) {
	console.log("for lineItem : " + i);
}

/* break */
var lineItem = 0;
var currentItem = 3;
for(var i=lineItem; i<currentItem; i++) {
	if(i == 0) break;
	console.log("break lineItem : " + i);
}

/* continue */
var lineItem = 0;
var currentItem = 3;
for(var i=lineItem; i<currentItem; i++) {
	if(i==1) continue;
	console.log("continue lineItem : " + i);
}

/* for..in */
var obj = {
	product: "Product",
	sku: "Sku",
	price: "129.99"
};

for(var field in obj) {
	console.log(field);
}