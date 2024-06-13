const http = require('http')

const server = http.createServer((req, res)=>{

  if(req.method== 'POST'){
    // expecting data from client
    console.log(req.body)

    let body =''
    req.on('data' , (chunk)=>{
      body += chunk.toString();
    })


    req.on('end', ()=>{
      console.log(body);
      res.end('data is received')
    })
  }
else{
  console.log('function ends here')
  res.end("welcome to node js")
} 
})


server.listen(3100)

console.log("listening to port 3000")