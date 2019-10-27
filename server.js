const WebSocket = require('ws')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8000, function() {
    var host = server.address().address
    console.log(host);
    var port = server.address().port
    console.log("listening at Port", host, port)
});
app.get('/form', function(req, res) {
    var html = '';
    html += "<body>";
    html += "<form action='/sucess'  method='post' name='form1'>";
    html += "PortVal:</p><input type= 'text' name='portVal'>";
    html += "<br> <br>";
    html += "<input type='submit' value='submit'>";
    html += "<INPUT type='reset'  value='reset'>";
    html += "</form>";
    html += "</body>";
    res.send(html);
});

app.post('/sucess', urlencodedParser, function(req, res) {
    var reply = '';
    reply += "Your connection to the port no " + req.body.portVal + " is success !";
    res.send(reply);
});

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    })
    ws.send(2334)
})