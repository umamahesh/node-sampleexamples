console.log("closures example");

/*function add() {
	var counter = 0;
    counter += 1;
    console.log(counter);
}

add();
add();
add();*/

//JavaScript supports nested functions. Nested functions have access to the scope "above" them.


// function add() {
//     var counter = 0;
//     function plus() {counter += 1;}
//     plus();    
//     return counter; 
// }

// console.log(add());
// console.log(add());
// console.log(add());

//We also need to find a way to execute counter = 0 only once.
//We need a closure.

//Remember self-invoking functions? What does this function do?


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
console.log(add());

//A closure is a function having access to the parent scope, even after the parent function has closed.
//A closure is an inner function that has access to the outer (enclosing) function’s variables
//The closure has three scope chains:
//  it has access to its own scope (variables defined between its curly brackets)
//  it has access to the outer function’s variables
//  it has access to the global variables.
//Closures have access to the outer function’s variable even after the outer function returns.


function showName (firstName, lastName) {
	var nameIntro = "Your name is ";

	function makeFullName() {
	  return nameIntro + firstName + " " + lastName;
	}

	return makeFullName();
}



var a = showName ("Michael", "Jackson"); // Your name is Michael Jackson 
console.log(a);

​function fullName(firstName){
	var name = "My name is "

	function celebrityName(somename){
     return name + firstName + somename;
	}
  return celebrityName();
}

var mjName = fullName("Michael");
console.log(mjName);
