const WebSocket = require('ws')
var http = require('http');
var port = 8000;
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function(err, data) {

        if (err) {
            res.writeHead(404);
            res.write('file not found');
        } else {
            res.write(data);
        }
        res.end();
    })
});
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    })
    ws.send(2334)
})