/* Constants */
const PI = 3.141593;
console.log(PI > 3.0);

/* Blocked scope */
function scopeFunction() {
	/* some work */
	for(var i=0; i<2; i++);
	console.log(i);
}

scopeFunction();

/* Arrow Functions */
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });
console.log(a2);

var a3 = a.map( s => s.length );
console.log(a3);

// -------- //
var evens = [2, 4, 6, 8];
var odds = evens.map(x => x - 1);
console.log(odds);

// Statements //
var nums = evens.concat(odds);
nums.forEach(function(v, i) {
	nums[i] = v*13;
	if(v%2 == 0) {
		evens.push(v);
	}
});
console.log(nums);

nums = nums.map(x => x*13);
nums.forEach( v => { v%2 === 0 ? evens.push(v) : "" } );
console.log(nums);

/* Destructuring */
// Array Matching 
var list = [ 1, 2, 3 ];
var [ a, ,b ] = list;
console.log(a,b);
// Swapping
[b,a] = [a,b];
console.log(a,b);

// Object Matching 
function getData() {
	var foo =  {
		name: "Prateek",
		place: "Polland",
		animal: "Panda",
		thing: "PenDrive"
	};
	return foo;
}

var { name: a, place: b, animal: c, thing: d } = getData();
console.log(a, b, c, d);

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);

/* Modules */
import { myES6Function, myExportedObject } from './module-export';

myES6Function();
console.log(myExportedObject);

/* Classes */
console.log("--- Classes ---");
import {Square} from './module-export';

var randomId = Math.floor(Math.random(10) * 100);

var square = new Square(randomId, 2);
console.log("Area of square :", square.area);