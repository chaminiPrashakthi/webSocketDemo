const WebSocket = require('ws')
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');
app.use('/', router);
app.listen(process.env.port || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var portVal = null;
const wss = new WebSocket.Server({ port: 8080 })

// When a connection is established
wss.on('connection', function(socket) {
    console.log('Opened connection ');
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.post('/connection', function(req, res) {
        portVal = req.body.portVal;
        console.log('ssh with ' + portVal);
        // Send data back to the client
        socket.send(portVal);

        return res.redirect('/');
    })


    // When data is received
    socket.on('message', function(message) {
        console.log('Received: ' + message);
    });

    // The connection was closed
    socket.on('close', function() {
        console.log('Closed Connection ');
    });

});