function Func(){
	this.bar = "Promises";
	this.workshop = "JS";

	return {
		bar: this.bar,
		workshop: this.workshop
	};
}

var f = new Func();

console.log(f);

/* Async XHR */
// Make an async HTTP request
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'js/Day2/data/data.json', async);
xhr.send();

// Create a three second delay (don't do this in real life)
var timestamp = Date.now() + 2000;
while (Date.now() < timestamp);

// Now that three seconds have passed,
// add a listener to the xhr.load and xhr.error events
function listener(e) {    
	var response = JSON.parse(this.response);
	console.log('Response data object : ', response);
}
xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);

/* Callback */
var foo = {
	bar: function() {
		//console.log(this);
        return doSomething();
	},

	baz: function() {
		console.log("Done with something.");
	},

	err: function() {
		console.log("Err...");
	}
};

var dfd = $.Deferred();
function doSomething(callback) {
    setTimeout(function() {
    	dfd.resolve();
    }, 2000);
    return dfd.promise();
}

foo.bar()
	.done(foo.baz)
	.fail(foo.err);

/* Chaining */
var calculate = function(value) {
	var dfd = $.Deferred();
	setTimeout(function() {
    	dfd.resolve(value + 1);
    }, 1000);
	return dfd.promise();
}

var verify = function(result) {
	console.log(result);
}

calculate(1)
	.then(calculate)
	.then(calculate)
	.done(verify);