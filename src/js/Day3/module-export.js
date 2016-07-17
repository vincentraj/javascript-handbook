export function myES6Function() {
	console.log("I'm from imported function");
}

export var myExportedObject = {
	name: "Module-Export",
	description: "I'm exported"
};

/* lets export some classes */
class Polygon {
    constructor (id, height, width) {
        this.id = id;
        this.height = height;
    	this.width = width;
    }
}

export class Square extends Polygon {
  constructor(id, sideLength) {
    super(id, sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}



/* ES5 */
/*
var Polygon = function (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
};
*/