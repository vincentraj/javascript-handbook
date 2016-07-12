// Context 1 - '.' notation setting context

/*
foo = {
	bar: function() {
		console.log(this);
	},

	baz: function(callback) {
		callback();
	}
};

foo.bar();
foo.baz(foo.bar);
*/


// Context 2 - function context
/*
function fun() {
	function bar() {
		console.log(this);
	}

	function baz(callback) {
		callback();
	}

	bar();
	baz(bar);
}

fun();
*/


// Context 3 - call() vs apply()
/*
function Foo(){
	this.bar = function(a, b) {
		console.log(this);
		
	};

	this.baz ="prateek";
};

newContxt = {};

var foo = new Foo();
console.log(foo.baz);

//foo.bar.call();
//foo.bar.call(newContxt);
*/

//	Context 4 - Function scope context

/*
function Book(bookName) {	//	Constructor functions
	//console.log(this);
	//	private variable
	var name = bookName;

	this.getName = function() {
		return name;
	}
}

f = new Book("Handbook of JavaScript");
console.log(f.name);
//console.log(f.getName());
*/

//	Context 5 - Callbacks
//	Stored context & Bounded context


