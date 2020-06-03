const http = require('http');

const fs = require('fs');

const server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

    myReadStream.pipe(res); 
});

server.listen(3000, function(err, done){
    if(err){
        console.log('Error listening to server 3000', err);
    } else {
        console.log('Server listening at port 3000');
    }
});