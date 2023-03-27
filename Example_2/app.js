const Parser = require("./parser");

const parser = new Parser();

parser.parse("text.txt", (counts)=>{
    console.table(counts);
});