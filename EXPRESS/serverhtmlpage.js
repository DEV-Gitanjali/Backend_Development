
const express = require('express');
// server
const server = express();

server.get('/' , (req,res)=>{
  res.send('welcome to express')
})

// my static file are in public  folder which can be acess directly
server.use(express.static('public'))


server.listen(3300)
console.log('server is listening on 3300')
