// post req

const express = require('express');
const server = express();
// post request
server.get('/' , (req , res)=>{
  res.send('hello world! this is express server');
})
server.post('/' , (req , res)=>{
  res.send('this is post request');
});
server.put('/' , (req , res)=>{
  res.send('this is put request');
});
server.delete('/' , (req , res)=>{
  res.send('this is delete request');
});


server.listen(3200 , ()=>{
  console.log('listening to port 3200')
})