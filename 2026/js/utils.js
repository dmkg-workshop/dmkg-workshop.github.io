/*
 * !!! ONLY
 * !!! FUNCTION
 * !!! DEFINTIONS
 */

/**
 * Creates array repeating value len times
 * 
 * @param value
 * @param len
 * @returns {Array}
 */
function fillArray(value, len) {
	var arr = [];
	for (var i = 0; i < len; i++) {
		arr.push(value);
	}
	return arr;
}

/**
 * The native version of this is still not widely implemented
 */
function startsWith(whole, prefix) {
	return whole.substring(0, prefix.length) == prefix;
}

/**
 * Using Double Equals (==)
 */
function arrayContainsDE(array, element) {
	for (idx = 0; idx < triples.length; idx++) {
		if (array[idx]==element)
			return true;
	}
	return false;
}

function changeImage(imgId, imagePath) {
	//console.log("hi");
	var img = document.getElementById(imgId);
	img.href= imagePath;
	img.src=imagePath;
}

/**
 * 
 */
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

///**
// * 
// */
//function addClassToElement(element, className) {
//	element.className += " "+className;
//}
//
///**
// * 
// */
//function removeClassFromElement(element, className) {
//	  //element.className = "";// TODO fix 
//	  element.className = element.className.replace( /(?:^|\s) disabled(?!\S)/g , '' )
//}

var errorHandlerFunction = function(message) {
	// alert("errorHandler!!: " + message);
	console.log("Generic errorHandler called. Message: " + message);
};

/**
 * console.log expanded json
 */
var conLogExp = function(variable) {
	console.log("textNode: "+JSON.stringify(variable, null, " "));
}