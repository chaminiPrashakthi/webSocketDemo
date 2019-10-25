var express = require('express');
var app = express();
var WebSocket = require('ws');
var http = require('http');
const hostname = 'ec2-54-184-89-72.us-west-2.compute.amazonaws.com';
const port = 8080;



var exec = require('child_process').exec,
    publicIp = '54.184.89.72',
    keyPath = '~/Downloads/aws_instance.pem',
    portForwarding = function() {
        var portVal = document.querySelector('#portVal').value,
            poertForwardingCmd = 'ssh -L ' + portVal + ':' + publicIp + ':22 ubuntu@' + publicIp + ' -i ' + keyPath;
        console.log(portVal);
        console.log(poertForwardingCmd);
        exec(getCommand,
            function(error, stdout, stderr) {
                console.log('PF:Executing');
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            }
        );
        console.log('Sending' + portVal);
    };


//web socket connection
const connection = new WebSocket('ws://ec2-54-184-89-72.us-west-2.compute.amazonaws.com:8080');

connection.onopen = () => {
    console.log('connected');

};

connection.onclose = () => {
    console.error('disconnected');
};

connection.onerror = (error) => {
    console.error('failed to connect', error);
}

app.post('/clicked', (req, res) => {
    const click = { clickTime: new Date() };
    console.log(click);

    res.sendStatus(201);

});