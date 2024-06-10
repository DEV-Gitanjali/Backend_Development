const fs= require('fs')

//reading data

// fs.readFile('data.txt' , (err , data)=>{
//   if(err){
//     console.log(err);
//   }

//   else {
//     console.log(data.toString());
//   }
// })



//writing data

fs.writeFile('employee2.txt' , 'new Employee' , (err )=>{
  if(err){
    console.log(err);
  }

  else{
    console.log('data written');
  }
})

// append data

fs.appendFile('employee2.txt' , '\n anther operation' , (err)=>{
  if(err){
    console.log(err);
  }

  else{
    console.log('updated file');
  }
})  


// delete a file 
fs.unlink("employee.text" , (err)=>{
  if(err){
    console.log(err);
  }

  else{
    console.log('file deleted');
  }
})


console.log('this is another operation')