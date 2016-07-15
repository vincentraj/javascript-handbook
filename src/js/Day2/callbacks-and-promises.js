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
