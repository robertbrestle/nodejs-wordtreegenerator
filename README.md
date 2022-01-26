# nodejs-wordtreegenerator
Splits a word list into an n-ary tree of characters.

# Usage
`npm start [input_file.txt] [output_file.json]`  

Default input filename = `words.txt`  
Default output filename = `output.json`  

# Unit Tests
`npm run test`  

Currently, only the default filenames are supported for the mocha tests.  

# Example
Input text:  
```
above
admin
admit
zones
```

Output JSON:  
```
{
	"a": {
		"b": {
			"o": {
				"v": {
					"e": 0
				}
			}
		},
		"d": {
			"m": {
				"i": {
					"n": 0,
					"t": 0
				}
			}
		}
	},
	"z": {
		"o": {
			"n": {
				"e": {
					"s": 0
				}
			}
		}
	}
}
```
