/* Simple Function Definition */
function helloFoo() {
    console.log("Foo function invoked.");
}
helloFoo();

/* Parameterised Function */
function helloFooParam(param1) {
    console.log("Foo function invoked with : " + param1);
}
helloFooParam(10);

/* Calling Function Before Declaration */
callFooBeforeDeclaring();

function callFooBeforeDeclaring() {
    console.log("Foo still invoked, irrespective of where it is declared.");
}

/* Variable function arguments */
function fooWithVarArgs(company, bu, event) {
    console.log("Event is : " + event);
}
fooWithVarArgs("Intuit", "SBG");

/* Function with return keyword */
function add(num1, num2) {
    return num1 + num2;
}
var result = add(3,5);
console.log(result);

/* Functions without return keyword, default return type */
function withoutReturn() {
    /* does something */
}
var result = withoutReturn();
console.log(result);

/* Anonymous function */
var task = function() {
    console.log("Complex tasks executed...");
};
console.log(typeof task);
task();

/* Hoisting */
function sendInvoice() {
    if(false) {
        var invoice = "New Invoice";
    }
    console.log(invoice);
}
sendInvoice();
