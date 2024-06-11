const express = require('express');
// create a server
const server =  express();

// handle default request
server.get('/' , (req , res)=>{
  res.send('welcome to express server');
});

// listen on specified  port 
server.listen(3100 , ()=>{
  console.log('listening to port 3100');
})
