var express = require('express');
var app = express();
var WebSocket = require('ws');

//web socket connection
const connection = new WebSocket('ws://ec2-54-184-89-72.us-west-2.compute.amazonaws.com:8080');

connection.onopen = () => {
    console.log('connected');

};

connection.onclose = () => {
    console.error('disconnected');
};
connection.onmessage = e => {
    console.log(e.data)
}

connection.onerror = (error) => {
    console.error('failed to connect', error);
}