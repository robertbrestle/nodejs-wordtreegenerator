const assert = require('assert');
const fs = require("fs");
const args = process.argv.slice(2);

var inputFile = "words.txt";
var outputFile = "output.json";

const words = fs.readFileSync(inputFile, "utf8");
var tree = require('../' + outputFile);

describe("Valid Word Test", () => {
	words.split(/\r?\n/).forEach(word => {
		it(word, () => {
			assert.equal(checkWord(word), true);
		});
	});
});

// recursively traverse the n-ary tree to validate a word
function checkWord (word, obj, index) {
	// initialize obj and index
	if (typeof index === "undefined") {
		index = 0;
		obj = tree[word[0]];
	// increment obj
	}else {
		obj = obj[word[index]];
	}
	// verify
	if (typeof obj === "number") {
		return true;
	}else if (typeof obj !== "undefined") {
		return checkWord(word, obj, index + 1);
	}else {
		return false;
	}
}//checkWord