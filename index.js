var http = require('http')

const port = 80

function requestHandler(reqm res){
  res.end(`Hello ${process.platform}`)
}

var server = http.createServer(requestHandler)

server.listen(port, function(){
  console.log(`${process.env.NODE_ENV} server listening on port: ${port}`);
})
