const express = require('express');
// create a server
const server =  express();

// handle default request
// server.get('/' , 
//   // 1st middleware
//   (req , res , next)=>{
//   // res.send(' this is first middleware');
//   console.log('first middleware');
//   next();
// })
// multiple middleware

function firstMiddleware(req, res, next){
  console.log('first middleware');
  next();
}
function secondMiddleware(req, res, next){
  console.log('second middleware');
  next();
}


// 2nd middleware
  server.get( '/',[firstMiddleware , secondMiddleware] ,(req , res)=>{

  res.send('welcome to express server');
});

// listen on specified  port 
server.listen(3100 , ()=>{
  console.log(`server running at http://localhost:3200`);
})
