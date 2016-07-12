/* Primitive Types */
var n = 42;				//	variable n in memory: space allocation with value 42
var s = "fortey-two"; 	//	s: | "fortey-two" |
var b = true;			//	b: | true |

//------//
var a = n;				//	a: | n |
//	values gets copied and not referenced in primitive types
a = 9; 					//	a: | 9 | , n still points to 42

console.log(n);

/* Reference types */
var invoice = {					//	invoice: | pointer |
	receiverName: "John"
};

var invoiceCopy = invoice;		//	invoiceCopy: | pointer to invoice |
invoiceCopy.receiverName = "Donald Trump";

console.log(invoice);

/*Passing reference types */
function updateInvoice(invoice) {
	if(invoice) {
		invoice.receiverName = "Prateek";
	}
}

updateInvoice(invoice);

console.log(invoice.receiverName);

/* Arrays Intro - creation and loosly typed */
var empIds = new Array(1, 2, 8, 3, 1, 13);
console.log(empIds);

/* Array objects */
/* immutable functions */
console.log("Length: ", empIds.length);
console.log("toString(): ", empIds.toString());
console.log("valueOf(): ", empIds.valueOf(2));
console.log("join(): ", empIds.join("/"));

var coOp = [3, 5];
empIds = empIds.concat(coOp);
console.log("concat(): ", empIds);

var sliced = empIds.slice(0,2);
console.log("slice(): ", sliced);
console.log("empIds after slice(): ", empIds);

console.log("indexOf(): ", empIds.indexOf(1));
console.log("lastIndexOf(): ", empIds.lastIndexOf(1));

console.log("map(): ", empIds.map(function(val) { return val*5; }));

/* mutators */
empIds.push(1);
console.log("push(): ", empIds);
console.log("pop(): ", empIds.pop());

empIds.shift();
console.log("shift(): ", empIds);
console.log("reverse(): ", empIds.reverse());

var spliced = empIds.splice(1,1);
console.log("splice(): ", spliced);
console.log("empIds after splice(): ", empIds);

empIds.sort();
console.log("sort() 1: ", empIds);
empIds.sort(function(a, b) {
	return a - b;
});
console.log("sort() 2: ", empIds);

/* RegEx */
var text = "I am new to Amsterdam!!!";
var pattern = new RegExp("am", "g");
console.log(pattern.test(text));

pattern = /am/ig;
console.log(pattern.exec(text));
console.log(text.match(pattern));

/* Objects */
var invoiceObj = Object.create(invoice);
console.log(invoiceObj);

function MyJavaScriptObject() {

}

if (typeof MyJavaScriptObject.create !== 'function') {
	MyJavaScriptObject.create = function (o) {         
		var MyJSObject = function () {};   
		MyJSObject.prototype = o;       
		return new MyJSObject();  
	};
}

var myObject = MyJavaScriptObject.create(invoice);
console.log(myObject);

/* JSON */
