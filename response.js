var http=require('http')
http.createServer(function(req,res){
    res.write("This is my first project in nodejs.WELCOME YOU ALL !!!")
    res.end()
}).listen(8080)