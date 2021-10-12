const stalinSort = require('./stalinSort');
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter your name (or any other string) for Stalin Sorting: ", (input) => {
	console.log(stalinSort(input, false));
	process.exit(0);
});
