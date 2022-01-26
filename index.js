const fs = require("fs");
const args = process.argv.slice(2);

var inputFile = "words.txt";
if(typeof args[0] !== "undefined") {
	inputFile = args[0];
}
var outputFile = "output.json";
if(typeof args[1] !== "undefined") {
	outputFile = args[1];
}

// output JSON
var tree = {};

try {
	console.log("Reading " + inputFile);
	const words = fs.readFileSync(inputFile, "utf8");
	
	// build tree
	words.split(/\r?\n/).forEach(word => {
		if(typeof tree[word[0]] === "undefined") {
			tree[word[0]] = {};
		}
		if(typeof tree[word[0]][word[1]] === "undefined") {
			tree[word[0]][word[1]] = {};
		}
		if(typeof tree[word[0]][word[1]][word[2]] === "undefined") {
			tree[word[0]][word[1]][word[2]] = {};
		}
		if(typeof tree[word[0]][word[1]][word[2]][word[3]] === "undefined") {
			tree[word[0]][word[1]][word[2]][word[3]] = {};
		}
		if(typeof tree[word[0]][word[1]][word[2]][word[3]][word[4]] === "undefined") {
			tree[word[0]][word[1]][word[2]][word[3]][word[4]] = 0;
		}
	});
	
	console.log("Writing " + outputFile);
	fs.writeFileSync(outputFile, JSON.stringify(tree));
	
} catch (err) {
	console.error(err);
}