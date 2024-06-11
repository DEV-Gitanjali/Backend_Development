const fs = require('fs');

// TO read file content using nlocking code

// console.log('starting to read ');

// const buffer = fs.readFileSync('data.txt' ,{encoding:'utf-8'})

// console.log(buffer);

//  creating and writting a file
try{

  fs.writeFileSync('employee.txt' , 'Name:subham pradhan , Age:22 , posstion:Software engineer');

  } catch(err){
    console.log(err);
  }

// Append another employee data

fs.appendFileSync('employee.txt' , '\nName:Gitanjali pradhan , Age:22 , posstion:Software engineer');

// deleting a file
try{

  fs.unlinkSync('employee.text');
}catch(err){

  console.log('file does not exist');
}
 

console.log('This is another operation being performed');