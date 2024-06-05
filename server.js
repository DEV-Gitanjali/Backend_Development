// create a server using Node.js

// 1  import http library/ module
const http = require('http');

// 2.create a server 
const server = http.createServer((req, res) => {    //here comes the request
   res.end('welcome to nodejs ninja server')});

  //  3. specify a port to listen to client http.requests

  server.listen(3100, ()=>{
    console.log('listening to port 3100')
  })

  // console.log("sever is listening on port 3100")

