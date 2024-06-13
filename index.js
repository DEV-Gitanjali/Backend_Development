const express= require('express');

const server = express();
server.get('/' , (req, res)=>{
  res.send('Be a coding ninja');
})


server.listen(3000 , ()=>{
  console.log('listening to port 3000')
})

