//1. import readline
const readline = require('readline');

// 2. configure interface to connect with terminal / command line

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 3. reading value
interface.question("enter a number", (num1)=>{
  interface.question("Enter a number" , (num2)=>{
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  }) 
});