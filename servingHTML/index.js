const http = require('http');
const fs= require('fs');


const server = http.createServer((req, res) => {
 const data= fs.readFileSync("index.html").toString();
  res.end(data);
})

server.listen(3200)
  console.log("listening to port 3200");