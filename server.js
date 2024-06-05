// create a server using Node.js

// 1  import http library/ module
const http = require('http');

// 2.create a server 
const server = http.createServer((req, res) => 
    {   
      console.log(req.url)  ;
          // response ends
      if(req.url=='/product'){
        return res.end('this is a product')
      }
      else if(req.url == '/user')
        {
          res.end('welcome to NodeJS Server');
        }
      

      
      //modifying the response
   res.end('welcome to nodejs ninja server')});

  //  3. specify a port to listen to client http.requests

  server.listen(3100, ()=>{
    console.log('listening to port 3100')
  })

  // console.log("sever is listening on port 3100")



