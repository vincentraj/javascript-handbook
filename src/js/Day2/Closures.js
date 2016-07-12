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


