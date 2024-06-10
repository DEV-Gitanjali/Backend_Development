const fs = require('fs');

const buffer = fs.readFileSync('notes.txt' ,{ encoding: 'utf8'})
console.log(buffer);


fs.appendFileSync('notes.txt' , '\nMessage:BE a coding ninja');
console.log('complete the task');

