

//Use the exports keyword to make properties and methods available outside the module file.
// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.

exports.dateTime =  function() {
	return Date();
}