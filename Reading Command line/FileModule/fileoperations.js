const fs = require('fs');

// TO read file content using nlocking code

console.log('starting to read ');

const buffer = fs.readFileSync('data.txt' ,{encoding:'utf-8'})

console.log(buffer);

console.log('This is another operation being performed');