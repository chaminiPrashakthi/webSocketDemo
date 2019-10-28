const WebSocket = require('ws')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function(err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8000);
});


const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    })
    ws.send('2000')
})