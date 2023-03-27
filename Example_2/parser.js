const { count } = require('console');
const fs = require('fs');

class Parser {
    parse(filename, delegate) {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;

            const counts = {};
            for (let i = 0; i < data.length; i++) {
                const char = data[i];
                counts[char] = counts[char] ? counts[char] + 1 : 1;
            }

            const result = [];
            for(let char in counts){
                result.push({char, count:counts[char]});
            }
            delegate(result);
        });
    }
}

module.exports = Parser;