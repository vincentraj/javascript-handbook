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

