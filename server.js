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


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/connection', function(req, res) {
    portVal = req.body.portVal;
    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log(`Received message => ${message}`)
        })
        ws.send(portVal);
        console.log('ssh with ' + portVal);
    })
    return res.redirect('/');
});

wss.on('connection', ws => {
    ws.on('message', message => {
            console.log(`Received message => ${message}`)
        })
        // ws.send(22);
    console.log('wdshjn');
})