/* All functions are objects */
function random() {}
console.dir(random);

obj = {};
console.dir(obj);

/* Constructor function */
SomeFunc = function() {
	console.log(this);
	this.myMethod = function() {
		return "Some method inside function.";
	}
	this.myAttribute = "Some Attribute";
}

anotherFunc = function() {
	console.log("I'm a standard function");
}

anotherFunc();
obj = new SomeFunc();
console.log(obj);
console.log(obj.myMethod());
console.log(obj.myAttribute);

/* Prototypes */
/* Prototype is an object in JS */
myPrototype = {};

obj.prototype = myPrototype;
console.log(obj);

/* Inheriting Prototype of an object */
obj = Object.create(myPrototype);
console.log(obj);

/* Inheritance in action */
GrandParent = function(){
	this.doSomething = function() {
		console.log("Did something.");
	};
	this.logIt = function() {
		console.log(this.bar);
	};
};

GrandParent.prototype.foo = function() {
	console.log("Foo of grandParent");
}

var grandParent = new GrandParent();

myPrototype = Object.create(grandParent);
myPrototype.foo = function() {
	console.log("Foo of prototype.");
}

obj = Object.create(myPrototype);
obj.doSomething();
obj.foo();

/* Exception to prototype chaining - Context */
myPrototype.bar = "I'm prototype bar";
obj.bar = "I'm override of bar";

obj.logIt();
myPrototype.logIt();
grandParent.logIt();

/* Augmenting Objects */

Person = function() {}
var prateek = new Person();

Person.prototype.speak = function(scentence) {
	console.log("Person speaks " + scentence);
}

prateek.speak = function() { console.log("Prateek supports car pooling to reduce traffic.");} 
prateek.speak("Hello Intuit");

var vidya = new Person();
var rohit = new Person();
var sachin = new Person();
vidya.speak("Welcome");

/* Super */
Person = function(name) {
	this.name = name;
	this.speak = function(msg) {
		console.log(this.name + " says " + msg);
	}
}

/*
Person.prototype.speak = function(msg) {
	console.log(this.name + " says " + msg);
}
*/

var rahul = new Person("Rahul");

rahul.speak("hello");
/*
rahul.speak = function(msg) {
	console.log("Rahul won't stop talking");
	Person.prototype.speak.call(this, msg);
}

rahul.speak("hello again");

*/

/* Classy Inheritance */
if (!Object.create || !typeof Object.create === 'function') {
	Object.create = function (o) {         
		var MyJSObject = function () {};   
		MyJSObject.prototype = o;       
		return new MyJSObject();  
	};
}

ClassyObjects = {};
ClassyObjects.copyTo = function(target, source) {
	for(var attr in source) {
		target[attr] = source[attr];
	}
}

ClassyObjects.inherits = function(inherited, definition) {
	var inheritedInstance = Object.create(inherited);
	ClassyObjects.copyTo(inheritedInstance, definition);
	var ClassConstructor = function() {	
		this.super = inherited;
	}
	ClassConstructor.prototype = inheritedInstance;
	return ClassConstructor;
}

ClassyObjects.extend = function(definition) {
	var prototype = this;
	if(typeof prototype == "function") {
		prototype = this.prototype;
	}
	var Constructor = ClassyObjects.inherits(prototype, definition);
	Constructor.extend = this.extend;
	return Constructor;
}

ClassyObjects.define = function(definition) {
	var classyObj = {};
	classyObj.extend = ClassyObjects.extend;
	return classyObj.extend(definition);

}

/* inherited object -> prototype -> constructor function -> object instance */

myPrototype = {};
MyClass = ClassyObjects.inherits(myPrototype, {
	foo: "bar",
	baz: function() {
		console.log(this.foo);
	}
});

myObj = new MyClass();
myObj.baz();

MyDefinedClass = ClassyObjects.define({
	foo: "bar",
	baz: function() {
		console.log(this.foo);
	}
});

MySubClass = MyDefinedClass.extend({
	myFunc: function() {
		console.log("A sub-class function");
	},
	baz: function() {
		console.log("sub-class baz");
	}
});

mySubObj = new MySubClass();
mySubObj.myFunc();
mySubObj.baz();

