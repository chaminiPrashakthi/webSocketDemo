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
    var data = {
        "portVal": portVal,
    }
    console.log("DATA is " + JSON.stringify(data));
    ws.send(JSON.stringify(data));
    return res.redirect('/');
});

wss.on('connection', ws => {
    ws.on('message', message => {
            console.log(`Received message => ${message}`)
        })
        // ws.send(22);
    console.log('wdshjn');
})