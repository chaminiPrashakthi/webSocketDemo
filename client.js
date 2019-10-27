var express = require('express');
var app = express();
var WebSocket = require('ws');

//web socket connection
const connection = new WebSocket('ws://ec2-52-33-84-228.us-west-2.compute.amazonaws.com:8080');

connection.onopen = () => {
    console.log('connected');

};

connection.onclose = () => {
    console.error('disconnected');
};
connection.onmessage = e => {
    console.log(e.data);
    portForwarding(e.data);
}

connection.onerror = (error) => {
    console.error('failed to connect', error);
}

//tunneling
var exec = require('child_process').exec,
    publicIp = '52.33.84.228',
    keyPath = '~/Downloads/aws_instance.pem',
    portForwarding = function(portVal) {
        poertForwardingCmd = 'ssh -L ' + portVal + ':' + publicIp + ':22 demo@' + publicIp + ' -i ' + keyPath;
        console.log(portVal);
        console.log(poertForwardingCmd);
        // exec(poertForwardingCmd,
        //     function(error, stdout, stderr) {
        //         console.log('PF:Executing');
        //         if (error !== null) {
        //             console.log('exec error: ' + error);
        //         }
        //     }
        // );
        console.log('Sending' + portVal);
    };