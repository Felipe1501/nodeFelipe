const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<h1>EXPRESS MUITO MELHOR EM!</h1>');
});

const port = 1501;
server.listen(port, function() {
    console.log(`PORTA ${port} rodando Homo Sapiens!`);
})

