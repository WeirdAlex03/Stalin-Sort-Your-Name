const assert = require("assert");

/**
 * Stalin Sorts a string. Letters with an index out of order are removed
 * 
 * @param   {string}  input           - The string to sort
 * @param   {boolean} [caseSen=false] - Whether to consider case or not. `true` = Case sensitive. Default `false`.
 * @returns {string}                    The Stalin Sorted string
 */
function stalinSort(input, caseSen = false) {
	assert(typeof(input) == "string", "Input must be a string");

	// Nothing to sort
	if (input.length <= 1) return input;

	/** @type string[] */
	var letters = input.split("");

	if (caseSen) {
		for (let i = 1; i < letters.length; i++) {
			if (letters[i] === " " && letters[i - 1] !== " ") {
				// Ignore spaces
			} else if (letters[i] === " " && letters[i - 1] === " ") {
				// No more than one space in a row
				letters.splice(i, 1);
				i--;
			} else if (letters[i - 1] === " " && letters[i] < letters[i - 2]) {
				// Check letter before space
				letters.splice(i, 1);
				i--;
			} else if (letters[i] < letters[i - 1]) {
				//Just check last letter
				letters.splice(i, 1);
				i--;
			}
		}
	} else {
		for (let i = 1; i < letters.length; i++) {
			if (letters[i] === " " && letters[i - 1] !== " ") {
				// Ignore spaces
			} else if (letters[i] === " " && letters[i - 1] === " ") {
				// No more than one space in a row
				letters.splice(i, 1);
				i--;
			} else if (letters[i - 1] === " " && letters[i].toLowerCase() < letters[i - 2].toLowerCase()) {
				// Check letter before space
				letters.splice(i, 1);
				i--;
			} else if (letters[i].toLowerCase() < letters[i - 1].toLowerCase()) {
				//Just check last letter
				letters.splice(i, 1);
				i--;
			}
		}
	}

	for (i = 0; i < 10000; i++) {

	}

	return letters.join("");

}

module.exports = stalinSort;
