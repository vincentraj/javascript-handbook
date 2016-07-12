/* Function Scope */
function outerFunction() {
	var foo = 10;
	function innerFunction() {
		var bar = 20 + foo;
		console.log(foo);
	}
	innerFunction();
	console.log(bar);
}

outerFunction();

/* ------------------- */

function outerScope() {
	var foo;
	function sayFoo() {
		if(true) {
			foo = "closured variable";
		}
	}
	sayFoo();
	console.log(foo);
}
outerScope();

/* ------------------ */