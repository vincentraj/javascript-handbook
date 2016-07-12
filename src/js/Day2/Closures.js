//	Closures 1

function Book(pName, pYear) {
	//this.name = name;	//	can access
	var _name = pName;	//	cannot access outside
	var _year = pYear;

	//	but if it can access var name even after it returned, that'd be cool
	this.getName = function() {
		//	this variable is not garbage collected, still holds reference
		return _name;
	}

	this.getYear = function() {
		return _year;
	}
}

var workshopTitle = "Handbook of JavaScript";
var me = new Book(workshopTitle, 2015);

console.log(me.getName());

//	Closures 2 -- progressive

function Author(pName) {
	var _name = pName;
	var books = [];

	this.addBook = function(pBook) {
		books.push(pBook);
	}

	this.getBookByTitleFunc = function(title) {
		var requiredBook = {};
		for(var i in books) {
			var book = books[i];
			if (book.getName() === title) {
				requiredBook = book;
				break;
			}
		}
		return requiredBook;
	}
}

var aurthor = new Author("Aurthor");
aurthor.addBook(me);

var result = aurthor.getBookByTitleFunc(workshopTitle);
if(Object.keys(result).length > 0) {
	console.log(result.getYear());
}

var BookKart = (function() {
	//	magic
	var getBookByTitleFunc = function(author, bookTitle) {
		console.log("I'm private...");
		return author.getBookByTitleFunc(bookTitle);
	}

	return {
		getBookByAuthor: function(author, bookTitle) {
			console.log("public...");
			return getBookByTitleFunc(author, bookTitle);
		}
	}
})();

var book = BookKart.getBookByAuthor(aurthor, workshopTitle);
console.log("Name of book : " + book.getName());

// Closures 3 - Memory

MyInvoice = (function() {
	//	private var
	var projectedAccountBalance = 0;

	var invoice = function() {
		this.key = "Invoice";
		this.sendToCustomer = function() {
			projectedAccountBalance += 100;
			return projectedAccountBalance;
		}
	}
	return invoice;
})();

var myInvoice1 = new MyInvoice();
var myInvoice2 = new MyInvoice();
var myInvoice3 = new MyInvoice();


console.log("Balance: ", myInvoice1.sendToCustomer());
console.log("Balance: ", myInvoice2.sendToCustomer());
console.log("Balance: ", myInvoice3.sendToCustomer());

