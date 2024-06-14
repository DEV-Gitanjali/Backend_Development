const http = require('http')


  const server = http.createServer((req, res)=> {

    res.write('this is comming fron Node js server')

    console.log(req.url);

    if(req.url == '/first'){
      res.end('this is first response')

    }

    else{

      res.end( 'hello from nodejs')
    }

})

server.listen(3200, (req,res) => {
  console.log('listening to port 3200')
})