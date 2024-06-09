// 1.import readline 

    const readline = require('readline');

    // 2. configure interface to coonnect terminal /  command  line

    const interface = readline.createInterface({
      input:process.stdin,
      output:process.stdout
    })

    // reading valur 

    interface.question("Enter a number " , (num1)=>{
      interface.question("Enter a number" , (num2)=>{

        const maxNumber = Math.max(Number(num1) , Number(num2));
        console.log(`the max number  between ${num1} and ${num2} is ${maxNumber}.`)

      })

    })