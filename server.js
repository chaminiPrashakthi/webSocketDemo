const WebSocket = require('ws')
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

app.use('/', router);
app.listen(process.env.port || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var portVal = null;
var text = null;
const wss = new WebSocket.Server({ port: 8080 })

// connection establish
wss.on('connection', function(connection) {
    console.log('Opened connection ');

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.post('/', function(req, res) {
        portVal = req.body.portVal;
        console.log('ssh with ' + portVal);
        // Send data back to the client
        connection.send(portVal);
        // data is received from client
        connection.on('message', function(message) {
            console.log('Received: ' + message);
            if (message != 'Error') {
                console.log('Success')
                text = 'Success'
            } else {
                console.log('Error');
                text = 'Error';
            }

        });
        res.write(text);
        res.end()
    })



    // The connection was closed
    connection.on('close', function() {
        console.log('Closed Connection ');
    });

});