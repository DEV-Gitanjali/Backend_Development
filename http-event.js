const http = require('http')

const server = http.createhttpServer((req, res)=>{

  if(req.method== 'POST'){
    // expecting data from client

    let body =''
    req.on('data' , (chunk)=>{
      body += chunk.toString();
    })


    req.on('end', ()=>{
      console.log(body);
      res.end('data is received')
    })
  }
  res.end("welcome to node js")
})


server.listen(3000)

console.log("listening to port 3000")